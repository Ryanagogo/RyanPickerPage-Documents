---
sidebar_position: 10
---

# Refléter la pose \{#mirror-pose}

*Apprenez une fois à la page sa propre symétrie gauche/droite ; reflétez les dispositions pour toujours.*

L'[outil Miroir](./editing-tools#mirror) reflète ce qui se trouve sélectionné par rapport à
l'ancre choisie — parfait pour des retournements ponctuels, mais il ignore quels widgets
se correspondent. **Refléter la pose** règle ce problème avec une **Pose Map** : un enregistrement au niveau de la page indiquant
quel widget est le partenaire gauche de quel autre, où se trouve l'axe central et quel widget
sert d'ancre à l'ensemble. Une fois la correspondance établie, refléter la disposition se fait en un clic, à chaque fois, sans
acrobaties de sélection.

## La Pose Map \{#the-pose-map}

Créée dans la boîte de dialogue **Pose Map…** (menu Fichier). Chaque page possède exactement une map, contenant trois
types d'entrées :

- **Ancre** — l'unique widget qui définit l'axe de symétrie (son centre). Généralement un
  bouton racine/bassin placé sur l'axe central de la page. Rien n'est reflété tant qu'aucune ancre n'est définie —
  sinon le bouton Pose affiche un avertissement.
- **Widgets centraux** — colonne, tête, tout ce qui est sur l'axe central. Ils se reflètent sur eux-mêmes
  (retournement sur place par rapport à l'axe).
- **Paires** — couples de widgets gauche/droite : cuisse gauche ↔ cuisse droite, etc.

Les listes déroulantes de widgets de la boîte de dialogue sont triées par ordre alphabétique et filtrables : établir la correspondance d'une grande page
se fait donc en tapant pour filtrer plutôt qu'en faisant défiler. Un bouton **Réinitialiser la Map** (avec confirmation) efface
toute la map. La map est enregistrée dans le fichier de la page et voyage donc avec la disposition.

## Utilisation \{#using-it}

La rangée Miroir de la barre d'outils comporte un bouton **Pose** et une liste déroulante de direction, après les boutons
Mirror Horizontal/Vertical.

**Avec une sélection** — cliquer sur **Pose** reflète chaque widget sélectionné selon son
rôle dans la map : la position et la rotation d'un widget gauche ou droit sont reflétées par rapport à l'axe de l'ancre et
écrites sur son *partenaire* (le côté sélectionné est la source et ne bouge pas) ; les widgets centraux et
l'ancre se retournent sur place. Les widgets sélectionnés absents de la map sont ignorés avec une notification,
tandis que les autres sont traités.

**Sans sélection** — toute la map est reflétée en un clic, dans la direction indiquée par la liste déroulante
(**Gauche → Droite** par défaut, ou **Droite → Gauche**) : l'ancre et chaque widget central
se retournent sur place, et chaque paire copie son côté source sur son côté destination. C'est le
bouton « j'ai fini le bras gauche, reporte le bras droit ».

La liste déroulante de direction est un contrôle temporaire de la page — elle n'est pas enregistrée avec le fichier.

## Ce que cela modifie — et ce que cela ne modifie pas \{#what-it-changes--and-doesnt}

Refléter la pose déplace la **géométrie des widgets** : position et rotation sur le canevas. Comme l'outil Miroir,
cela ne change pas ce à quoi les widgets sont reliés — votre bouton de cuisse droite continue de piloter la cuisse
droite ; il est simplement placé exactement à l'emplacement du gauche, en miroir. C'est tout l'intérêt :
recibler une fois, puis garder les deux côtés visuellement synchronisés à mesure que la disposition évolue.
