---
{}
---
/*

```javascript
*/
/// DYNAMIC PIXEL-BLOCK TRACKER
// Turns shapes into "Ghost Controllers" that automatically update their pixel clusters when modified.
// Guarantees the Ghost shape remains on top to easily catch mouse interactions.

const PIXEL_SIZE = 4;
const DEBOUNCE_TIME = 300; // Milliseconds to wait after dragging stops before updating pixels

// --- 1. THE MATH ENGINE ---
function getLinePixels(x0, y0, x1, y1, size) {
    const points = [];
    let gX0 = Math.floor(x0 / size); let gY0 = Math.floor(y0 / size);
    let gX1 = Math.floor(x1 / size); let gY1 = Math.floor(y1 / size);
    let dx = Math.abs(gX1 - gX0); let dy = Math.abs(gY1 - gY0);
    let sx = (gX0 < gX1) ? 1 : -1; let sy = (gY0 < gY1) ? 1 : -1;
    let err = dx - dy;
    while (true) {
        points.push({ x: gX0 * size, y: gY0 * size, key: `${gX0},${gY0}` });
        if (gX0 === gX1 && gY0 === gY1) break;
        let e2 = 2 * err;
        if (e2 > -dy) { err -= dy; gX0 += sx; }
        if (e2 < dx) { err += dx; gY0 += sy; }
    }
    return points;
}

function getEllipsePixels(x, y, w, h, size) {
    const points = [];
    let gXc = Math.floor((x + w/2) / size); let gYc = Math.floor((y + h/2) / size);
    let a = Math.floor((w/2) / size); let b = Math.floor((h/2) / size);
    if (a === 0 || b === 0) return points;
    let posX = 0; let posY = b;
    let a2 = a * a; let b2 = b * b;
    let d1 = b2 - a2 * b + 0.25 * a2;
    let dx = 2 * b2 * posX; let dy = 2 * a2 * posY;

    function addPoints(cx, cy, px, py) {
        points.push({x: (cx+px)*size, y: (cy+py)*size, key: `${cx+px},${cy+py}`});
        points.push({x: (cx-px)*size, y: (cy+py)*size, key: `${cx-px},${cy+py}`});
        points.push({x: (cx+px)*size, y: (cy-py)*size, key: `${cx+px},${cy-py}`});
        points.push({x: (cx-px)*size, y: (cy-py)*size, key: `${cx-px},${cy-py}`});
    }

    while (dx < dy) {
        addPoints(gXc, gYc, posX, posY);
        if (d1 < 0) { posX++; dx += 2 * b2; d1 += dx + b2; } 
        else { posX++; posY--; dx += 2 * b2; dy -= 2 * a2; d1 += dx - dy + b2; }
    }
    let d2 = b2 * (posX + 0.5) * (posX + 0.5) + a2 * (posY - 1) * (posY - 1) - a2 * b2;
    while (posY >= 0) {
        addPoints(gXc, gYc, posX, posY);
        if (d2 > 0) { posY--; dy -= 2 * a2; d2 += a2 - dy; } 
        else { posY--; posX++; dx += 2 * b2; dy -= 2 * a2; d2 += dx - dy + a2; }
    }
    return points;
}

function getArrowheadPixels(p1x, p1y, p2x, p2y, size) {
    const angle = Math.atan2(p2y - p1y, p2x - p1x);
    const headlen = 25; 
    const lx = p2x - headlen * Math.cos(angle - Math.PI / 6);
    const ly = p2y - headlen * Math.sin(angle - Math.PI / 6);
    const rx = p2x - headlen * Math.cos(angle + Math.PI / 6);
    const ry = p2y - headlen * Math.sin(angle + Math.PI / 6);
    return [...getLinePixels(p2x, p2y, lx, ly, size), ...getLinePixels(p2x, p2y, rx, ry, size)];
}

