---
isNote: false
---
/*

```javascript
*/
try {
    const api = ea.getExcalidrawAPI();
    const appState = api.getAppState();
    const file = ea.targetView.file;

    const lib = (ea.getExcalidrawLib && ea.getExcalidrawLib()) || 
                (ea.plugin && ea.plugin.excalidrawLib) || 
                window.ExcalidrawLib;

    if (!lib || !lib.exportToSvg) {
        throw new Error("Could not load Excalidraw Core Library.");
    }

    const rawElements = api.getSceneElements().filter(el => !el.isDeleted);
    const files = api.getFiles() || null;

    await saveSVG(rawElements, ".svg");

    new ea.obsidian.Notice("Saved Successfully");

    async function saveSVG(elements, suffix) {
        const svg = await lib.exportToSvg({
            elements: elements,
            appState: {
                ...appState,
                exportBackground: false
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
    new ea.obsidian.Notice("Save Error: " + error.message);
    console.error(error);
}