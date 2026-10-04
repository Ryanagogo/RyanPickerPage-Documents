import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget Slider 2D \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Créer un nouveau widget Slider 2D \{#creating-a-new-2d-slider-widget}

Vous devez être en **mode édition** pour créer un nouveau **widget Slider 2D**

**Faites un clic droit sur une zone vide du canevas du picker** pour afficher le menu contextuel, puis cliquez sur l'élément « Slider 2D »

### Rôle \{#purpose}

- Le slider 2D vous permet de faire varier des valeurs comprises entre un minimum et un maximum. Il a 2 degrés de liberté, en X et en Y : le slider peut donc affecter deux axes de transformation différents

- Les valeurs appliquées à la transformation sont des valeurs locales.

- Les valeurs sont appliquées à toutes les cibles ajoutées au widget, qu'il s'agisse de contrôles Control Rig ou d'acteurs du niveau.

### Apparence \{#appearance}

Vous pouvez définir la couleur du widget Slider 2D

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Cibles \{#targets}

##### Ajouter des cibles \{#adding-targets}

Comme pour les cibles d'un bouton de sélection, vous pouvez sélectionner autant de contrôles Control Rig et d'acteurs du niveau que vous le souhaitez, puis faire un clic droit sur le widget Slider 2D pour afficher le menu contextuel et choisir l'élément « Définir avec la sélection ».

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Définir les valeurs du slider pour les directions X et Y \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valeur initiale** : les valeurs de départ du slider pour les directions X et Y. Leur position sur le slider change visuellement lorsque les valeurs minimale et maximale sont modifiées.
- **Valeur minimale** : les plus petites valeurs que le slider peut atteindre dans les directions X et Y
- **Valeur maximale** : les plus grandes valeurs que le slider peut atteindre dans les directions X et Y

##### Définir les axes de transformation utilisés par les deux canaux actifs \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Pour choisir un axe, cliquez simplement sur l'un des menus déroulants « Actif Canal » et sélectionnez l'un des neuf éléments de transformation.
- « Actif Canal X » et « Actif Canal Y » doivent utiliser des axes de transformation différents. Ils ne peuvent pas utiliser tous les deux le même axe
