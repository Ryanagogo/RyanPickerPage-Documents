import useBaseUrl from '@docusaurus/useBaseUrl';

# Barre d'outils \{#toolbar}

**En mode édition**, la barre d'outils se trouve dans l'en-tête de l'éditeur

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Ces outils vous permettent d'effectuer diverses actions sur un ou plusieurs widgets de picker sélectionnés.

### Fonctionnement : \{#the-way-it-works}

- Sélectionnez des widgets
- Cliquez sur un bouton de la barre d'outils pour ouvrir l'outil
- Modifiez la valeur du champ ou cliquez sur un bouton
- La modification de valeur ou le clic sur le bouton s'applique à tous les widgets sélectionnés

### Image \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**Cet outil s'applique aux widgets Étiquette et Image, qui peuvent tous deux avoir une image.**

- Sélectionnez des widgets Étiquette ou Image, puis cliquez sur la liste déroulante pour rechercher l'image voulue ou ajouter l'image sélectionnée dans le Content Browser. Tous les widgets sélectionnés utiliseront cette image

### Couleur \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**Cet outil s'applique à tous les widgets dotés d'une couleur d'arrière-plan. Il s'applique aussi aux widgets contenant du texte.**

- Sélectionnez des widgets, cliquez sur la couleur d'arrière-plan ou de police, puis choisissez la couleur voulue dans le sélecteur de couleur. Tous les widgets sélectionnés prendront ces couleurs

### Étiquette \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**Cet outil s'applique aux widgets contenant du texte.**

- Sélectionnez des widgets, puis modifiez le texte du champ Étiquette ou la valeur de taille de police. Le texte de tous les widgets sélectionnés sera mis à jour

### Taille \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**Cet outil s'applique à tous les widgets**

- Sélectionnez des widgets, puis modifiez les valeurs de largeur ou de hauteur. La largeur ou la hauteur de tous les widgets sélectionnés sera modifiée

### Décaler \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**Cet outil s'applique à tous les widgets sélectionnés**

- Sélectionnez des widgets, puis modifiez la valeur de décalage. Lorsque vous cliquez sur l'un des boutons fléchés, tous les widgets sélectionnés se déplacent de cette valeur.

### Aligner \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**Cet outil s'applique à tous les widgets sélectionnés**

- Sélectionnez des widgets, puis cliquez sur l'un des boutons d'alignement ou de répartition. Les bords de tous les widgets sélectionnés sont alignés, ou les widgets sont déplacés pour être répartis uniformément.
- Pour les fonctions d'alignement, le dernier widget sélectionné sert d'ancre : tous les autres widgets sélectionnés s'alignent sur lui.

### Miroir \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### Cet outil s'applique à tous les widgets sélectionnés \{#this-tool-affects-all-selected-widgets}

- Sélectionnez des widgets, puis cliquez sur l'un des boutons de retournement ou de miroir. Tous les widgets sélectionnés sont transformés vers leurs positions en miroir

#### Pour le retournement (Mirror Flip), vous pouvez définir le comportement. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Soi-même :** chaque widget sélectionné se retourne selon son propre axe
- **Dernière sélection (incl.) :** tous les widgets sélectionnés se retournent autour du dernier widget sélectionné. Celui-ci se retourne aussi selon son propre axe
- **Dernière sélection (excl.) :** tous les widgets sélectionnés se retournent autour du dernier widget sélectionné. Celui-ci n'est pas affecté et ne bouge pas.
- **Canevas visible :** tous les widgets sélectionnés se retournent selon l'axe du canevas visible

#### Pour que Refléter la pose fonctionne, il faut créer des Pose Maps de miroir. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Maps de miroir :** elles permettent de définir le widget ancre du miroir, ainsi que les widgets centraux et les paires de widgets gauche/droite.
- **Plusieurs maps sur une page :** vous pouvez avoir plus d'une map, par exemple une pour le corps et une pour le visage.
