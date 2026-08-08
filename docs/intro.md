---
sidebar_position: 1
---

# Introduction

**Ryan Picker Page** is an editor-only Unreal Engine plugin that gives Control Rig animators a
custom, per-character "picker" — a 2D canvas of clickable buttons, sliders, toggles, labels and
images used to select and manipulate Control Rig controls (and actors) without hunting through
the viewport or the Outliner.

It's built as an Editor Utility Widget you open from the **Tools** menu, and it edits itself: the
same window is both the picker you click during animation and the canvas editor you use to lay
out buttons, wire up controls, and style everything.

## Requirements

- Unreal Engine **5.8**
- The following engine plugins enabled (the plugin depends on them): **Control Rig**, **Synthesis**,
  **Python Editor Script Plugin**

## Installation

1. Copy the `RyanPickerPage` plugin folder into your project's `Plugins/` directory.
2. Enable it in **Edit → Plugins** if it isn't already, and restart the editor.
3. Open it from **Tools → Ryan Picker Page** in the main editor toolbar.

The plugin is Editor-only — it never ships in a packaged game and has no runtime footprint.

## What's in this documentation

- **[Getting Started](./getting-started)** — opening the page, Edit Mode vs. Live Mode, the
  basic authoring loop
- **Widget Types** — the six widget types you place on a page: [Select Button](./widget-select-button),
  [1D Slider](./widget-1d-slider), [2D Slider](./widget-2d-slider), [Toggle](./widget-toggle),
  [Label](./widget-label), [Image](./widget-image)
- **[Editing & Canvas Tools](./editing-tools)** — Edit Mode, align/distribute/nudge, the Mirror tool
- **[Mirror Pose](./mirror-pose)** — the Pose Map and one-click pose mirroring
- **[Bookmarks](./bookmarks)** — saved canvas pan/zoom view slots
- **[Control Rig & Target Actors](./control-rig-and-targets)** — how widgets resolve what they
  act on, and Interactive Selection Mode
- **[Attribute Editor & Outliner](./attribute-editor-and-outliner)** — the Edit Mode sidebars
- **[Saving, Loading & Files](./save-load-and-files)** — the page file format and where things
  live on disk
- **[Editor Settings](./editor-settings)** — global, per-machine defaults
- **[Blueprint API](./blueprint-api)** — the function libraries and event hooks for scripting
  your own widget behavior
- **[Python Scripting](./python-scripting)** — running a Python script from a button click
