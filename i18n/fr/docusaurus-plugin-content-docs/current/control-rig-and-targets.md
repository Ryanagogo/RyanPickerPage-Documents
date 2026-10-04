---
sidebar_position: 12
---

# Control Rig et acteurs cibles \{#control-rig--target-actors}

*Ce à quoi un widget est « relié », et comment cette liaison survit aux sessions, aux séquences et aux réapparitions.*

Les widgets ne conservent jamais de références d'objet en dur. Ils stockent des **noms et des identités** — noms de contrôles
Control Rig, identités d'acteurs — et les résolvent par rapport à l'état actuel de l'éditeur au moment où
vous cliquez. C'est cette indirection qui permet à une page enregistrée de continuer à fonctionner après un redémarrage de l'éditeur,
dans des niveaux différents et au fil du cycle de vie des acteurs dans Sequencer.

## Le Control Rig actuel \{#the-current-control-rig}

Chaque onglet de page possède un **Control Rig actuel**, choisi dans la liste déroulante de l'en-tête. Cette liste
affiche les rigs liés dans la **Level Sequence active** et se met à jour toute seule : passez à une
autre séquence alors que le picker est ouvert et la liste se reconstruit — en conservant votre choix si
ce rig est toujours lié, et en le sélectionnant automatiquement lorsqu'un seul rig est disponible.

Les noms de contrôles des widgets sont résolus par rapport à ce rig. La même page pilote donc tout
personnage partageant la nomenclature des contrôles du rig — créez une page de bipède et utilisez-la pour toute la distribution.
(Les [étiquettes](./widget-label) peuvent afficher le nom du rig actuel pour que les animateurs sachent toujours quel
personnage un onglet pilote.)

## Acteurs cibles \{#target-actors}

Les widgets peuvent aussi cibler des **acteurs** — à la place des contrôles de rig ou en plus de ceux-ci. Un bouton peut
sélectionner à la fois un accessoire, une caméra et un contrôle de rig ; un slider peut piloter directement un canal de transformation d'un acteur,
avec auto-key dans Sequencer comme n'importe quelle animation à la main.

### Spawnables de Sequencer \{#sequencer-spawnables}

Les acteurs ordinaires du niveau sont identifiés par leur GUID d'acteur stable. **Les spawnables sont le piège** :
Sequencer les fait réapparaître avec un GUID d'acteur *nouveau* à chaque session, ce qui casserait silencieusement toute
page enregistrée avec l'ancien. C'est pourquoi chaque assignation d'acteur sur chaque widget stocke deux identités
en parallèle — le GUID de l'acteur *et* le **GUID de binding** Sequencer de l'acteur, qui reste stable
d'une réapparition à l'autre. La résolution essaie le GUID de l'acteur puis se rabat sur le binding. Vous n'avez jamais
à vous en occuper ; c'est ce qui permet aux pages riches en spawnables de fonctionner encore la semaine suivante.

## Comment les cibles sont assignées \{#how-targets-get-assigned}

En mode édition, avec un widget sélectionné :

- **Initialisation à la création** (par défaut, [configurable](./editor-settings)) : la liste de cibles d'un nouveau widget est
  préremplie avec les contrôles/acteurs sélectionnés au moment de l'ajout. Sélection dans le viewport →
  Add Widget : c'est tout le geste de création.
- Les champs de cibles de l'Éditeur d'attributs affichent un récapitulatif résolu et lisible — vrais noms d'acteurs
  et de contrôles, pas des GUID — pour vérifier les liaisons d'un coup d'œil. Les références cassées
  (acteurs supprimés, contrôles renommés) ne se résolvent simplement en rien, au lieu de provoquer une erreur sur la page.

## Deux philosophies de sélection \{#two-selection-philosophies}

Les [boutons de sélection](./widget-select-button) proposent les deux comportements classiques d'un picker :
les **ensembles de sélection** (un clic remplace la sélection par l'ensemble mémorisé) et le **mode de sélection
interactif** (les boutons reflètent en continu la sélection de l'éditeur et les clics s'ajoutent — voir
la page du bouton de sélection pour le comportement complet). La collecte de la sélection est volontairement
indépendante du rig : l'initialisation et la correspondance interactive prennent en compte votre sélection réelle dans l'éditeur, pas seulement
les contrôles appartenant au rig actuel de la liste déroulante.
