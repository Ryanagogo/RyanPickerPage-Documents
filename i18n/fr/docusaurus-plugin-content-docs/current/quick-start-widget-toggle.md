import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget Bascule \{#toggle-widget}

### Créer un nouveau widget Bascule \{#creating-a-new-toggle-widget}

Vous devez être en **mode édition** pour créer un nouveau **widget Bascule**

**Faites un clic droit sur une zone vide du canevas du picker** pour afficher le menu contextuel, puis cliquez sur l'élément « Bascule »

### États de la bascule \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Au départ, les deux états portent les étiquettes État A et État B, et représentent les valeurs 0 et 1.

Cliquer sur le widget Bascule fait passer de l'un à l'autre de ces deux états

Chaque état peut avoir sa propre étiquette, sa couleur, sa liste de widgets à afficher et son script Python.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Basculer la visibilité des widgets

Si vous voulez masquer ou afficher certains widgets selon un état, commencez par passer en mode édition,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Sélectionnez ensuite les widgets qui doivent s'afficher lors du passage à l'État A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Faites ensuite un clic droit sur le widget Bascule pour afficher le menu contextuel, et choisissez « État A -> Définir avec les Widgets sélectionnés ». Les widgets sélectionnés sont alors placés dans la liste de cibles de l'État A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Sélectionnez ensuite les widgets à afficher dans l'État B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Faites ensuite un clic droit sur le widget Bascule pour afficher le menu contextuel, et cliquez sur l'élément « État B -> Définir avec les Widgets sélectionnés ». Les widgets sélectionnés sont alors placés dans la liste de cibles de l'État B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Pour voir comment fonctionne la bascule, revenez en mode Live.

- Dans l'État A, les widgets de l'État A sont affichés et ceux de l'État B sont masqués.
- Dans l'État B, les widgets de l'État A sont masqués et ceux de l'État B sont affichés.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Basculer les états du Control Rig

Si votre Control Rig possède un canal d'animation booléen, vous pouvez utiliser le widget Bascule pour piloter ce canal. C'est courant dans les configurations IK/FK.

Vous pouvez le constater si vous avez le Control Rig du Mannequin dans un plan. Sélectionnez simplement le contrôle Main, l'hexagone situé au bas du personnage.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Regardez ensuite dans Sequencer ou dans le panneau Anim Details pour voir les booléens de commutation IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Pour connecter le widget Bascule, assurez-vous d'être en mode édition

Sélectionnez le contrôle Main, puis faites un clic droit sur le widget Bascule pour afficher le menu contextuel, et choisissez « Set Parent Control »

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Ensuite, le widget Bascule étant sélectionné, ouvrez l'Éditeur d'attributs, repérez la section Canal d'animation et vérifiez que « Utiliser un booléen » est coché.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Cliquez ensuite dans « Canal » et sélectionnez le canal d'animation à utiliser

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Si nécessaire, vous pouvez aussi choisir quel état doit être l'« État vrai »

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

De retour en mode Live, vous pouvez cliquer sur le widget Bascule pour changer à la fois l'état du rig et les états de visibilité des widgets (dans cet exemple, les états IK/FK du rig de la jambe gauche).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