// --- 2. PIXEL GENERATOR FUNCTION ---
function generatePixelsForGhost(ghostEl, eaInstance) {
    let rawBlocks = [];
    const drawnBlocks = new Map();

    if (ghostEl.type === "rectangle") {
        rawBlocks.push(...getLinePixels(ghostEl.x, ghostEl.y, ghostEl.x + ghostEl.width, ghostEl.y, PIXEL_SIZE)); 
        rawBlocks.push(...getLinePixels(ghostEl.x + ghostEl.width, ghostEl.y, ghostEl.x + ghostEl.width, ghostEl.y + ghostEl.height, PIXEL_SIZE)); 
        rawBlocks.push(...getLinePixels(ghostEl.x + ghostEl.width, ghostEl.y + ghostEl.height, ghostEl.x, ghostEl.y + ghostEl.height, PIXEL_SIZE)); 
        rawBlocks.push(...getLinePixels(ghostEl.x, ghostEl.y + ghostEl.height, ghostEl.x, ghostEl.y, PIXEL_SIZE)); 
    } 
    else if (ghostEl.type === "ellipse") {
        rawBlocks.push(...getEllipsePixels(ghostEl.x, ghostEl.y, ghostEl.width, ghostEl.height, PIXEL_SIZE));
    }
    else if (["line", "freedraw", "arrow"].includes(ghostEl.type) && ghostEl.points) {
        for (let i = 0; i < ghostEl.points.length - 1; i++) {
            const startX = ghostEl.x + ghostEl.points[i][0];
            const startY = ghostEl.y + ghostEl.points[i][1];
            const endX = ghostEl.x + ghostEl.points[i + 1][0];
            const endY = ghostEl.y + ghostEl.points[i + 1][1];
            rawBlocks.push(...getLinePixels(startX, startY, endX, endY, PIXEL_SIZE));
        }
        if (ghostEl.type === "arrow" && ghostEl.endArrowhead && ghostEl.points.length >= 2) {
            const p1 = ghostEl.points[ghostEl.points.length - 2];
            const p2 = ghostEl.points[ghostEl.points.length - 1];
            rawBlocks.push(...getArrowheadPixels(
                ghostEl.x + p1[0], ghostEl.y + p1[1], 
                ghostEl.x + p2[0], ghostEl.y + p2[1], PIXEL_SIZE
            ));
        }
    }

    eaInstance.style.strokeColor = ghostEl.strokeColor;
    eaInstance.style.backgroundColor = ghostEl.strokeColor;
    eaInstance.style.fillStyle = "solid";
    eaInstance.style.roughness = 0;
    eaInstance.style.strokeWidth = 1;

    // Filter out duplicate grid hits
    const uniqueBlocks = [];
    rawBlocks.forEach(block => {
        if (!drawnBlocks.has(block.key)) {
            uniqueBlocks.push(block);
            drawnBlocks.set(block.key, true);
        }
    });

    // ==========================================
    // 2-PASS GREEDY MESHING ALGORITHM
    // ==========================================
    
    // PASS 1: Merge blocks horizontally
    const rowMap = new Map();
    uniqueBlocks.forEach(b => {
        if (!rowMap.has(b.y)) rowMap.set(b.y, []);
        rowMap.get(b.y).push(b.x);
    });

    const horizontalRects = [];
    rowMap.forEach((xCoords, y) => {
        xCoords.sort((a, b) => a - b);
        let startX = xCoords[0];
        let currentWidth = PIXEL_SIZE;
        
        for (let i = 1; i < xCoords.length; i++) {
            if (xCoords[i] === startX + currentWidth) {
                currentWidth += PIXEL_SIZE;
            } else if (xCoords[i] > startX + currentWidth) {
                horizontalRects.push({ x: startX, y: y, w: currentWidth, h: PIXEL_SIZE });
                startX = xCoords[i];
                currentWidth = PIXEL_SIZE;
            }
        }
        horizontalRects.push({ x: startX, y: y, w: currentWidth, h: PIXEL_SIZE });
    });

    // PASS 2: Merge horizontal strips vertically 
    const finalRects = [];
    const colMap = new Map();
    horizontalRects.forEach(r => {
        const key = `${r.x},${r.w}`;
        if (!colMap.has(key)) colMap.set(key, []);
        colMap.get(key).push(r.y);
    });

    colMap.forEach((yCoords, keyStr) => {
        const [x, w] = keyStr.split(',').map(Number);
        yCoords.sort((a, b) => a - b);
        
        let startY = yCoords[0];
        let currentHeight = PIXEL_SIZE;
        
        for (let i = 1; i < yCoords.length; i++) {
            if (yCoords[i] === startY + currentHeight) {
                currentHeight += PIXEL_SIZE;
            } else if (yCoords[i] > startY + currentHeight) {
                finalRects.push({ x, y: startY, w, h: currentHeight });
                startY = yCoords[i];
                currentHeight = PIXEL_SIZE;
            }
        }
        finalRects.push({ x, y: startY, w, h: currentHeight });
    });

    // Draw the highly optimized greedy rectangles
    finalRects.forEach(rect => {
        const id = eaInstance.addRect(rect.x, rect.y, rect.w, rect.h);
        const generatedRect = eaInstance.getElement(id);
        
        generatedRect.customData = { isPixelChild: true, parentId: ghostEl.id };
        generatedRect.groupIds = [...(ghostEl.groupIds || [])]; 
    });
}

