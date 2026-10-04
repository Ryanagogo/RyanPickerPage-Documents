---
sidebar_position: 11
---

# Signets \{#bookmarks}

*Positions de caméra nommées pour le canevas.*

Sur un picker du corps entier, vous passez sans cesse d'une zone à l'autre — visage, mains, pieds. Les signets
réduisent chaque saut à un clic : un signet mémorise une vue (panoramique et zoom) du canevas, et cliquer sur son bouton dans
la rangée de l'en-tête y ramène instantanément le canevas.

## La rangée de signets \{#the-bookmark-row}

- **Par défaut** existe toujours et reste toujours visible, hors de la rangée défilante — considérez-le comme
  votre « accueil ».
- **Les emplacements utilisateur** — 4 par défaut, jusqu'à 8 (voir [Paramètres de l'éditeur](./editor-settings)) — se trouvent dans une
  rangée à défilement horizontal à côté, numérotés selon leur position et renommables.

## Utiliser les signets \{#working-with-bookmarks}

| Action | Comment |
|---|---|
| Aller à une vue | cliquez sur le bouton |
| Mémoriser la vue actuelle | **Ctrl+Maj+clic** sur le bouton, ou clic droit → Définir / écraser — le bouton clignote en vert pour confirmer |
| Renommer un emplacement | clic droit → Renommer |
| Ajouter un emplacement | clic droit → Ajouter un signet avant / Ajouter un signet après |
| Réordonner | clic droit → Déplacer à gauche / Déplacer à droite — les deux boutons échangés clignotent en orange |
| Supprimer / réinitialiser | clic droit → Supprimer, ou Reset to Identity |

Les modifications de signets ont leur **propre pile d'annulation de 30 étapes**, totalement indépendante de l'annulation de la disposition —
Ctrl+Z sur le canevas n'effacera jamais une modification de signet, et l'annulation d'un signet ne touche jamais à la
disposition.

Les signets sont enregistrés dans le fichier de la page avec tout le reste. La largeur des boutons, la police, la marge intérieure et les
deux couleurs de clignotement de confirmation sont réglables par page dans le panneau Class Defaults.
