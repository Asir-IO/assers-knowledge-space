---
isNote: false
---
/*
```javascript
*/
const options = [
    "Transparent", 
    "Red"
];
const values = ["hide", "show"];

const action = await utils.suggester(options, values, "Make them...");
if (!action) return;

const elements = ea.getViewElements();
ea.copyViewElementsToEAforEditing(elements);

const redHexes = ["#e03131"]; 
let changedCount = 0;

for (const el of ea.getElements()) {
    if (el.type === "rectangle") {
        if (action === "hide" && redHexes.includes(el.strokeColor.toLowerCase())) {
            el.strokeColor = "transparent";
            changedCount++;
        } else if (action === "show" && el.strokeColor === "transparent") {
            el.strokeColor = redHexes[0];
            changedCount++;
        }
    }
}

if (changedCount > 0) {
    await ea.addElementsToView(false, false);
    new Notice("Updated " + changedCount + " rectangles.");
} else {
    new Notice("No matching rectangles found to modify.");
}