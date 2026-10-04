import useBaseUrl from '@docusaurus/useBaseUrl';

# Bouton de sélection \{#selection-button}

### Créer un nouveau bouton de sélection \{#creating-a-new-selection-button}

Vous devez être en **mode édition** pour créer un nouveau **bouton de sélection**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Faites un clic droit sur une zone vide du canevas du picker** pour afficher le menu contextuel, puis cliquez sur l'élément « Bouton de sélection »

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Cibles du bouton de sélection \{#selection-button-targets}

##### Définir les cibles de la liste de sélection \{#setting-targets-in-the-selection-list}

Il existe deux façons de base de définir et d'ajouter des cibles à la liste de sélection

- **Avant de créer le bouton de sélection** : sélectionnez les contrôles ou acteurs que le bouton doit sélectionner, puis créez un nouveau bouton de sélection
- **Après avoir créé le bouton de sélection** : sélectionnez les contrôles ou acteurs, faites un clic droit sur le bouton pour afficher le menu contextuel, puis choisissez l'une des actions de cible

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **« Définir avec la sélection »** remplace toutes les cibles de la liste par celles actuellement sélectionnées
- **« Ajouter la sélection »** ajoute les cibles actuellement sélectionnées à la liste des cibles

##### Retirer des cibles précises de la liste de sélection \{#removing-specific-targets-from-the-selection-list}

- Pour retirer des cibles précises, sélectionnez les contrôles ou acteurs à retirer, faites un clic droit sur le bouton de sélection pour afficher le menu contextuel, puis cliquez sur l'élément « Supprimer la sélection ».

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Vider la liste de sélection \{#clearing-the-selection-list}

- Pour retirer toutes les cibles de la liste de sélection, faites un clic droit sur le bouton de sélection pour afficher le menu contextuel, puis cliquez sur l'élément « Effacer ».

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Voir les cibles actuelles de la liste de sélection \{#seeing-the-current-targets-in-the-selection-list}

Il existe trois façons de base de voir quelles cibles figurent dans les listes.

-  **Survolez le bouton de sélection avec la souris** pour afficher l'info-bulle. Elle indique toutes les cibles.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Faites un clic droit sur le bouton de sélection** pour afficher le menu contextuel, puis cliquez sur l'élément « Lister l'actuel ». La liste des cibles est affichée dans l'Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Sélectionnez le bouton de sélection**, puis ouvrez l'Éditeur d'attributs et consultez les listes des catégories Control Rig et Cibles

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Sélectionner les cibles de la liste de sélection \{#selecting-the-targets-in-the-selection-list}

Il existe deux façons de base de sélectionner les cibles

- **En mode Live**, il suffit de cliquer sur le bouton pour sélectionner toutes les cibles
- **En mode édition**, faites un clic droit sur le bouton pour afficher le menu contextuel, puis choisissez l'élément « Sélectionner l'actuel ».

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Sélectionner d'autres widgets \{#selecting-other-widgets}

Il arrive que vous souhaitiez pouvoir sélectionner d'autres widgets, par exemple si vous avez créé des boutons de picker pour toutes les articulations des doigts et que vous voulez un bouton qui sélectionne une colonne ou une rangée de jointures.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

D'abord, assurez-vous d'être en mode édition, puis sélectionnez tous les widgets cibles

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Ensuite, faites un clic droit sur le bouton de sélection pour afficher le menu contextuel et choisissez « Autres widgets -> »

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Une fois revenu en mode Live, cliquer sur le bouton de sélection sélectionne les widgets cibles ainsi que toutes les cibles de ces widgets.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### Depuis l'Éditeur d'attributs \{#from-the-attribute-editor}

Pour voir les valeurs dans l'Éditeur d'attributs, vous devez sélectionner un seul widget

##### Script Python \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

Vous pouvez coller n'importe quel script Python dans le champ Source du script. Si le script est long, le champ s'agrandit.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Ce champ n'est pas idéal pour modifier des scripts, et il vaut mieux ne pas y placer de scripts trop longs. Si votre script est long et que vous voulez utiliser un véritable éditeur de scripts, vous pouvez simplement importer votre script et l'exécuter.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Apparence du bouton de sélection \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Utiliser l'étiquette**
  - Affiche ou masque l'étiquette
- **Couleur**
  - Définit la couleur du bouton
- **Police**
  - Définit la couleur et la taille de la police

##### Texte du bouton de sélection \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Étiquette**

  - Définit le texte de l'étiquette

- **Styles de texte**

  - Pour les textes plus longs, vous pouvez utiliser les options suivantes pour mettre en forme le texte

    - Justification

    - Word Wrap

    - Margin

    - Clip
