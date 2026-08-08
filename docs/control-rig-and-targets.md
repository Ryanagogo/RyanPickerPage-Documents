---
sidebar_position: 12
---

# Control Rig & Target Actors

Picker widgets don't act on hardcoded object references — they act on **Control Rig control
names** and/or **target actor identity**, resolved live against whatever's currently focused so
the same page works across different level/sequence contexts.

## Current Control Rig

Each page tab has its own **Current Control Rig**, picked from the header combo box. The combo
box's options come from whichever Control Rigs are bound in the currently-focused Level Sequence;
it re-populates automatically if you switch sequences with a tab left open, preserving your
selection if it's still bound, or auto-selecting if exactly one rig is now available.

Widgets that reference **control names** (Select Button, Toggle, 1D/2D Slider) resolve those
names against the Current Control Rig at click/drag time.

## Target actors

Widgets can also reference **target actors** directly (independent of any Control Rig) — actors
in the level, or Sequencer-bound actors. This lets a single button drive both a Control Rig
control *and* an actor transform, or drive an actor with no rig involved at all.

### Sequencer spawnables

A normal level actor's identity is its `AActor::GetActorGuid()`. Sequencer **spawnable** actors
are re-spawned each session with a *new* GUID, so a saved reference by actor GUID would silently
break. Every target-actor field therefore carries a second, parallel array of **Sequencer binding
GUIDs** as a fallback — if the actor GUID doesn't resolve, the widget resolves the actor via its
Sequencer binding in the focused Level Sequence instead.

## Interactive Selection Mode

Normally a widget drives a fixed, pre-authored list of controls/actors. **Interactive Selection
Mode** (available on Select Button, and as a page-wide new-widget default) instead reads back
whatever is *currently selected* in the viewport/rig when clicked — meant for a single-item
button representing "whatever's selected" rather than a specific target. See
[Select Button](./widget-select-button#interactive-selection-mode).

A related editor setting, **Seed New Widget Targets From Selection**, makes newly-spawned
SelectButton/1D Slider/2D Slider widgets start with their target list pre-filled from whatever's
currently selected, instead of empty — see [Editor Settings](./editor-settings).

## Selection is rig-agnostic

Gathering "what's currently selected" for Interactive Selection Mode / target-seeding
deliberately isn't scoped to only the active rig dropdown selection — it reflects the actual
viewport/outliner selection regardless of which rig combo box entry is active, so it behaves the
way an animator expects when working across multiple rigs.
