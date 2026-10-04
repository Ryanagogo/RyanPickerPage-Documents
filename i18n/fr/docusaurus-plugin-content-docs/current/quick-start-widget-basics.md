# Notions de base sur les widgets \{#widget-basics}

### Créer des widgets \{#create-widgets}

- Vous devez être en mode édition pour créer de nouveaux widgets
- Faites un clic droit sur une zone vide du canevas pour ouvrir le menu contextuel, qui contient les éléments permettant de créer les différents types de widgets de picker
- Un nouveau widget est placé à l'endroit où se trouvait le pointeur de la souris lors du clic droit.
- La création de widgets ajoute une entrée à la pile d'annulation : vous pouvez donc annuler et rétablir la création

### Supprimer des widgets \{#delete-widgets}

- Vous devez être en mode édition pour supprimer des widgets
- Vous pouvez supprimer tous les widgets sélectionnés en appuyant sur la touche « Suppr »
- Pour supprimer un seul widget, faites un clic droit dessus pour ouvrir son menu contextuel. En bas du menu se trouve l'élément permettant de supprimer ce widget.
- La suppression de widgets ajoute une entrée à la pile d'annulation : vous pouvez donc annuler et rétablir les suppressions.

### Sélectionner des widgets \{#select-widgets}

- Vous pouvez sélectionner des widgets en mode Live comme en mode édition
- Vous pouvez sélectionner des widgets en cliquant dessus ou en traçant un rectangle autour
- En mode Live, certains widgets ne sont pas sélectionnables :
  - Widgets d'étiquette
  - Widgets d'image
- En mode édition, tous les widgets sont sélectionnables
  - Dans l'Outliner, vous pouvez verrouiller des widgets pour qu'ils ne soient pas sélectionnables. C'est utile lorsque plusieurs widgets sont empilés les uns sur les autres.
- L'ordre dans lequel les widgets sont sélectionnés est mémorisé. Certaines fonctionnalités du mode édition utilisent cet ordre de sélection

### Transformer des widgets \{#transform-widgets}

- Vous devez être en mode édition pour transformer des widgets
- **Déplacer**
  - Avec un ou plusieurs widgets sélectionnés, placez la souris sur l'un d'eux pour que le curseur devienne le curseur de déplacement. Vous pouvez alors cliquer-glisser : tous les widgets sélectionnés suivent la souris.
- **Faire pivoter**
  - Lorsque la souris est sur le widget et que le curseur de déplacement est affiché, maintenir la touche Alt enfoncée le change en curseur de rotation. Vous pouvez alors cliquer-glisser : tous les widgets sélectionnés pivotent de façon continue autour du dernier widget sélectionné.
  - Si vous maintenez Alt et Maj enfoncées, la rotation se fait par pas de 15 degrés
- La transformation de widgets ajoute une entrée à la pile d'annulation : vous pouvez donc annuler et rétablir les transformations.

### Redimensionner des widgets \{#resize-widgets}

- Vous devez être en mode édition pour redimensionner des widgets
- Lorsque vous placez le pointeur sur un bord ou un coin d'un widget, le curseur devient le curseur de redimensionnement de bord ou de coin. Vous pouvez alors cliquer-glisser pour redimensionner le widget.
- Le redimensionnement ne fonctionne que sur un seul widget
- Le redimensionnement de widgets ajoute une entrée à la pile d'annulation : vous pouvez donc annuler et rétablir le redimensionnement.

### Couper, copier et coller \{#cut-copy-and-paste}

- Vous devez être en mode édition pour couper, copier et coller des widgets
- Vous pouvez utiliser les raccourcis habituels Ctrl + X, Ctrl + C et Ctrl + V pour couper, copier et coller les widgets sélectionnés
- Pour un seul widget, vous pouvez faire un clic droit dessus pour ouvrir le menu contextuel, où se trouvent les éléments Couper et Copier
- Ctrl + V colle les widgets à la position de la souris
- Si vous faites un clic droit sur une zone vide du canevas, le menu contextuel propose deux options de collage
  - **Coller**
    - Colle les widgets à la position de la souris
  - **Coller sur place**
    - Colle les widgets à l'endroit même où ils ont été copiés ou coupés

### Menu contextuel des widgets \{#widget-popup-menu}

- Vous devez être en mode édition pour voir les menus contextuels des widgets
- Un clic droit sur un widget ouvre un menu contextuel
  - Les premiers éléments indiquent le nom et le type du widget, ainsi que les options couper et copier
  - Le dernier élément permet de supprimer le widget
  - Les autres éléments dépendent du type de widget cliqué

### Éditeur d'attributs \{#attribute-editor}

- Vous devez être en mode édition pour voir l'Éditeur d'attributs
- L'Éditeur d'attributs n'affiche des attributs que lorsqu'un seul widget est sélectionné. Si plusieurs widgets sont sélectionnés, rien ne s'affiche. (Ce comportement changera dans une version future)
- Les premiers éléments indiquent le nom et le type du widget, et permettent de le verrouiller pour qu'il ne puisse pas être sélectionné
  - Les autres éléments dépendent du type de widget sélectionné

### Outliner \{#outliner}

- Vous devez être en mode édition pour voir l'Outliner
- L'Outliner affiche tous les widgets de la Picker Page, regroupés par calque d'affichage, par type de widget ou par groupe (ce dernier est propre aux groupes de widgets bascule)
- Si un widget est sélectionné sur le canevas, son élément dans l'Outliner est aussi sélectionné, et inversement.
- Un double-clic sur un élément de l'Outliner permet de renommer le widget
- Dans la vue par calque d'affichage, des cases à cocher permettent de verrouiller ou déverrouiller les widgets. Les widgets verrouillés ne peuvent pas être sélectionnés en mode édition. C'est utile lorsque plusieurs widgets sont empilés les uns sur les autres.
- Si vous sélectionnez un widget dans l'Outliner, le raccourci « F » centre la vue sur ce widget. Pratique si vous avez du mal à trouver un widget précis
