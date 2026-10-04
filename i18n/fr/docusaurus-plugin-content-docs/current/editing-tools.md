---
sidebar_position: 9
---

# Outils d'édition et du canevas \{#editing--canvas-tools}

Tout ce qui est décrit sur cette page se passe en **mode édition**. Le canevas lui-même se déplace et se zoome dans les deux
modes — construisez au niveau de zoom qui vous convient.

## Sélection \{#selection}

- Cliquez sur un widget pour le sélectionner ; Maj/Ctrl+clic étend la sélection.
- Faites glisser sur une zone vide du canevas pour tracer un rectangle de sélection.
- Les widgets sélectionnés affichent huit poignées de redimensionnement et une poignée de rotation, chacune avec son propre curseur.

L'Éditeur d'attributs suit la sélection unique ; les outils de la barre d'outils ci-dessous permettent de modifier de nombreux
widgets à la fois.

## Manipulation directe \{#direct-manipulation}

Faites glisser un widget pour le déplacer. Faites glisser une poignée pour le redimensionner — le redimensionnement fonctionne aussi correctement sur les widgets
pivotés. Faites glisser la poignée de rotation pour faire pivoter un widget autour de son centre ; la rotation est stockée en
degrés, et les widgets pivotés restent pleinement fonctionnels en mode Live (un slider pivoté se fait glisser le long
de son axe pivoté). Maintenez Maj pendant la rotation pour l'aligner par incréments de 15°. Faire pivoter une sélection de plusieurs widgets
fait tourner tout le groupe de façon rigide autour d'un pivot commun (ancré sur le dernier widget
sélectionné), tandis que chaque widget continue aussi de tourner sur son propre centre.

Un widget verrouillé échappe à tout cela — voir [Verrouillage des widgets](./attribute-editor-and-outliner#widget-locking).

Les touches fléchées décalent la sélection (Maj pour un pas plus grand ; ces deux distances sont des Class
Defaults de la page). L'outil **Décaler** de la barre d'outils ajoute des flèches à l'écran avec leur propre distance,
réglée dans un champ numérique, pour des pas répétés et précis.

## Outils de la barre d'outils \{#toolbar-tools}

Une seule rangée d'outils est active à la fois, basculée depuis l'en-tête :

| Outil | Agit sur la sélection |
|---|---|
| **Image** | assigne une texture à chaque widget sélectionné |
| **Couleur** | applique une couleur d'arrière-plan/de police à chaque widget sélectionné |
| **Étiquette** | définit le texte de l'étiquette et la taille de police pour toute la sélection |
| **Taille** | définit une largeur/hauteur exacte pour toute la sélection |
| **Décaler** | flèches à pas fixe, comme ci-dessus |
| **Aligner** | gauche/droite/haut/bas, centres horizontal/vertical et répartition égale |
| **Miroir** | voir ci-dessous |

Les modifications de couleur depuis la barre d'outils (et l'Éditeur d'attributs) sont regroupées pendant que vous faites glisser dans le
sélecteur de couleur — une étape d'annulation par session de couleur, et non par mouvement de souris.

## Miroir \{#mirror}

Construit un côté d'une page à partir de l'autre : **Mirror Horizontal** / **Mirror Vertical** reflètent
la position de chaque widget sélectionné par rapport à un axe et inversent sa rotation. L'axe est défini par la
liste déroulante **Mirror Mode** :

| Mode | Reflète par rapport à |
|---|---|
| Soi-même | le centre de chaque widget — les widgets se retournent sur place |
| Dernière sélection (incl.) | le centre du dernier widget sélectionné ; il se déplace aussi |
| Dernière sélection (excl.) | le centre du dernier widget sélectionné ; il reste en place |
| Canevas visible | le centre de ce que vous voyez actuellement |

Le miroir est uniquement géométrique — il ne renomme pas les contrôles et n'échange pas les canaux des sliders. Le flux
habituel consiste à refléter puis à recibler : reflétez les widgets du bras gauche, puis faites pointer les copies vers les
contrôles du côté droit. Pour un miroir gauche/droite reproductible qui mémorise les paires, voir
[Refléter la pose](./mirror-pose).

## Groupes de calques \{#layer-groups}

Chaque widget appartient à un **groupe de calques**, et l'ordre de dessin correspond simplement aux membres de chaque groupe,
groupe par groupe, de l'avant vers l'arrière. Trois groupes — **Images**, **Étiquettes**, **Contrôles** — sont créés
sur chaque page et ne peuvent pas être supprimés (supprimer tout autre groupe réaffecte ses membres au
groupe par défaut de leur type). En plus de ces trois groupes, vous pouvez créer, renommer, réordonner et verrouiller
autant de groupes que vous le souhaitez — un groupe verrouillé verrouille chacun de ses widgets, comme le
[verrouillage](./attribute-editor-and-outliner#widget-locking) d'un widget individuel.

Faites un clic droit sur un widget pour **Amener au premier plan / Step Up / Step Down / Envoyer à l'arrière-plan**, au sein de son propre groupe. Déplacer
un widget d'un groupe à l'autre, réordonner les groupes eux-mêmes et verrouiller se font tous depuis la
[vue Par calque](./attribute-editor-and-outliner#outliner-left) de l'Outliner — consultez cette page pour l'interface
complète de gestion par glisser-déposer.

## Copier, couper, coller \{#copy-cut-paste}

Ctrl+C / Ctrl+X / Ctrl+V sur n'importe quelle sélection. Le collage se fait à l'emplacement du curseur ; coller dans un autre onglet
de page ouvert fonctionne, et Coller sur place conserve les positions exactes pour les transferts d'une page à l'autre.
Les widgets collés conservent leur nom lorsque c'est possible, avec un suffixe numérique en cas de doublon. Les groupes de
bascules peuvent être copiés et collés [en tant que groupes entiers](./widget-toggle#toggle-groups).

## Valeurs par défaut des widgets \{#widget-defaults}

L'apparence d'un widget fraîchement ajouté est déterminée par couches, la plus spécifique en dernier :

1. **Class Defaults** — valeurs de départ par type (couleurs, tailles, polices…) modifiables dans le
   panneau Class Defaults de la page, une catégorie par type de widget.
2. **Sticky Defaults** — clic droit sur n'importe quel widget → **Copy to Sticky Defaults**, et les widgets
   de ce type créés ensuite lui ressembleront. Les catégories de propriétés reprises (couleur, police, rayon d'angle,
   taille, rotation, texte, image) se choisissent dans les [Paramètres de l'éditeur](./editor-settings).

Ces valeurs ne s'appliquent qu'aux widgets ajoutés depuis le menu Add Widget — les widgets collés et chargés conservent leurs propres
données.
