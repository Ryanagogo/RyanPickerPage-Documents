---
sidebar_position: 10
---

# Mirror Pose

Mirror Pose reflects an *already-posed* rig across its Left/Right controls — the animation
equivalent of "select all, mirror pose" — using a page-authored **Pose Map** rather than the
generic layout [Mirror tool](./editing-tools#mirror-tool).

## The Pose Map

Each page has exactly one Pose Map, authored via the **Pose Map…** dialog on the toolbar (opens a
modal editor; nothing to pick between — there's only one map per page). It assigns every relevant
widget one of four roles:

- **Anchor** — the root/pelvis-equivalent widget; mirrors onto itself
- **Center** — a spine/head/other center-line widget; mirrors onto itself
- **Left / Right** — paired widgets; mirroring one writes the reflected transform onto its
  counterpart, leaving the clicked widget untouched

Mirroring is X-axis only: a widget/pair's position and rotation are reflected across the X axis
and written onto the target side.

## Using it

- **With a selection**: select one or more widgets that have a role in the Pose Map and trigger
  Mirror Pose — each selected widget mirrors according to its role.
- **With no selection**: pick a batch direction from the **Pose Direction** combo box
  (**Left → Right** or **Right → Left**) and click **Mirror Pose** — it self-mirrors the Anchor
  and every Center widget, then mirrors every Left/Right pair in the chosen direction across the
  whole map in one click.

If no Anchor has been set yet, Mirror Pose shows a warning toast instead of doing anything.

Pose Direction is transient, in-memory state — it's not saved to the page file or restored between
sessions.

## Relationship to the Mirror tool

The [Mirror tool](./editing-tools#mirror-tool) is a **canvas layout** operation: it repositions
selected widgets on the page itself, with no notion of which control each widget drives. Mirror
Pose is a **pose** operation: it doesn't move anything on the canvas — it drives the Left/Right
widgets' assigned targets to reflected transform values, using the Pose Map's authored
relationships to know which widget's value goes where.
