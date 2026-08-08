---
sidebar_position: 7
---

# Label

A non-interactive (no click behavior) text/image display widget — used for section headers,
callouts, or annotated icons on a page. Unlike Select Button/Toggle, it has no click handler and
carries no hook interface (there's nothing to react to).

## Key properties

- **Text**
- Background color, font color, font size
- **Text justification**, **auto-wrap**
- Optional background **image**, with its own **stretch mode** and **crop pan/zoom**
  (independent scale + offset, so you can frame a region of a larger source image)
- Corner radius (+ override toggle) — rendered via the shared rounded-corner material (see
  [Image](./widget-image#rendering))

Labels can also show the **current Control Rig's name** live — useful as a page header that
updates automatically when the animator switches rigs.

## Blueprint API

`URyanPickerLabelFunctionLibrary` (category `Ryan Picker Page|Label`):

| Function | Notes |
|---|---|
| `GetText`/`SetText` | |
| `GetBackgroundColor`/`SetBackgroundColor` | |
| `GetFontColor`/`SetFontColor` | |
| `GetImage`/`SetImage` | |
| `GetFontSize`/`SetFontSize` | |
| `GetTextJustification`/`SetTextJustification` | `ETextJustify::Type` |
| `GetAutoWrapText`/`SetAutoWrapText` | |
| `GetStretchMode`/`SetStretchMode` | `EStretch::Type` |
| `GetImageScale`/`SetImageScale` | crop zoom |
| `GetImageOffset`/`SetImageOffset` | crop pan, `FVector2D` |

Position/size/rotation/corner-radius/widget-name live on `URyanPickerWidgetFunctionLibrary` — see
[Blueprint API](./blueprint-api).
