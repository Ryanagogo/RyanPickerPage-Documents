---
sidebar_position: 4
---

# Slider 1D \{#1d-slider}

*Un slider relié à exactement un canal de transformation.*

## En mode Live \{#in-live-mode}

Faire glisser le slider écrit sa valeur dans **un seul canal** — Translater, Rotation ou Échelle, X, Y
ou Z — de chaque contrôle Control Rig et acteur cible assigné. Rien d'autre n'est modifié : le
slider lit la transformation actuelle de chaque cible, remplace le seul canal qui lui appartient, puis réécrit la
transformation. Les changements de valeur passent par le même chemin d'application que le reste du plugin,
y compris l'auto-key de Sequencer : les mouvements du slider créent donc des clés comme des contrôles déplacés à la main.

Comme un slider 1D ne revendique jamais de canaux qui ne lui appartiennent pas, plusieurs sliders peuvent piloter différents
canaux du *même* contrôle côte à côte — un « lever » en Translater Y et un « rouler » en Rotation Z sur un même
contrôle de pied ne se gênent pas.

Un clic droit sur le slider propose **Réinitialiser à la valeur initiale**, qui le ramène à la valeur par défaut
définie.

## Modèle de valeurs \{#value-model}

Trois nombres comptent, et seuls deux d'entre eux bougent :

- **Valeur minimale / Valeur maximale** — la plage sur laquelle le glissement est appliqué.
- **Current Value** — la valeur en direct ; le glissement l'écrit, et c'est elle qui est appliquée aux cibles.
- **Valeur initiale** — une valeur par défaut définie par l'auteur que le glissement ne touche *jamais*. Elle n'est modifiée
  que délibérément dans l'Éditeur d'attributs, ce qui en fait une valeur toujours sûre vers laquelle
  « Réinitialiser à la valeur initiale » peut revenir.

Une **taille du pas** facultative fait avancer le glissement par incréments, et **Verrouillé** désactive complètement
le glissement (pour un slider de référence que vous ne voulez pas bousculer en plein plan).

## Création \{#authoring}

Champs de l'Éditeur d'attributs : étiquette/nom, valeurs min/max/actuelle/initiale, **Actif Canal** (le
seul canal piloté par ce slider), **Orientation** (horizontale/verticale), couleur de la barre, couleur de la poignée,
épaisseur de la barre, style de poignée en creux, verrouillé, taille du pas — plus les champs d'assignation de cibles
partagés avec le [bouton de sélection](./widget-select-button) et le bloc commun
position/taille/rotation/rayon d'angle.

## Scripting \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (catégorie `Ryan Picker Page|1DSlider`) :

| Fonction | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | plage |
| `GetCurrentValue` / `SetCurrentValue` | valeur en direct |
| `GetInitialValue` / `SetInitialValue` | point de réinitialisation défini |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel` : Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | cibles |

Les sous-classes Blueprint peuvent implémenter `BI_RyanPicker1DSlider` : `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, ainsi que
les [événements de cycle de vie communs](./blueprint-api#event-hooks).
