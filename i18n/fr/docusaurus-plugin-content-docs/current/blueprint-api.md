---
sidebar_position: 16
---

# API Blueprint \{#blueprint-api}

L'interface de scripting du plugin suit partout le même principe : des **bibliothèques de fonctions** composées de nœuds
statiques, une bibliothèque commune pour ce que possède chaque widget, plus une bibliothèque par type de widget pour ce
qui lui est propre. Chaque fonction prend le widget comme `Target` avec `DefaultToSelf` — dans le graphe d'un
Blueprint de widget, les nœuds se connectent d'eux-mêmes à `self`.

## Fonctions communes — tous les types de widgets \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, catégorie `Ryan Picker Page|Widget` :

| Fonction | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | géométrie sur le canevas |
| `GetRotation` / `SetRotation` | en degrés, ramenés dans [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | le niveau « par widget » de la [cascade d'arrondi](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | nom unique dans la page |
| `GetCurrentControlRig` | le rig actuel de la page propriétaire |
| `GetActorFromGUID` | résout l'identité d'un acteur via la page |

## Fonctions par type \{#per-type-functions}

La bibliothèque propre à chaque type de widget est documentée sur la page correspondante :

| Bibliothèque | Catégorie | Référence |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Bouton de sélection](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [Slider 1D](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [Slider 2D](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Bascule](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Étiquette](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Image](./widget-image#scripting) |

## Hooks d'événements \{#event-hooks}

Les quatre types de widgets interactifs exposent chacun une interface Blueprint de hooks `BlueprintNativeEvent` —
implémentez-les dans une sous-classe Blueprint pour ajouter un comportement sans C++ :

| Interface | Événements propres au type |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | les quatre mêmes, avec une valeur 2D |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Les quatre héritent de trois **événements de cycle de vie** communs à tous les types interactifs :

- `OnWidgetSelected(bool)` — la sélection en mode édition a changé
- `OnWidgetHighlighted(bool)` — l'état de survol a changé
- `OnWidgetEditModeChanged(bool)` — la page est entrée en mode édition ou en est sortie

Les étiquettes et les images n'ont pas d'interface de hooks — rien n'y est cliquable — mais la bibliothèque de
fonctions commune les couvre.

## Blueprints de widgets personnalisés \{#custom-widget-blueprints}

Le point d'extension le plus profond : **créez une sous-classe d'un type de widget en Blueprint, et la page la traite comme
un type de widget à part entière.**

1. Créez une classe Blueprint dont le parent est l'une des classes de widgets natives finales
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Implémentez les événements de son interface de hooks pour ajouter votre comportement — visuels supplémentaires sur
   `OnToggleStateChanged`, logique personnalisée sur `OnSelectButtonClicked`, tout ce que le plan exige.
3. Votre classe apparaît automatiquement dans le menu du clic droit du canevas, sous **Widgets personnalisés**,
   regroupée selon son type de base.

Les widgets personnalisés héritent de tout — enregistrement/chargement, annulation, Éditeur d'attributs, outils d'alignement/miroir,
ciblage — car la page reconnaît toute sous-classe d'un type final comme ce type. Les pages qui
utilisent un widget personnalisé enregistrent le chemin de classe du Blueprint dans le fichier de sauvegarde ; elles se rechargent donc
correctement dans tout projet contenant ce Blueprint.

Pour un comportement au clic qui ne justifie pas une sous-classe Blueprint, un simple
[script Python sur le widget](./python-scripting) suffit souvent.
