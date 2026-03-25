---
isNote: false
---
/*
```javascript
*/
const options = [
    "Transparent", 
    "Magenta"
];
const values = ["hide", "show"];

const action = await utils.suggester(options, values, "Make them...");
if (!action) return;

const elements = ea.getViewElements();
ea.copyViewElementsToEAforEditing(elements);

const targetHex = "#c2255c"; 
let changedCount = 0;

for (const el of ea.getElements()) {
    if (el.type === "rectangle") {
        if (action === "hide" && el.strokeColor.toLowerCase() === targetHex) {
            if (!el.customData) el.customData = {};
            el.customData.originalColor = targetHex;
            el.strokeColor = "transparent";
            changedCount++;
        } 
        else if (action === "show" && el.strokeColor === "transparent") {
            if (el.customData && el.customData.originalColor === targetHex) {
                el.strokeColor = targetHex;
                changedCount++;
            }
        }
    }
}

if (changedCount > 0) {
    await ea.addElementsToView(false, false);
    new Notice("Updated " + changedCount + " magenta rectangles.");
} else {
    new Notice("No matching rectangles found to modify.");
}