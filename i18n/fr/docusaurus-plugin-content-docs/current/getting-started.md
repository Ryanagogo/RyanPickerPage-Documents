---
sidebar_position: 2
---

# Prise en main \{#getting-started}

## Ouvrir une page \{#opening-a-page}

**Tools → Ryan Picker Page** ouvre une page dans un nouvel onglet de l'éditeur. Le bouton **New Tab** de
l'en-tête de la page en ouvre d'autres — chaque onglet est entièrement indépendant, avec son propre fichier, sa propre sélection
Control Rig et sa propre vue du canevas. Renommer une page (son titre est modifiable en mode édition) renomme
son onglet, si bien qu'une rangée de pickers ouverts reste facile à parcourir.

## Deux modes \{#two-modes}

Le bouton du mode édition dans l'en-tête fait basculer toute la page entre :

**Mode Live** — le mode d'animation. Cliquer sur les widgets sélectionne les contrôles du rig et les acteurs ; faire glisser
les sliders pilote les transformations ; survoler un widget affiche une info-bulle indiquant à quoi il est relié. La disposition
elle-même est intouchable.

**C'est en mode Live qu'une page terminée passe sa vie.** Tout ce qui se trouve sous
[Outils d'édition et du canevas](./editing-tools) n'existe que pour vous amener ici.

**Mode édition** — le mode de construction. Les widgets affichent des poignées de déplacement, de redimensionnement et de rotation, un clic droit
sur une zone vide du canevas ouvre le menu **Add Widget**, et deux barres latérales repliables apparaissent : l'
[Outliner](./attribute-editor-and-outliner) à gauche et l'
[Éditeur d'attributs](./attribute-editor-and-outliner) à droite.

## Créer votre première page \{#build-your-first-page}

Un picker minimal pour une jambe, du début à la fin :

1. Ouvrez une Level Sequence contenant votre personnage et son Control Rig, puis ouvrez une page de picker.
   La liste déroulante des rigs de l'en-tête se remplit à partir de la séquence active — choisissez votre rig (il est
   sélectionné automatiquement s'il n'y en a qu'un).
2. Passez en **mode édition**.
3. Dans le viewport ou l'Anim Outliner, sélectionnez le contrôle de la cuisse. Faites un clic droit sur le canevas →
   **Add Widget → Bouton de sélection**. Par défaut, un nouveau bouton initialise sa liste de cibles à partir de la
   sélection courante ; ce bouton pilote donc déjà la cuisse.
4. Recommencez pour le mollet et le pied. Utilisez le champ d'étiquette de l'
   [Éditeur d'attributs](./attribute-editor-and-outliner) pour nommer chaque bouton, puis faites-les glisser pour former une
   colonne en forme de jambe.
5. Sélectionnez les trois et essayez les [outils d'alignement](./editing-tools) pour redresser la colonne.
6. Quittez le mode édition. Cliquez sur les boutons — chacun sélectionne son contrôle. Voilà la boucle de base ; tout le reste
   n'est que peaufinage.
7. **Fichier → Enregistrer** écrit la page dans un fichier JSON à l'emplacement de votre choix — voir
   [Enregistrement, chargement et fichiers](./save-load-and-files).

## Annuler, rétablir et filets de sécurité \{#undo-redo-and-safety-nets}

Chaque modification en mode édition — déplacements, redimensionnements, ajouts, suppressions, collages, modifications de couleur — est ajoutée à la
pile d'annulation de la page (30 étapes par défaut ; voir [Paramètres de l'éditeur](./editor-settings)). Ctrl+Z /
Ctrl+Y, ou les boutons de l'en-tête. Un glissement dans un sélecteur de couleur est regroupé en une seule étape d'annulation
plutôt qu'en une par mouvement ; annuler un changement de couleur annule donc tout le glissement.

Les [signets](./bookmarks) ont leur propre pile d'annulation distincte — annuler une modification de disposition ne touche jamais
à vos vues enregistrées, et inversement.

## Reprendre là où vous vous étiez arrêté \{#picking-up-where-you-left-off}

Pour chaque fichier enregistré, le plugin mémorise le panoramique et le zoom de votre canevas, le Control Rig actif et
si vous étiez en mode édition ou en mode Live — le tout étant restauré automatiquement au prochain chargement de ce fichier,
sur cette machine. Ces informations sont stockées en dehors du fichier de la page : partager une page avec un
collègue partage la disposition, pas vos habitudes d'affichage. Voir
[Enregistrement, chargement et fichiers](./save-load-and-files#session-state).
