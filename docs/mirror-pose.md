---
sidebar_position: 10
---

# Mirror Pose

*Teach the page its own left/right symmetry once; mirror layouts forever after.*

The [Mirror tool](./editing-tools#mirror) reflects whatever happens to be selected across
whatever anchor you picked — fine for one-off flips, but it knows nothing about which widgets
correspond to which. **Mirror Pose** fixes that with a **Pose Map**: a page-level record of
which widget is the left-side partner of which, where the centerline is, and which widget
anchors the whole thing. Once mapped, mirroring the layout is one click, every time, with no
selection gymnastics.

## The Pose Map

Authored in the **Pose Map…** dialog (File menu). Each page has exactly one map, holding three
kinds of entries:

- **Anchor** — the single widget that defines the mirror axis (its center). Usually a
  root/pelvis button sitting on the page's centerline. Nothing mirrors until an Anchor is set —
  the Pose button warns with a toast otherwise.
- **Center widgets** — spine, head, anything on the centerline. They mirror onto themselves
  (flipping in place across the axis).
- **Pairs** — Left/Right widget couples: left thigh ↔ right thigh, and so on.

The dialog's widget dropdowns are alphabetized and searchable, so mapping a large page is
type-to-filter work rather than scrolling. A **Reset Map** button (with confirmation) clears
the whole map. The map is saved inside the page file, so it travels with the layout.

## Using it

The Mirror toolbar row carries a **Pose** button and a direction dropdown, past the Mirror
Horizontal/Vertical buttons.

**With a selection** — clicking **Pose** mirrors each selected widget according to its mapped
role: a Left or Right widget's position and rotation are reflected across the Anchor's axis and
written onto its *partner* (the selected side is the source and doesn't move); Center and
Anchor widgets flip in place. Selected widgets that aren't in the map are skipped with a toast
while the rest proceed.

**With nothing selected** — the whole map mirrors in one click, in the direction the dropdown
says (**Left → Right** by default, or **Right → Left**): the Anchor and every Center widget
flip in place, and every Pair copies its source side onto its destination side. This is the
"I finished the left arm, stamp the right arm" button.

The direction dropdown is a transient page control — it isn't saved with the file.

## What it changes — and doesn't

Mirror Pose moves **widget geometry**: canvas position and rotation. Like the Mirror tool, it
doesn't touch what the widgets are wired to — your right-thigh button keeps driving the right
thigh; it just gets placed exactly where the left one is, reflected. That's the point:
retarget once, then keep the two sides visually in lockstep as the layout evolves.