// --- 3. THE WATCHER INITIALIZATION ---

// Force clear any old watchers to prevent memory leaks
if (window.activePixelWatcher) {
    clearInterval(window.activePixelWatcher);
}

window.pixelUpdateQueue = {}; 
window.ghostVersions = {};

window.activePixelWatcher = setInterval(() => {
    const currentEa = typeof ea !== "undefined" ? ea : window.ExcalidrawAutomate;
    if (!currentEa) return;

    const api = currentEa.getExcalidrawAPI();
    if (!api) return;

    const elements = api.getSceneElements();

    elements.forEach(el => {
        if (el.customData && el.customData.isPixelGhost) {
            
            const lastVersion = window.ghostVersions[el.id] || el.customData.lastVersion;
            
            if (el.version !== lastVersion) {
                window.ghostVersions[el.id] = el.version;
                
                if (window.pixelUpdateQueue[el.id]) clearTimeout(window.pixelUpdateQueue[el.id]);
                
                window.pixelUpdateQueue[el.id] = setTimeout(() => {
                    const currentSceneElements = api.getSceneElements();
                    
                    // 1. Target old pixels for native deletion 
                    const oldPixels = currentSceneElements.filter(
                        child => child.customData?.isPixelChild && child.customData.parentId === el.id
                    );
                    
                    currentEa.clear();
                    
                    // Native deletion natively flags them so Excalidraw's engine truly deletes them
                    if (oldPixels.length > 0) {
                        currentEa.deleteViewElements(oldPixels);
                    }
                    
                    // 2. Generate optimized meshed pixels
                    generatePixelsForGhost(el, currentEa);
                    
                    // 3. Update the view cleanly
                    currentEa.addElementsToView(false, false);

                    // 4. Force the ghost shape back to the very top Z-index
                    const updatedScene = api.getSceneElements();
                    const ghostIdx = updatedScene.findIndex(e => e.id === el.id);
                    if (ghostIdx !== -1) {
                        const ghost = updatedScene.splice(ghostIdx, 1)[0];
                        updatedScene.push(ghost);
                        api.updateScene({ elements: updatedScene });
                    }
                    
                }, DEBOUNCE_TIME);
            }
        }
    });
}, 100); 

new window.Notice("Started Background Pixel Watcher!");


// --- 4. BINDING SELECTED SHAPES & UI MENU ---
const currentEa = typeof ea !== "undefined" ? ea : window.ExcalidrawAutomate;
const selectedElements = currentEa.getViewSelectedElements();
const validTypes = ["line", "arrow", "freedraw", "rectangle", "ellipse"];
const shapes = selectedElements.filter(el => validTypes.includes(el.type));

