---
sidebar_position: 8
---

# Image \{#image}

*Des visuels sur le canevas — portraits de personnages, schémas du corps, arrière-plans.*

Les images sont le socle visuel d'un bon picker : une vue de face/profil du personnage ou une silhouette du corps
derrière les boutons transforme une grille de boutons abstraite en quelque chose de lisible d'un coup d'œil. Comme les
[étiquettes](./widget-label), elles n'ont aucun comportement au clic en mode Live, et elles démarrent dans le
[groupe de calques](./editing-tools#layer-groups) **Images** — le plus en arrière des trois groupes
par défaut — de sorte qu'une image fraîchement ajoutée ne masquera pas un contrôle interactif, à moins que vous ne réordonniez
vous-même les groupes par la suite.

## Recadrage panoramique/zoom \{#crop-panzoom}

Plutôt que de recadrer les textures au préalable dans un éditeur d'images, cadrez-les directement sur la page : **Image Scale**
zoome dans la texture source et **Image Offset** déplace la fenêtre visible sur celle-ci. Une seule
planche de personnage peut alimenter une douzaine de widgets Image, chacun cadrant une partie du corps différente. Les deux mêmes
réglages existent pour l'image d'arrière-plan d'une étiquette.

## Création \{#authoring}

- **Texture**
- **Mode d'étirement** — la façon dont la texture s'adapte au rectangle du widget
- **Image Scale** / **Image Offset** — la fenêtre de recadrage
- **Couleur d'arrière-plan** — placée derrière la texture ; c'est aussi la couleur vers laquelle **Alpha de l'image** fait le fondu
- **Alpha de l'image** — opacité de la texture par-dessus la couleur d'arrière-plan, 0–1
- Rayon d'angle (angles droits par défaut, comme les étiquettes)
- Le bloc commun position/taille/rotation

## Rendu \{#rendering}

Les images et les étiquettes sont dessinées au moyen d'une instance dynamique d'un matériau partagé
(`M_RyanPickerRoundedImage`) plutôt que d'un simple pinceau de texture. L'arrondi des angles, l'ajustement selon le mode d'étirement
et la fenêtre de recadrage sont tous calculés dans cette unique passe de matériau — c'est pourquoi les deux
types se comportent de façon identique au pixel près et pourquoi le recadrage ne coûte rien de plus.

## Scripting \{#scripting}

`URyanPickerImageFunctionLibrary` (catégorie `Ryan Picker Page|Image`) :

| Fonction | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | recadrage panoramique/zoom |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | limité à 0–1 |

Pas d'interface de hooks d'événements ; les [fonctions communes aux widgets](./blueprint-api) s'appliquent.
