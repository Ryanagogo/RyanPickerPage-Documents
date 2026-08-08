---
sidebar_position: 14
---

# Saving, Loading & Files

A picker page is authored and saved as a standalone **JSON file** — there's no requirement that
it live inside the project's `Content/` folder, so pages can be shared between projects or kept
outside version control entirely.

## File menu

- **Save** — silently writes back to the page's own tracked file path; falls back to **Save As**
  if the page has never been saved.
- **Save As** — always shows a native save dialog.
- **Load** — shows a native open dialog, reads and validates the file, migrating older schema
  versions automatically where possible.
- **Reload** / **Load Recent** — re-reads a known path directly, skipping the dialog.

A save writes the full widget layout **and** the bookmark row (Default + user slots) together in
one payload.

## Schema versioning

Every save file carries a `SchemaVersion` integer. Loading a file with an older version runs it
through a migration chain that upgrades it step by step to the current schema before the page
accepts it; a file from a newer/unrecognized schema is rejected rather than guessed at. This is
what lets pages saved years ago in an older plugin version keep loading correctly today.

## Recent files

The plugin keeps a most-recently-used file list plus your last save/load directories, so the
Save/Load dialogs reopen where you left off.

## Session state

Separately from the versioned save file, the plugin remembers **per-file "where you left off"**
state — canvas pan/zoom, the active Control Rig, and Edit/Live mode — restored automatically the
next time you load that exact file path. This is deliberately kept off the save-file schema (so
opening the same file on a different machine doesn't fight over layout data) and entries not
touched in a configurable number of days are pruned automatically (see
[Editor Settings](./editor-settings)).

## Where settings live on disk

All plugin-level persistence lives under:

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # last save/load paths, recent files, outliner display mode
├── editor_settings.json       # global per-machine defaults (see Editor Settings)
└── page_session_state.json    # per-file pan/zoom/rig/mode, keyed by absolute file path
```

None of these three files are the page's own save file — a page's `.json` can live anywhere you
choose via the Save/Save As dialog.
