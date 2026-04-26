/* SCRIPT: SELECTIVE COLOR SWAPPER
   - Reads a dictionary of colors.
   - Generates a custom Obsidian popup with checkboxes and color swatches.
   - User selects which pairs to swap.
   - Swaps fills and strokes for those specific pairs.
   - STRICTly ignores locked elements.

```javascript
*/

// @plugin: Excalidraw

(async () => {
    try {
        const api = ea.getExcalidrawAPI();
        const appState = api.getAppState();
        
        const COLOR_MAP = {
            "#ffffff": "#000000",
            "#000000": "#ffffff",
            
            "#faf8f8": "#1e1e1e",
            "#1e1e1e": "#faf8f8",

            "#1971c2": "#a5d8ff",
            "#a5d8ff": "#1971c2",

            "#ffd43b": "#e8590c",
            "#e8590c": "#ffd43b",

            "#fab005": "#cc5500",
            "#cc5500": "#fab005",
        };

        const uniquePairs = [];
        const seen = new Set();
        for (const [k, v] of Object.entries(COLOR_MAP)) {
            if (!seen.has(k) && !seen.has(v)) {
                uniquePairs.push([k, v]);
                seen.add(k);
                seen.add(v);
            }
        }

        const getSelectedMappings = () => {
            return new Promise((resolve) => {
                let isSubmitted = false;
                let finalMap = null;

                class ColorSelectorModal extends ea.obsidian.Modal {
                    constructor(app) { super(app); }
                    
                    onOpen() {
                        const { contentEl } = this;
                        contentEl.createEl("h2", { text: "Select Colors to Swap" });
                        contentEl.createEl("p", { text: "Check the pairs you want to invert in the current drawing.", cls: "text-muted", attr: { style: "font-size: 0.9em; margin-bottom: 15px;" } });

                        const checkboxes = [];

                        // Render each pair row
                        uniquePairs.forEach(([c1, c2]) => {
                            const row = contentEl.createDiv({ attr: { style: "display: flex; align-items: center; margin-bottom: 10px;" } });
                            
                            const cb = row.createEl("input", { type: "checkbox", value: JSON.stringify([c1, c2]) });
                            cb.checked = true; // Default to all checked
                            cb.style.cursor = "pointer";
                            checkboxes.push(cb);
                            
                            // Visual Swatch 1
                            row.createDiv({ attr: { style: `width: 16px; height: 16px; background-color: ${c1}; border: 1px solid gray; border-radius: 3px; margin-left: 10px; margin-right: 5px;` }});
                            row.createSpan({ text: c1, attr: { style: "font-family: monospace;" } });
                            
                            // Arrow
                            row.createSpan({ text: " ⇄ ", attr: { style: "margin: 0 10px; font-weight: bold;" } });
                            
                            // Visual Swatch 2
                            row.createDiv({ attr: { style: `width: 16px; height: 16px; background-color: ${c2}; border: 1px solid gray; border-radius: 3px; margin-right: 5px;` }});
                            row.createSpan({ text: c2, attr: { style: "font-family: monospace;" } });
                        });

                        // Submit Button
                        const btn = contentEl.createEl("button", { text: "Apply Swaps", attr: { style: "margin-top: 20px; width: 100%; padding: 10px; cursor: pointer;" } });
                        btn.onclick = () => {
                            isSubmitted = true;
                            finalMap = {};
                            checkboxes.forEach(cb => {
                                if (cb.checked) {
                                    const [c1, c2] = JSON.parse(cb.value);
                                    finalMap[c1] = c2;
                                    finalMap[c2] = c1;
                                }
                            });
                            this.close(); // This will trigger onClose below
                        };
                    }

                    onClose() {
                        this.contentEl.empty();
                        if (isSubmitted) {
                            resolve(finalMap); 
                        } else {
                            resolve(null);
                        }
                    }
                }
                new ColorSelectorModal(app).open();
            });
        };

        const ACTIVE_MAP = await getSelectedMappings();
        if (!ACTIVE_MAP || Object.keys(ACTIVE_MAP).length === 0) return;

        let initialWhiteCount = 0;
        let initialBlackCount = 0;
        
        const rawElements = api.getSceneElements().filter(el => !el.isDeleted);
        const newElements = rawElements.map(el => {
            let newEl = { ...el };
            if (newEl.link === undefined) newEl.link = null; // Sanitize
            if (newEl.locked === true) return newEl; 

            // Swap Strokes
            if (newEl.strokeColor) {
                const s = newEl.strokeColor.toLowerCase();
                if (ACTIVE_MAP[s]) {
                    if (["#ffffff", "#faf8f8"].includes(s)) initialWhiteCount++;
                    if (["#000000", "#1e1e1e"].includes(s)) initialBlackCount++;
                    
                    newEl.strokeColor = ACTIVE_MAP[s];
                }
            }

            // Swap Fills
            if (newEl.backgroundColor) {
                 const f = newEl.backgroundColor.toLowerCase();
                 if (ACTIVE_MAP[f]) newEl.backgroundColor = ACTIVE_MAP[f];
            }
            return newEl;
        });

        let nextBg = appState.viewBackgroundColor || "#faf8f8";
        
        // ONLY calculate a new background if we actually swapped skeleton colors
        if (initialWhiteCount > 0 || initialBlackCount > 0) {
             nextBg = (initialWhiteCount > initialBlackCount) ? "#faf8f8" : "#1e1e1e";
        }

        // Update View
        api.updateScene({
            elements: newElements,
            appState: {
                viewBackgroundColor: nextBg,
                theme: "light" 
            },
            commitToHistory: true
        });
        new ea.obsidian.Notice("Switched Successfully");

    } catch (error) {
        new ea.obsidian.Notice("Error: " + error.message);
        console.error(error);
    }
})();