---
sidebar_position: 6
---

# Bascule \{#toggle}

*Un interrupteur à deux états — IK/FK en étant l'usage type.*

## En mode Live \{#in-live-mode}

Une bascule possède deux états, **A** et **B**. Un clic passe de l'un à l'autre, et l'état qui
vient de devenir actif applique sa propre configuration : son étiquette, ses couleurs, ses contrôles de rig
et acteurs assignés sont sélectionnés, et son propre [script Python](./python-scripting) s'exécute.
Tout dans une bascule se configure **par état** — une bascule IK/FK peut sélectionner les contrôles IK
dans un état et les contrôles FK dans l'autre, avec une couleur différente pour chacun.

## Groupes de bascules \{#toggle-groups}

Regroupez plusieurs bascules (menu du clic droit, avec au moins deux sélectionnées) et elles se comportent comme des boutons
radio : chaque bascule déclare lequel de ses états compte comme « activé » (son **État activé**), et
activer un membre du groupe désactive tous les autres. Les widgets groupés arborent une bordure
distinctive sur le canevas, les groupes peuvent être nommés et renommés, et la
[vue **Par groupe** de l'Outliner](./attribute-editor-and-outliner) liste les membres de chaque groupe sous
son en-tête. Copier un groupe propose un collage qui le recrée en tant que tout nouveau groupe, membres et
nom compris.

## Piloter le canal booléen d'un rig \{#driving-a-rigs-bool-channel}

Au-delà de la sélection de contrôles, une bascule peut être liée directement à un **canal d'animation booléen** d'un
contrôle Control Rig — par exemple l'attribut de commutation IK/FK du rig lui-même :

- Indiquez le **contrôle parent** du canal et le **canal** lui-même, puis choisissez quel état de la bascule
  signifie que le canal est *true*.
- Cliquer sur la bascule écrit alors aussi la valeur booléenne.
- La liaison est bidirectionnelle : la page interroge la valeur en direct du canal et la répercute sur
  l'état visuel de la bascule ; ainsi, faire défiler la timeline au-delà d'une commutation IK/FK clé fait basculer le bouton de la page
  sans réexécuter son comportement au clic.

## Création \{#authoring}

Champs de l'Éditeur d'attributs : par état, étiquette / couleur d'arrière-plan / couleur de police / taille de police / noms
des contrôles / acteurs cibles / script Python ; l'état actuel et l'état activé ; la liaison au canal d'animation booléen
(activation, contrôle parent, nom du canal, état true) ; et le bloc commun
position/taille/rotation/rayon d'angle.

## Scripting \{#scripting}

`URyanPickerToggleFunctionLibrary` (catégorie `Ryan Picker Page|Toggle`). La plupart des fonctions prennent un
`ERyanPickerToggleState` et lisent/écrivent la configuration d'un état :

| Fonction | |
|---|---|
| `GetToggleState` / `SetToggleState` | état actuel |
| `GetOnState` / `SetOnState` | quel état est « activé » pour l'exclusivité de groupe |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | interrupteur principal de la liaison au canal d'animation |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Les sous-classes Blueprint peuvent implémenter `BI_RyanPickerToggle` : `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, ainsi que les
[événements de cycle de vie communs](./blueprint-api#event-hooks).
