---
sidebar_position: 8
---

# Image

A pure image display widget — no text, no click behavior. Use it for a character portrait, a
background diagram, or decorative art behind other widgets (send it to the back layer with the
layer-order tools — see [Editing & Canvas Tools](./editing-tools)).

## Key properties

- **Texture**
- **Stretch mode** (`EStretch::Type`)
- **Crop pan/zoom** — independent scale + offset so you can frame a sub-region of a larger source
  texture without pre-cropping the asset
- Corner radius (+ override toggle)

## Rendering

Image and Label both render through a shared `UMaterialInstanceDynamic` on
`M_RyanPickerRoundedImage` instead of a plain texture brush. This one material handles
corner-rounding, stretch-mode fit math, and the crop pan/zoom transform in a single pass, so both
widget types get identical rounding/cropping behavior for free.

## Blueprint API

`URyanPickerImageFunctionLibrary` (category `Ryan Picker Page|Image`):

| Function | Notes |
|---|---|
| `GetImageTexture`/`SetImageTexture` | |
| `GetStretchMode`/`SetStretchMode` | `EStretch::Type` |
| `GetImageScale`/`SetImageScale` | crop zoom |
| `GetImageOffset`/`SetImageOffset` | crop pan, `FVector2D` |

Position/size/rotation/corner-radius/widget-name live on `URyanPickerWidgetFunctionLibrary` — see
[Blueprint API](./blueprint-api).
