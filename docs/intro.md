---
sidebar_position: 1
---

# Introduction

**Ryan Picker Page** is an animation picker for Unreal Engine: a canvas of buttons, sliders,
toggles, labels, and images that you lay out once per character and then use to select and drive
Control Rig controls (and level actors) with single clicks — no hunting through the viewport,
the rig hierarchy, or the Sequencer tree mid-shot.

The same window is both the picker and its editor. Flip into Edit Mode to build the layout; flip
back to Live Mode to animate with it. Pages are saved as portable JSON files you can share
between projects and teammates.

## Requirements

- Unreal Engine **5.8**
- These engine plugins enabled (the plugin declares them as dependencies): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

The plugin is Editor-only. It never enters a packaged build and adds nothing at runtime.

## Installation

1. Copy the `RyanPickerPage` folder into your project's `Plugins/` directory.
2. Enable it in **Edit → Plugins** and restart the editor.
3. Open a picker from **Tools → Ryan Picker Page**.

## Finding your way around these docs

If you're an **animator** using a page someone built for you, start with
[Getting Started](./getting-started) and the Live Mode sections of the widget pages.

If you're **building pages**, read in order: [Getting Started](./getting-started) →
[Control Rig & Target Actors](./control-rig-and-targets) → the widget type pages →
[Editing & Canvas Tools](./editing-tools).

If you're a **TD extending the plugin**, go straight to the
[Blueprint API](./blueprint-api) and [Python Scripting](./python-scripting) pages — including
how to ship your own widget variants as Blueprint subclasses that appear in the Add Widget menu.

### All pages

| Section | Pages |
|---|---|
| Basics | [Getting Started](./getting-started) |
| Widget types | [Select Button](./widget-select-button) · [1D Slider](./widget-1d-slider) · [2D Slider](./widget-2d-slider) · [Toggle](./widget-toggle) · [Label](./widget-label) · [Image](./widget-image) |
| Building pages | [Editing & Canvas Tools](./editing-tools) · [Mirror Pose](./mirror-pose) · [Bookmarks](./bookmarks) |
| How targeting works | [Control Rig & Target Actors](./control-rig-and-targets) · [Attribute Editor & Outliner](./attribute-editor-and-outliner) |
| Files & settings | [Saving, Loading & Files](./save-load-and-files) · [Editor Settings](./editor-settings) |
| Extending | [Blueprint API](./blueprint-api) · [Python Scripting](./python-scripting) |
