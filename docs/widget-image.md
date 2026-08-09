---
sidebar_position: 8
---

# Image

*Artwork on the canvas — character portraits, body diagrams, backdrops.*

Images are the visual foundation of a good picker: a character turnaround or body outline
behind the buttons turns an abstract button grid into something readable at a glance. Like
[Labels](./widget-label), they have no Live Mode click behavior, and they live in the bottom
[layer band](./editing-tools#layer-ordering-z-order) so they can never cover an interactive
control.

## Crop pan/zoom

Rather than pre-cropping textures in an image editor, frame them on the page: **Image Scale**
zooms into the source texture and **Image Offset** pans the visible window across it. One
character sheet can feed a dozen Image widgets, each framing a different body part. The same
two controls exist on a Label's background image.

## Authoring

- **Texture**
- **Stretch mode** — how the texture fits the widget's rectangle
- **Image Scale** / **Image Offset** — the crop window
- Corner radius (defaults to square, like Labels)
- The common position/size/rotation block

## Rendering

Images and Labels draw through a dynamic instance of one shared material
(`M_RyanPickerRoundedImage`) rather than a plain texture brush. Corner rounding, stretch-mode
fit, and the crop window are all computed in that single material pass — which is why the two
types behave pixel-identically and why cropping costs nothing extra.

## Scripting

`URyanPickerImageFunctionLibrary` (category `Ryan Picker Page|Image`):

| Function | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | crop pan/zoom |

No event-hook interface; the [shared widget functions](./blueprint-api) apply.
