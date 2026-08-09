---
sidebar_position: 7
---

# Label

*Text on the canvas. Clicks pass straight through it.*

Labels are annotation: section headers ("LEFT ARM"), notes, or captioned images. They have no
click behavior in Live Mode and no target assignment — which also means they're the one widget
type (with [Image](./widget-image)) you can layer freely without stealing clicks from the
controls around them.

A Label can display the **current Control Rig's name** live instead of fixed text — drop one in
a page corner and it always tells the animator which rig this tab is driving.

## Authoring

- **Text**, font size, font color, **justification**, **auto-wrap**
- **Background color**, and optionally a background **image** with its own stretch mode and
  [crop pan/zoom](./widget-image#crop-panzoom)
- Corner radius: Labels default to square corners (radius 0) but participate in the same
  [rounding cascade](./attribute-editor-and-outliner#corner-radius) as every other type
- The common position/size/rotation block

Labels render their background through the same rounded-corner material as
[Image](./widget-image#rendering), so rounding and image cropping behave identically on both.

## Scripting

`URyanPickerLabelFunctionLibrary` (category `Ryan Picker Page|Label`):

| Function | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | background image |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | crop pan/zoom |

Labels have no event-hook interface — there's nothing to click or drag — but all the
[shared widget functions](./blueprint-api) (position, size, rotation, corner radius, name)
apply.
