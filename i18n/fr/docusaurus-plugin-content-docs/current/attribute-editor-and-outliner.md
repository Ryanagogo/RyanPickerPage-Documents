---
sidebar_position: 13
---

# Éditeur d'attributs et Outliner \{#attribute-editor--outliner}

Les deux barres latérales du mode édition. Chacune possède son propre bouton dans l'en-tête : vous pouvez donc garder l'une, les deux ou
aucune à l'écran.

## Outliner (à gauche) \{#outliner-left}

Une liste de tout ce qui se trouve sur la page — cliquez sur une ligne pour sélectionner le widget, double-cliquez pour le renommer,
faites un clic droit pour déplacer/supprimer. Trois vues, que l'on bascule avec les boutons situés au-dessus de la liste :

- **Par type** — regroupé sous les en-têtes des six types de widgets. La vue de tous les jours.
- **Par calque** — regroupé par [groupe de calques](./editing-tools#layer-groups), dans l'ordre de dessin. C'est
  ici que l'on réorganise l'empilement : faites glisser un widget sur un autre groupe pour l'y déplacer, faites-le glisser
  au sein d'un groupe pour le réordonner, ou faites glisser l'en-tête d'un groupe pour réordonner les groupes. Chaque en-tête de groupe
  possède son propre bouton de verrouillage et se replie indépendamment.
- **Par groupe** — les [groupes de bascules](./widget-toggle#toggle-groups) avec leurs membres imbriqués
  sous chaque en-tête nommé ; c'est aussi ici que l'on renomme les groupes.

Les noms de widgets sont uniques dans une page (sans tenir compte de la casse) — un renommage en conflit est refusé et
annulé plutôt que modifié silencieusement. La dernière vue utilisée est mémorisée globalement d'une session à l'autre.

## Éditeur d'attributs (à droite) \{#attribute-editor-right}

Les propriétés du widget sélectionné, dans un panneau de détails. Il modifie **un widget à la
fois** — pour appliquer la même modification à de nombreux widgets, utilisez plutôt les
[outils de la barre d'outils](./editing-tools#toolbar-tools).

Les champs affichés dépendent du type de widget ; chaque page de widget documente les siens. Le
bloc commun — position, taille, rotation, rayon d'angle, nom du widget — est toujours présent.

Deux comportements à connaître :

- **Les modifications en cours sont validées avant tout changement de sélection.** Si vous êtes en train de modifier un champ et
  cliquez sur un autre widget, la valeur en attente est validée sur le widget que vous étiez réellement en train de
  modifier — elle ne peut pas se reporter sur celui que vous venez de sélectionner.
- **L'avertissement de canal identique du slider 2D** s'affiche sous forme de bandeau coloré directement dans le panneau — voir
  [Slider 2D](./widget-2d-slider).

## Rayon d'angle \{#corner-radius}

L'arrondi d'un widget est déterminé par une cascade à trois niveaux, le plus spécifique l'emportant :

1. **Remplacement par widget** — un indicateur « override corner radius » et une valeur personnalisée sur le
   widget concerné.
2. **Class Default par type** — chaque type de widget peut définir sa propre valeur par défaut dans le panneau Class
   Defaults de la page.
3. **Valeur par défaut globale** — 10 pour les types bouton/slider/bascule ; les étiquettes et les images ont par défaut des
   angles droits (0). La valeur de repli globale se règle dans les [Paramètres de l'éditeur](./editor-settings).

Les widgets non personnalisés suivent la cascade en direct — augmentez la valeur par défaut du type et chaque widget
de ce type sans remplacement est mis à jour en conséquence.

## Verrouillage des widgets \{#widget-locking}

N'importe quel widget peut être verrouillé — avec la case de l'Éditeur d'attributs, avec l'icône de cadenas de sa ligne
ou de l'en-tête de son groupe dans l'Outliner, ou via **Verrouiller**/**Déverrouiller la sélection** dans le menu du clic droit.

Le verrouillage n'affecte que le mode édition : un widget verrouillé ne peut y être ni sélectionné, ni déplacé, ni redimensionné, et
ses poignées de déplacement/redimensionnement disparaissent complètement. Le mode Live et la liste de l'Outliner elle-même ne sont pas concernés
— un widget verrouillé fonctionne normalement lorsqu'on clique dessus en mode Live, et vous pouvez toujours le voir et
le renommer dans l'Outliner. Verrouiller un [groupe de calques](./editing-tools#layer-groups) depuis son en-tête dans l'Outliner
verrouille tous ses membres de la même manière.

Le verrouillage est destiné aux widgets que vous avez fini de positionner et que vous ne voulez pas décaler par mégarde en
travaillant autour — une image d'arrière-plan, par exemple, ou une rangée de boutons terminée.

## Info-bulle du mode Live \{#live-mode-tooltip}

En mode Live, survoler un widget affiche une info-bulle récapitulant ses liaisons — son nom et
les contrôles/acteurs qu'il pilote. C'est le moyen le plus rapide d'examiner une page inconnue sans
passer en mode édition.
