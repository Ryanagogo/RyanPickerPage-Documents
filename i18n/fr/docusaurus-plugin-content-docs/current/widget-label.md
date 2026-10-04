---
sidebar_position: 7
---

# Étiquette \{#label}

*Du texte sur le canevas. Les clics le traversent directement.*

Les étiquettes servent à annoter : titres de section (« BRAS GAUCHE »), notes ou images légendées. Elles n'ont
aucun comportement au clic en mode Live et aucune cible assignée — ce qui en fait aussi le seul type de widget
(avec [Image](./widget-image)) que vous pouvez superposer librement sans voler les clics des
contrôles qui les entourent.

Une étiquette peut afficher en direct le **nom du Control Rig actuel** au lieu d'un texte fixe — placez-en une dans
un coin de la page et elle indiquera toujours à l'animateur quel rig cet onglet pilote.

## Création \{#authoring}

- **Texte**, taille de police, couleur de police, **justification**, **retour à la ligne automatique**
- **Couleur d'arrière-plan** et, en option, une **image** d'arrière-plan avec son propre mode d'étirement et
  [recadrage panoramique/zoom](./widget-image#crop-panzoom)
- **Alpha de l'image** — opacité de cette image d'arrière-plan par-dessus la couleur d'arrière-plan, 0–1
- Rayon d'angle : les étiquettes ont des angles droits par défaut (rayon 0), mais suivent la même
  [cascade d'arrondi](./attribute-editor-and-outliner#corner-radius) que tous les autres types
- Le bloc commun position/taille/rotation

Les étiquettes affichent leur arrière-plan avec le même matériau à angles arrondis que
[Image](./widget-image#rendering) ; l'arrondi et le recadrage d'image se comportent donc de façon identique sur les deux.

## Scripting \{#scripting}

`URyanPickerLabelFunctionLibrary` (catégorie `Ryan Picker Page|Label`) :

| Fonction | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | image d'arrière-plan |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | recadrage panoramique/zoom |
| `GetImageAlpha` / `SetImageAlpha` | limité à 0–1 |

Les étiquettes n'ont pas d'interface de hooks d'événements — il n'y a rien à cliquer ni à faire glisser — mais toutes les
[fonctions communes aux widgets](./blueprint-api) (position, taille, rotation, rayon d'angle, nom)
s'appliquent.
