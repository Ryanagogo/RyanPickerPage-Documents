---
sidebar_position: 15
---

# Paramètres de l'éditeur \{#editor-settings}

**Fichier → Settings…** ouvre la boîte de dialogue des paramètres globaux du plugin. Il s'agit de préférences **propres à chaque machine**
qui s'appliquent à toutes les pages que vous ouvrez, par opposition aux Class Defaults propres à chaque page (enregistrés dans
le Blueprint de la page) et aux données propres à chaque fichier (enregistrées dans le fichier de la page).

## Comportement des nouveaux widgets \{#new-widget-behavior}

| Paramètre | Par défaut | |
|---|---|---|
| Seed New Widget Targets From Selection | activé | les nouveaux boutons/sliders préremplissent leurs cibles à partir de la sélection courante — voir [Comment les cibles sont assignées](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | désactivé | les nouveaux boutons de sélection démarrent en [mode de sélection interactif](./widget-select-button#interactive-selection-mode) |
| Taille par défaut des nouveaux widgets | 200 × 100 | avec une case **Override** — décochée, la valeur des Class Defaults de la page l'emporte ; cochée, la valeur de cette boîte de dialogue la remplace |
| Rayon d'angle par défaut | 10 | même principe de case Override ; c'est la valeur de repli globale de la [cascade d'arrondi](./attribute-editor-and-outliner#corner-radius) |

## Catégories des Sticky Defaults \{#sticky-defaults-categories}

Sept cases à cocher — **Couleur, Police, Rayon d'angle, Taille, Rotation, Texte, Image**, toutes cochées par
défaut — déterminent quels groupes de propriétés
[Copy to Sticky Defaults](./editing-tools#widget-defaults) reporte réellement sur les nouveaux widgets.
Décochez par exemple Taille et Rotation pour que les sticky defaults soient purement esthétiques.

## Page et maintenance \{#page--housekeeping}

| Paramètre | Par défaut | |
|---|---|---|
| Nombre de signets par défaut | 4 | emplacements de [signets](./bookmarks) utilisateur sur une nouvelle page (8 max.) |
| Profondeur de la pile d'annulation | 30 | étapes d'annulation/rétablissement de la page principale |
| Âge maximal de l'état de session | 90 jours | les entrées d'[état de session](./save-load-and-files#session-state) plus anciennes sont purgées ; 0 désactive la purge |

## Le principe de remplacement \{#the-override-pattern}

Pour les valeurs qui existent aussi dans les Class Defaults de la page (taille des widgets, rayon d'angle), cette boîte de dialogue
s'efface volontairement : les Class Defaults du Blueprint de la page font autorité tant que vous ne cochez pas ici la
case **Override** correspondante. Les réglages d'un Blueprint de page partagé restent ainsi intacts par défaut,
tout en permettant à une machine donnée d'imposer ses propres valeurs.
