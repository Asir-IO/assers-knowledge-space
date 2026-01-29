/* SCRIPT 1: INVERT SKELETON COLOR
   - Toggles the active view between Light and Dark.
   - Preserves vivid colors (Red/Blue) by forcing "light" theme.
   - Does NOT save to disk.
*/

// @plugin: Excalidraw

try {
    const api = ea.getExcalidrawAPI();
    const appState = api.getAppState();
    
    // --- CONFIG ---
    const BG_LIGHT_HEX = "#faf8f8";
    const BG_DARK_HEX  = "#1e1e1e"; // Your Dark Mode Background
    
    const INK_BLACK = "#000000";
    const INK_WHITE = "#ced4da"; // Light Grey for Dark Mode

    // Tokens to detect
    const BLACK_TOKENS = ["#000000", "#1e1e1e", "#121212", "#343a40", "#212529"];
    const WHITE_TOKENS = ["#ffffff", "#ced4da", "#f8f9fa", "#e9ecef", "transparent"];

    // --- DETECT STATE ---
    let currentBg = (appState.viewBackgroundColor || "#ffffff").toLowerCase().trim();
    const isCurrentlyDark = BLACK_TOKENS.includes(currentBg);

    let nextBg, nextTheme, tokensToFind, targetColor;

    if (isCurrentlyDark) {
        // Switch to LIGHT
        nextBg = BG_LIGHT_HEX;
        nextTheme = "light";
        tokensToFind = WHITE_TOKENS; // Find White ink...
        targetColor = INK_BLACK;     // ...turn it Black
    } else {
        // Switch to DARK
        nextBg = BG_DARK_HEX;
        nextTheme = "light";         // Keep 'light' for vivid colors
        tokensToFind = BLACK_TOKENS; // Find Black ink...
        targetColor = INK_WHITE;     // ...turn it White
    }

    // --- EXECUTE SWAP ---
    const rawElements = api.getSceneElements().filter(el => !el.isDeleted);
    
    const newElements = rawElements.map(el => {
        let newEl = { ...el };
        if (newEl.link === undefined) newEl.link = null; // Sanitize
        if (!newEl.strokeColor) return newEl;

        let modified = false;
        const s = newEl.strokeColor.toLowerCase();

        // Swap Fill
        if (newEl.backgroundColor) {
             const f = newEl.backgroundColor.toLowerCase();
             if (f !== "transparent" && tokensToFind.includes(f)) {
                 newEl.backgroundColor = targetColor;
                 modified = true;
             }
        }
        // Swap Stroke
        if (s !== "transparent" && tokensToFind.includes(s)) {
            newEl.strokeColor = targetColor;
            modified = true;
        }
        return modified ? newEl : newEl;
    });

    // Update View
    api.updateScene({
        elements: newElements,
        appState: {
            viewBackgroundColor: nextBg,
            theme: nextTheme
        },
        commitToHistory: true
    });
    
    new ea.obsidian.Notice(isCurrentlyDark ? "Switched to Light" : "Switched to Dark");

} catch (error) {
    new ea.obsidian.Notice("Error: " + error.message);
    console.error(error);
}