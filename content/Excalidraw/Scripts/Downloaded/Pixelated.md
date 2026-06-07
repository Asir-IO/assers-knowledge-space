---
{}
---
/*

```javascript
*/
// UNIVERSAL PIXEL-BLOCK GENERATOR
// Rasterizes Lines, Arrows, Rectangles, and Ellipses into pixel grids

const PIXEL_SIZE = 8; 

const selectedElements = ea.getViewSelectedElements();
const validTypes = ["line", "arrow", "freedraw", "rectangle", "ellipse"];
const shapes = selectedElements.filter(el => validTypes.includes(el.type));

if (shapes.length === 0) {
    new window.Notice("Please select a valid shape or line!");
    return;
}

// 1. Bresenham's Line Algorithm
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

// 2. Midpoint Ellipse Algorithm
function getEllipsePixels(x, y, w, h, size) {
    const points = [];
    let gXc = Math.floor((x + w/2) / size);
    let gYc = Math.floor((y + h/2) / size);
    let a = Math.floor((w/2) / size);
    let b = Math.floor((h/2) / size);
    
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
        if (d1 < 0) {
            posX++; dx += 2 * b2; d1 += dx + b2;
        } else {
            posX++; posY--; dx += 2 * b2; dy -= 2 * a2; d1 += dx - dy + b2;
        }
    }

    let d2 = b2 * (posX + 0.5) * (posX + 0.5) + a2 * (posY - 1) * (posY - 1) - a2 * b2;
    while (posY >= 0) {
        addPoints(gXc, gYc, posX, posY);
        if (d2 > 0) {
            posY--; dy -= 2 * a2; d2 += a2 - dy;
        } else {
            posY--; posX++; dx += 2 * b2; dy -= 2 * a2; d2 += dx - dy + a2;
        }
    }
    return points;
}

// 3. Arrowhead Vector Math
function getArrowheadPixels(p1x, p1y, p2x, p2y, size) {
    const angle = Math.atan2(p2y - p1y, p2x - p1x);
    const headlen = 25; // Length of the arrowhead wings
    
    const lx = p2x - headlen * Math.cos(angle - Math.PI / 6);
    const ly = p2y - headlen * Math.sin(angle - Math.PI / 6);
    const rx = p2x - headlen * Math.cos(angle + Math.PI / 6);
    const ry = p2y - headlen * Math.sin(angle + Math.PI / 6);
    
    return [
        ...getLinePixels(p2x, p2y, lx, ly, size),
        ...getLinePixels(p2x, p2y, rx, ry, size)
    ];
}

ea.clear();

shapes.forEach(el => {
    ea.style.strokeColor = el.strokeColor;
    ea.style.backgroundColor = el.strokeColor;
    ea.style.fillStyle = "solid";
    ea.style.roughness = 0;
    ea.style.strokeWidth = 1;

    let blocks = [];
    const drawnBlocks = new Map();

    // -- ROUTING LOGIC BASED ON SHAPE TYPE --
    
    if (el.type === "rectangle") {
        blocks.push(...getLinePixels(el.x, el.y, el.x + el.width, el.y, PIXEL_SIZE)); // Top
        blocks.push(...getLinePixels(el.x + el.width, el.y, el.x + el.width, el.y + el.height, PIXEL_SIZE)); // Right
        blocks.push(...getLinePixels(el.x + el.width, el.y + el.height, el.x, el.y + el.height, PIXEL_SIZE)); // Bottom
        blocks.push(...getLinePixels(el.x, el.y + el.height, el.x, el.y, PIXEL_SIZE)); // Left
    } 
    else if (el.type === "ellipse") {
        blocks.push(...getEllipsePixels(el.x, el.y, el.width, el.height, PIXEL_SIZE));
    }
    else if (["line", "freedraw", "arrow"].includes(el.type) && el.points) {
        // Draw the main path segments
        for (let i = 0; i < el.points.length - 1; i++) {
            const startX = el.x + el.points[i][0];
            const startY = el.y + el.points[i][1];
            const endX = el.x + el.points[i + 1][0];
            const endY = el.y + el.points[i + 1][1];
            blocks.push(...getLinePixels(startX, startY, endX, endY, PIXEL_SIZE));
        }
        
        // If it's an arrow, calculate and draw the head
        if (el.type === "arrow" && el.endArrowhead && el.points.length >= 2) {
            const p1 = el.points[el.points.length - 2];
            const p2 = el.points[el.points.length - 1];
            blocks.push(...getArrowheadPixels(
                el.x + p1[0], el.y + p1[1], 
                el.x + p2[0], el.y + p2[1], 
                PIXEL_SIZE
            ));
        }
    }

    // -- RENDER ENGINE --
    blocks.forEach(block => {
        if (!drawnBlocks.has(block.key)) {
            ea.addRect(block.x, block.y, PIXEL_SIZE, PIXEL_SIZE);
            drawnBlocks.set(block.key, true);
        }
    });

    ea.deleteViewElements([el]);
});

ea.addElementsToView(false, false);
new window.Notice(`Shapes rasterized!`);