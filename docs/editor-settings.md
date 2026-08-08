---
sidebar_position: 15
---

# Editor Settings

A global, **per-machine** settings dialog (File → Settings on any page), distinct from a page's
own saved file — these apply across every page you open on this machine, regardless of which
file is loaded. Persisted to `editor_settings.json` (see
[Saving, Loading & Files](./save-load-and-files#where-settings-live-on-disk)); a missing or
malformed field just falls back to its built-in default, no explicit versioning needed.

| Setting | Default | Notes |
|---|---|---|
| Default Bookmark Count | 4 | number of user bookmark slots on a new page (max 8) |
| Undo Stack Depth | 30 | steps kept on the main page undo/redo stack |
| Default New Widget Size | 200×100 | starting size for a widget spawned via Add Widget |
| Override Default New Widget Size | off | when on, the value above wins over the page Blueprint's own Class Defaults value instead of deferring to it |
| Default Interactive Selection Mode | off | whether new SelectButtons start with Interactive Selection Mode enabled |
| Seed New Widget Targets From Selection | on | whether new SelectButton/1D/2D Slider widgets pre-fill their targets from the current viewport/rig selection |
| Session State Max Age (days) | 90 | per-file session-state entries not written to in longer than this are pruned; `0` = never prune |
| Default Corner Radius | 10 | fallback rounding radius for widget types not customizing their own Class Default |
| Override Default Corner Radius | off | same override-gate shape as the widget-size override above |
| Sticky Defaults categories | all on | 7 independent toggles (Color, Font, Corner Radius, Size, Rotation, Text, Image) gating which categories Sticky Widget Defaults actually applies — see [Attribute Editor & Outliner](./attribute-editor-and-outliner#class-defaults--sticky-widget-defaults) |

## Relationship to Class Defaults

These settings are a per-machine convenience layer, not the source of truth: a page Blueprint's
own **Class Defaults** panel is authoritative for `DefaultNewWidgetSize` and per-type appearance
defaults unless you explicitly flip the matching "Override" setting above.
