import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget Slider 1D \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Créer un nouveau widget Slider 1D \{#creating-a-new-1d-slider-widget}

Vous devez être en **mode édition** pour créer un nouveau **widget Slider 1D**

**Faites un clic droit sur une zone vide du canevas du picker** pour afficher le menu contextuel, puis cliquez sur l'élément « Slider 1D »

### Rôle \{#purpose}

- Le slider 1D vous permet de faire varier une valeur comprise entre un minimum et un maximum. Il n'a qu'un seul degré de liberté : le slider n'affecte donc qu'un seul axe de transformation

- La valeur appliquée à la transformation est une valeur locale.

- Cette valeur est appliquée à toutes les cibles ajoutées au widget, qu'il s'agisse de contrôles Control Rig ou d'acteurs du niveau.

### Apparence \{#appearance}

Vous pouvez définir la couleur du widget Slider 1D

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Cibles \{#targets}

##### Ajouter des cibles \{#adding-targets}

Comme pour les cibles d'un bouton de sélection, vous pouvez sélectionner autant de contrôles Control Rig et d'acteurs du niveau que vous le souhaitez, puis faire un clic droit sur le widget Slider 1D pour afficher le menu contextuel et choisir l'élément « Définir avec la sélection ».

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Définir les valeurs du slider \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valeur initiale** : la valeur de départ du slider. Sa position sur le slider change visuellement lorsque les valeurs minimale et maximale sont modifiées.
- **Valeur minimale** : la plus petite valeur que le slider peut atteindre
- **Valeur maximale** : la plus grande valeur que le slider peut atteindre

##### Définir la direction du slider \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Horizontale** : le slider se déplace latéralement
- **Verticale** : le slider se déplace de haut en bas

##### Définir l'axe de transformation affecté \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Pour choisir l'axe, cliquez simplement sur le menu déroulant « Actif Canal » et sélectionnez l'un des neuf éléments de transformation.
