---
sidebar_position: 12
---

# Control Rig & Target Actors

*What a widget is "wired to", and how that wiring survives sessions, sequences, and respawns.*

Widgets never hold hard object references. They store **names and identities** — Control Rig
control names, actor identities — and resolve them against the live editor state at the moment
you click. That indirection is what lets one saved page keep working across editor restarts,
different levels, and Sequencer's actor lifecycle.

## The current Control Rig

Each page tab has one **current Control Rig**, chosen in the header dropdown. The dropdown
lists the rigs bound in the **focused Level Sequence** and maintains itself: switch to a
different sequence with the picker still open and the list rebuilds — keeping your choice if
that rig is still bound, auto-selecting when exactly one rig is available.

Control names on widgets are resolved against this rig. The same page therefore drives any
character sharing the rig's control naming — build one biped page, use it for the whole cast.
([Labels](./widget-label) can display the current rig's name so animators always know which
character a tab is driving.)

## Target actors

Widgets can also target **actors** — instead of or alongside rig controls. A button might
select a prop, a camera, and a rig control together; a slider can drive an actor's transform
channel directly, auto-keying into Sequencer like any hand animation.

### Sequencer spawnables

Ordinary level actors are identified by their stable actor GUID. **Spawnables are the trap**:
Sequencer respawns them with a *fresh* actor GUID every session, which would silently break any
page saved against the old one. So every actor assignment on every widget stores two identities
in parallel — the actor GUID *and* the actor's Sequencer **binding GUID**, which is stable
across respawns. Resolution tries the actor GUID and falls back to the binding. You never
manage this; it's why spawnable-heavy pages keep working next week.

## How targets get assigned

In Edit Mode, with a widget selected:

- **Seed at spawn** (default, [configurable](./editor-settings)): a new widget's target list is
  pre-filled from whatever controls/actors are selected when you add it. Select in viewport →
  Add Widget is the whole authoring gesture.
- The Attribute Editor's target fields show a resolved, human-readable summary — actual actor
  and control names, not GUIDs — so you can verify wiring at a glance. Broken references
  (deleted actors, renamed controls) simply resolve to nothing rather than erroring the page.

## Two selection philosophies

[Select Buttons](./widget-select-button) offer both of the classic picker behaviors:
**selection sets** (a click replaces the selection with the stored set) and **Interactive
Selection Mode** (buttons continuously mirror the editor selection and click additively — see
the Select Button page for the full behavior). Selection gathering is deliberately
rig-agnostic: seeding and interactive matching consider your actual editor selection, not just
controls belonging to the dropdown's current rig.
