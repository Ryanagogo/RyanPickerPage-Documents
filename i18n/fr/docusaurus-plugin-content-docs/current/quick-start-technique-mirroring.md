import useBaseUrl from '@docusaurus/useBaseUrl';

# Miroir \{#mirroring}

### Outil Miroir de widgets \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Cet outil n'est accessible qu'en mode édition.**

Il est conçu pour vous aider à refléter des widgets dans votre disposition, et donc à créer des dispositions pour des bipèdes ou d'autres personnages nécessitant une symétrie gauche/droite.

## L'outil se divise en deux parties \{#the-tool-is-divided-into-two-parts}

### Retourner la sélection \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Modes de retournement \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Soi-même**
  - Chaque widget sélectionné se retourne selon son propre axe
- **Dernière sélection (incl.)**
  - Tous les widgets sélectionnés se retournent autour du dernier widget sélectionné, celui-ci se retournant selon son propre axe
- **Dernière sélection (excl.)**
  - C'est le mode par défaut
  - Tous les widgets sélectionnés se retournent autour du dernier widget sélectionné, mais celui-ci n'est pas affecté et ne bouge pas
- **Canevas visible**
  - Tous les widgets sélectionnés se retournent selon la zone du canevas actuellement visible

##### Directions de retournement \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

Le résultat précis du retournement dépend du comportement choisi

- **Flip Horizontal**
  - Retourne les widgets sélectionnés selon l'axe X.
- **Flip Vertical**
  - Retourne les widgets sélectionnés selon l'axe Y

### Refléter des ensembles de poses prédéfinis \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Refléter les widgets sélectionnés \{#mirror-selected-widgets}

- Tous les widgets sélectionnés définis dans une Pose Map sont reflétés selon leur Pose Map
- Un widget ne peut figurer que dans une seule Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Refléter la pose de gauche à droite \{#mirror-pose-left-to-right}

- Cette opération s'applique à la Pose Map actuellement sélectionnée dans l'éditeur de Pose Maps
- Si les mauvais widgets sont reflétés, annulez puis changez de Pose Map actuelle

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Refléter la pose de droite à gauche \{#mirror-pose-right-to-left}

- Cette opération s'applique à la Pose Map actuellement sélectionnée dans l'éditeur de Pose Maps
- Si les mauvais widgets sont reflétés, annulez puis changez de Pose Map actuelle

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Définir des Pose Maps \{#define-pose-maps}

Cliquez sur le bouton « Map » pour ouvrir l'éditeur de Pose Maps

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### L'éditeur de Pose Maps \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

Sur une même Picker Page, vous pouvez définir plusieurs Pose Maps. Par exemple, une map pour les widgets du corps et une pour ceux du visage

##### Créer une nouvelle Pose Map \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Nom de la map \{#map-name}

Une map nouvellement créée porte un nom par défaut, que vous pouvez remplacer par celui de votre choix

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Widget ancre \{#anchor-widget}

Tous les widgets de la Pose Map sont reflétés et transformés par rapport au widget ancre

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Widgets centraux \{#center-widgets}

Tous les widgets centraux sont centrés par rapport au widget ancre

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Paires de widgets \{#widget-pairs}

Les widgets des colonnes de paires gauche et droite se reflètent mutuellement, par rapport au widget ancre

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Une fois la map configurée, voici le résultat d'un reflet de la pose de droite à gauche

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Réinitialiser une map \{#resetting-a-map}

Pour vider la map, cliquez simplement sur le bouton Réinitialiser la Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Passer d'une map à l'autre \{#switching-between-maps}

Dès que vous avez plusieurs maps, vous pouvez cliquer sur la liste déroulante et choisir la map à modifier

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Noms des widgets \{#widget-names}

Les Pose Maps utilisent les noms des widgets : donnez donc à vos widgets des noms explicites plutôt que de conserver les noms par défaut attribués à leur création.

Pour voir le nom actuel d'un widget, sélectionnez-le et ouvrez l'Outliner (le « + » dans le coin supérieur gauche du canevas)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

Au départ, vous verrez peut-être un nom par défaut

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Un double-clic sur l'élément de l'Outliner vous permet de modifier le nom du widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Associer un widget à un élément de la Pose Map \{#setting-a-widget-on-a-pose-map-item}

**Deux méthodes sont possibles**

Utilisez la liste déroulante et choisissez l'élément dans la liste

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Utilisez le bouton « Set Selected » à droite de l'élément de la map. Quand vous cliquez dessus, le nom du widget sélectionné est inscrit dans le champ

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

Pour les paires de widgets, vous devez définir un élément dans la colonne de gauche et un dans celle de droite

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