if (shapes.length > 0) {
    // Construct the Menu UI dynamically
    const menuOverlay = document.createElement("div");
    menuOverlay.id = "pixel-tracker-menu";
    menuOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.4); z-index: 999999;
        display: flex; justify-content: center; align-items: center;
        backdrop-filter: blur(2px);
    `;
    
    const menuBox = document.createElement("div");
    menuBox.style.cssText = `
        background: var(--background-primary, #2b2b2b); padding: 24px;
        border-radius: 12px; border: 1px solid var(--background-modifier-border, #555);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; gap: 14px;
        min-width: 280px; font-family: sans-serif;
    `;
    
    menuBox.innerHTML = `
        <h3 style="margin: 0 0 8px 0; color: var(--text-normal, #e0e0e0); text-align: center; font-size: 1.2em;">Pixel Tracker</h3>
        <button id="btn-pixelate" style="padding: 12px; background: var(--interactive-accent, #7a64ff); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1em;">Pixelate Shape(s)</button>
        <button id="btn-restore" style="padding: 12px; background: var(--background-modifier-error, #e53935); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1em;">Remove Pixels (Restore)</button>
        <button id="btn-cancel" style="padding: 10px; background: transparent; color: var(--text-muted, #aaa); border: 1px solid var(--text-muted, #aaa); border-radius: 6px; cursor: pointer; font-size: 1em;">Cancel</button>
    `;
    
    menuOverlay.appendChild(menuBox);
    document.body.appendChild(menuOverlay);

    const closeMenu = () => {
        if (document.body.contains(menuOverlay)) {
            document.body.removeChild(menuOverlay);
        }
    };

    // ACTION 1: PIXELATE THE SHAPES
    document.getElementById("btn-pixelate").onclick = () => {
        const api = currentEa.getExcalidrawAPI();
        
        currentEa.clear();
        shapes.forEach(el => {
            el.opacity = 0; // Turn the shape invisible so it's a pure wireframe 
            // Preserve any existing customData alongside our new ghost tracking metadata
            el.customData = { ...(el.customData || {}), isPixelGhost: true, lastVersion: el.version };
            
            const groupId = el.id + "-group";
            el.groupIds = [...(el.groupIds || []), groupId];

            generatePixelsForGhost(el, currentEa);
            currentEa.copyViewElementsToEAforEditing([el]);
        });
        
        currentEa.addElementsToView(false, false);

        // Put ghosts on top
        const updatedScene = api.getSceneElements();
        const ghostIds = new Set(shapes.map(s => s.id));
        const nonGhosts = updatedScene.filter(e => !ghostIds.has(e.id));
        const ghosts = updatedScene.filter(e => ghostIds.has(e.id));
        api.updateScene({ elements: [...nonGhosts, ...ghosts] });
        
        new window.Notice(`${shapes.length} shape(s) bound. Ghost controllers are on top.`);
        closeMenu();
    };

    // ACTION 2: RESTORE / UN-PIXELATE THE SHAPES
    document.getElementById("btn-restore").onclick = () => {
        const api = currentEa.getExcalidrawAPI();
        const currentSceneElements = api.getSceneElements();
        
        const shapeIdsToRestore = new Set(shapes.map(s => s.id));
        
        // Find all the child pixels linked to the selected shapes
        const oldPixels = currentSceneElements.filter(child => 
            child.customData?.isPixelChild && shapeIdsToRestore.has(child.customData.parentId)
        );

        currentEa.clear();

        // Native true-deletion to prevent any ghost-pixel residue
        if (oldPixels.length > 0) {
            currentEa.deleteViewElements(oldPixels);
        }

        // Restore the ghost properties back to a normal shape
        shapes.forEach(s => {
            const el = currentSceneElements.find(e => e.id === s.id) || s;
            el.opacity = 100;
            
            if (el.customData) {
                el.customData = { ...el.customData };
                delete el.customData.isPixelGhost;
                delete el.customData.lastVersion;
            }
            
            if (el.groupIds) {
                el.groupIds = el.groupIds.filter(gid => gid !== el.id + "-group");
            }
            
            currentEa.copyViewElementsToEAforEditing([el]);
        });

        // Apply deletion and restoration to the view
        currentEa.addElementsToView(false, false);

        new window.Notice(`Restored ${shapes.length} shape(s) back to normal!`);
        closeMenu();
    };

    // ACTION 3: CANCEL
    document.getElementById("btn-cancel").onclick = closeMenu;
}