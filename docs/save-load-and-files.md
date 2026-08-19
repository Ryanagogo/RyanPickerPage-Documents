---
sidebar_position: 14
---

# Saving, Loading & Files

A page saves to a single **JSON file**, anywhere on disk you choose. Pages aren't Unreal
assets: they don't live in `Content/`, don't need the project they were made in, and can be
shared, emailed, or version-controlled like any text file.

One save carries the whole page: every widget with all its wiring and styling, the
[bookmark row](./bookmarks), Toggle Groups, and the [Pose Map](./mirror-pose).

## The File menu

| Entry | |
|---|---|
| **Save** | writes back to the page's current file; behaves as Save As for a never-saved page |
| **Save As** | native save dialog |
| **Load** | native open dialog |
| **Load Recent** | most-recently-used files, no dialog |
| **Reload** | re-reads the current file from disk |
| **Pose Map…** | the [Pose Map dialog](./mirror-pose#the-pose-map) |
| **Settings…** | the [Editor Settings dialog](./editor-settings) |

Save and load dialogs reopen in your last-used directories.

## The Help menu

Entries are entirely data-driven — a list of Label/URL/Tooltip items edited in the page's Class
Defaults panel. Add, remove, reorder, or retarget an entry with no code change or recompile;
clicking one opens its URL in your OS default browser. One entry is fixed rather than
data-driven: **About**, which shows the plugin version, the Unreal Engine version, and the
author in a simple info dialog.

## Old files keep loading

Save files are schema-versioned. Loading an older file migrates it forward through every
intervening schema change automatically — pages from early plugin versions load into the
current one, and simply re-saving writes them at the current version. Files that can't be
migrated (or that come from a *newer* plugin than yours) are rejected with a clear error
instead of being half-loaded.

One privacy note: a Select Button's [Python script](./python-scripting) is stored
Base64-encoded in the file — encoded, not encrypted. Treat page files containing scripts like
the scripts themselves.

## Session state

Alongside the page file — but never inside it — the plugin remembers, per file path, where you
left off: canvas pan/zoom, the active Control Rig, Edit vs. Live Mode. Load the same file
tomorrow and the canvas is exactly where you left it. Because this lives on your machine keyed
by file path, sharing a page shares the layout only — recipients get their own view state.
Entries untouched for 90 days (configurable) are pruned.

## Where the plugin keeps its own files

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # recent files, last dialog directories, outliner view
├── editor_settings.json       # the Editor Settings dialog's values
└── page_session_state.json    # per-file session state, keyed by absolute path
```

These are per-user, per-machine. Deleting them loses conveniences (recent files, restored
views, settings) but never page data — pages live only in the files you saved.
