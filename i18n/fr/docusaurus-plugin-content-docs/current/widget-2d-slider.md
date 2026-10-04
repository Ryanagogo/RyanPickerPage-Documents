---
sidebar_position: 5
---

# Slider 2D \{#2d-slider}

*Une poignée à faire glisser, deux canaux de transformation.*

## En mode Live \{#in-live-mode}

Un slider 2D est un pad : faire glisser sa poignée écrit l'axe X dans un canal de transformation et
l'axe Y dans un autre, simultanément, sur chaque contrôle/acteur assigné. Usages typiques : un pad
Translater X / Translater Y pour poser le pied, ou un pad Rotation X / Rotation Y pour orienter le regard.

Il suit la même discipline de canaux que le [slider 1D](./widget-1d-slider) : chaque axe
ne remplace que son propre canal sur la cible, si bien qu'un pad 2D cohabite avec d'autres sliders pilotant
les canaux restants du même contrôle. L'auto-key s'applique. **Réinitialiser à la valeur initiale** figure là aussi dans le
menu du clic droit.

## Modèle de valeurs \{#value-model}

Identique au slider 1D mais en deux dimensions : **Valeur minimale/Valeur maximale** sont des paires par axe, **Current
Value** est la valeur 2D en direct, **Valeur initiale** est la valeur par défaut définie, insensible au glissement. **Taille du pas**
et **Verrouillé** se comportent de la même façon.

Les deux canaux sont choisis indépendamment (**Actif Canal X**, **Actif Canal Y**). Régler
les deux axes sur le *même* canal est presque toujours une erreur de configuration ; l'Éditeur d'attributs
le signale donc par un bandeau d'avertissement plutôt que de laisser les deux axes se disputer silencieusement une seule valeur.

## Création \{#authoring}

Champs de l'Éditeur d'attributs : étiquette/nom, min/max par axe, valeurs actuelle/initiale, Actif Canal X
et Y (avec l'avertissement de canal identique), couleur de la poignée, style de poignée en creux, verrouillé, taille du pas,
assignation des cibles, et le bloc commun position/taille/rotation/rayon d'angle.

## Scripting \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (catégorie `Ryan Picker Page|2DSlider`) :

| Fonction | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, par axe |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | cibles |

Les sous-classes Blueprint peuvent implémenter `BI_RyanPicker2DSlider` : `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
ainsi que les [événements de cycle de vie communs](./blueprint-api#event-hooks).
