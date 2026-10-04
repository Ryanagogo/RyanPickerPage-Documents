# Raccourcis \{#hotkeys}

Tous les raccourcis clavier et gestes de souris auxquels réagit l'éditeur du picker.

### Règles de focus et de mode \{#focus-and-mode-rules}

- **Les raccourcis clavier ne fonctionnent que lorsque le canevas a le focus.** Le canevas prend le focus dès que vous cliquez dessus. Si un champ d'une barre latérale ou la liste de l'Outliner a le focus, vos frappes y sont envoyées.
- Seul le raccourci **F** fonctionne en mode Live. Tous les autres raccourcis clavier sont réservés au mode édition.
- Le panoramique par glisser-clic droit et le zoom à la molette fonctionnent en mode édition comme en mode Live.

### Clavier \{#keyboard}

| Touche | Action | Mode |
|---|---|---|
| **Suppr** | Supprimer les widgets sélectionnés | Édition uniquement |
| **F** | Centrer la vue du canevas sur la sélection actuelle (le zoom reste inchangé) | Édition + Live |
| **Alt + clic sur un bouton** | Centrer le viewport sur les objets sélectionnés en cliquant sur un bouton |Live uniquement|
| **Alt + sélection de boutons par glisser** | Centrer le viewport sur les objets sélectionnés en traçant un rectangle sur des boutons |Live uniquement|
| **Touches fléchées** | Décaler la sélection (2 px par défaut) | Édition uniquement |
| **Maj + touches fléchées** | Décaler la sélection d'un pas plus grand (10 px par défaut) | Édition uniquement |
| **Ctrl + X** | Couper les widgets sélectionnés | Édition uniquement |
| **Ctrl + C** | Copier les widgets sélectionnés | Édition uniquement |
| **Ctrl + V** | Coller au niveau du curseur de la souris | Édition uniquement |
| **Ctrl + Z** | Annuler | Édition uniquement |
| **Ctrl + Maj + Z** ou **Ctrl + Y** | Rétablir | Édition uniquement |

Les deux distances de décalage au clavier sont définies dans le panneau Class Defaults de la page. Elles sont indépendantes de l'outil **Décaler** de la barre d'outils, qui possède son propre champ de distance.

Copier / couper / coller fonctionne entre les onglets de page ouverts.

**Non attribués :** il n'y a pas de Ctrl+A (tout sélectionner), Ctrl+S (enregistrer), Ctrl+D (dupliquer) ni Échap (désélectionner). Dupliquer, Aligner, Répartir et Miroir se trouvent uniquement dans le menu du clic droit ou dans la barre d'outils.

### Souris – sélectionner des widgets \{#mouse---selecting-widgets}

Seules Ctrl et Maj modifient le fonctionnement de la sélection.

| Geste | Action |
|---|---|
| Clic sur un widget | Sélectionner uniquement ce widget |
| Ctrl + clic sur un widget | Ajouter ce widget à la sélection ou l'en retirer |
| Maj + clic sur un widget | Ajouter ce widget à la sélection |
| Clic sur une zone vide du canevas | Effacer la sélection |
| Glisser sur une zone vide du canevas | Tracer un rectangle de sélection |
| Ctrl ou Maj + tracer un rectangle de sélection | Ajouter les widgets encadrés à la sélection actuelle au lieu de la remplacer |
| Clic sur une ligne de l'Outliner | Sélectionne ce widget — fonctionne même sur les widgets verrouillés |
| Double-clic sur une ligne de l'Outliner | Le renommer |

### Souris – déplacer, redimensionner, faire pivoter (mode édition) \{#mouse---moving-resizing-rotating-edit-mode}

Les huit poignées de redimensionnement et la poignée de déplacement n'apparaissent qu'en mode édition.

| Geste | Action |
|---|---|
| Faire glisser la poignée de déplacement | Déplacer les widgets sélectionnés |
| **Alt** + faire glisser la poignée de déplacement | Faire pivoter au lieu de déplacer |
| **Alt + Maj** + faire glisser la poignée de déplacement | Faire pivoter par incréments de 15 degrés |
| Faire glisser une poignée de bord ou de coin | Redimensionner (fonctionne correctement sur les widgets pivotés) |

Maintenez Alt avant d'appuyer sur la poignée de déplacement pour commencer à faire pivoter. Maintenez Maj pendant le glissement pour aligner par incréments.

### Souris – naviguer sur le canevas \{#mouse---navigating-the-canvas}

| Geste | Action | Mode |
|---|---|---|
| Molette de la souris | Zoomer vers le curseur | Édition + Live |
| Glisser avec le bouton droit | Déplacer le canevas | Édition + Live |
| Clic droit (sans glisser) | Ouvrir le menu contextuel | Édition uniquement |
| Faire glisser le séparateur d'une barre latérale | Redimensionner le panneau de l'Outliner ou de l'Éditeur d'attributs | Édition uniquement |

### Signets \{#bookmarks}

| Geste | Action |
|---|---|
| Clic sur un signet | Appliquer la vue enregistrée |
| **Ctrl + Maj + clic** sur un signet | Enregistrer la vue actuelle dans ce signet (en l'écrasant) |
| Clic droit sur un signet | Le renommer ou l'effacer |
