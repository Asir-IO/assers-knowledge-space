---
isNote: false
---
/* SCRIPT 2: SAVE BOTH SKELETONS
   - Generates 'filename.svg' (Light Mode).
   - Generates 'filename.dark.svg' (Dark Mode).
   - Resets editor to Light Mode (Standardizing the source).
*/

// @plugin: Excalidraw

try {
    const api = ea.getExcalidrawAPI();
    const appState = api.getAppState();
    const file = ea.targetView.file;

    // --- 1. FIND CORE LIB ---
    const lib = (ea.getExcalidrawLib && ea.getExcalidrawLib()) || 
                (ea.plugin && ea.plugin.excalidrawLib) || 
                window.ExcalidrawLib;

    if (!lib || !lib.exportToSvg) {
        throw new Error("Could not load Excalidraw Core Library.");
    }

    // --- CONFIG ---
    const BG_LIGHT_HEX = "#faf8f8";
    const BG_DARK_HEX  = "#1e1e1e"; 
    
    const INK_BLACK = "#000000"; 
    const INK_WHITE = "#ffffff"; 

    const BLACK_TOKENS = ["#000000", "#1e1e1e", "#121212", "#343a40", "#212529"];
    const WHITE_TOKENS = ["#ffffff", "#ced4da", "#f8f9fa", "#e9ecef", "transparent"];

    // --- 2. PREPARE VERSIONS ---
    let currentBg = (appState.viewBackgroundColor || "#ffffff").toLowerCase().trim();
    const isCurrentlyDark = BLACK_TOKENS.includes(currentBg);

    const rawElements = api.getSceneElements().filter(el => !el.isDeleted);
    const files = api.getFiles() || null;

    let lightElements, darkElements;

    if (isCurrentlyDark) {
        // We are in Dark -> Convert to Light
        darkElements = rawElements; 
        lightElements = mapColors(rawElements, WHITE_TOKENS, INK_BLACK); 
    } else {
        // We are in Light -> Convert to Dark
        lightElements = rawElements; 
        darkElements = mapColors(rawElements, BLACK_TOKENS, INK_WHITE); 
    }

    // --- 3. EXPORT FILES ---
    // Save Light (.svg)
    await saveSVG(lightElements, BG_LIGHT_HEX, ".svg");
    
    // Save Dark (.dark.svg)
    await saveSVG(darkElements, BG_DARK_HEX, ".dark.svg");

    // --- 4. RESET EDITOR TO LIGHT ---
    api.updateScene({
        elements: lightElements,
        appState: {
            viewBackgroundColor: BG_LIGHT_HEX,
            theme: "light"
        },
        commitToHistory: true 
    });

    new ea.obsidian.Notice("Synced: .svg and .dark.svg");

    // --- HELPERS ---
    function mapColors(elements, tokensToFind, targetColor) {
        return elements.map(el => {
            let newEl = { ...el };
            if (newEl.link === undefined) newEl.link = null;
            if (!newEl.strokeColor) return newEl;

            let modified = false;
            const s = newEl.strokeColor.toLowerCase();

            if (newEl.backgroundColor) {
                const f = newEl.backgroundColor.toLowerCase();
                if (f !== "transparent" && tokensToFind.includes(f)) {
                    newEl.backgroundColor = targetColor;
                    modified = true;
                }
            }
            if (s !== "transparent" && tokensToFind.includes(s)) {
                newEl.strokeColor = targetColor;
                modified = true;
            }
            return modified ? newEl : newEl;
        });
    }

    async function saveSVG(elements, bgColor, suffix) {
        const svg = await lib.exportToSvg({
            elements: elements,
            appState: {
                ...appState,
                viewBackgroundColor: bgColor,
                exportBackground: true,
                theme: "light" 
            },
            files: files,
            exportPadding: 10,
        });

        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        
        const basePath = file.path.substring(0, file.path.lastIndexOf('.'));
        const finalPath = basePath + suffix;
        const vault = app.vault;
        const existing = vault.getAbstractFileByPath(finalPath);

        if (existing) {
            await vault.modify(existing, svgString);
        } else {
            await vault.create(finalPath, svgString);
        }
    }

} catch (error) {
    new ea.obsidian.Notice("Sync Error: " + error.message);
    console.error(error);
}