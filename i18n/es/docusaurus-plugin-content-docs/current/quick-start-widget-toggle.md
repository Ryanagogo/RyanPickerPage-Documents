import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget de interruptor \{#toggle-widget}

### Crear un widget de interruptor nuevo \{#creating-a-new-toggle-widget}

Debes estar en el **modo de edición** para crear un **widget de interruptor** nuevo

**Haz clic derecho en una zona vacía del lienzo del picker** para abrir el menú emergente y, a continuación, haz clic en la opción "Interruptor"

### Estados del interruptor \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Al principio, los dos estados tienen las etiquetas Estado A y Estado B, y representan los valores 0 y 1.

Al hacer clic en el widget de interruptor se alterna entre estos dos estados

Cada estado puede tener su propia etiqueta, su color, su lista de widgets que mostrar y su script de Python.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Alternar la visibilidad de widgets

Si tienes widgets que quieres ocultar o mostrar según un estado, empieza entrando en el modo de edición,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Luego, selecciona los widgets que quieres que se muestren al cambiar al Estado A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Después, haz clic derecho en el widget de interruptor para abrir el menú emergente y elige "Estado A -> Establecer con Widgets seleccionados". Así los widgets seleccionados pasarán a la lista de destinos del Estado A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

A continuación, selecciona los widgets que quieres mostrar en el Estado B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Después, haz clic derecho en el widget de interruptor para abrir el menú emergente y haz clic en la opción "Estado B -> Establecer con Widgets seleccionados". Así los widgets seleccionados pasarán a la lista de destinos del Estado B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Si quieres ver cómo funciona el interruptor, vuelve al modo en vivo.

- En el Estado A, se muestran los widgets del Estado A y se ocultan los del Estado B.
- En el Estado B, se ocultan los widgets del Estado A y se muestran los del Estado B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Alternar estados del Control Rig

Si tu Control Rig tiene un canal de animación booleano, puedes usar el widget de interruptor para controlarlo. Es habitual en configuraciones IK/FK.

Puedes verlo si tienes el Control Rig del Mannequin en un plano. Solo tienes que seleccionar el control Main, el hexágono que hay en la base del personaje.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Luego, mira en Sequencer o en el panel Anim Details para ver los booleanos del cambio IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Para conectarlo al widget de interruptor, asegúrate de estar en el modo de edición

Selecciona el control Main, haz clic derecho en el widget de interruptor para abrir el menú emergente y elige "Set Parent Control"

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Luego, con el widget de interruptor seleccionado, abre el editor de atributos, busca la sección Canal de animación y asegúrate de que "Usar booleano" esté activado.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Después, haz clic en "Canal" y selecciona el canal de animación que quieres usar

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Si es necesario, también puedes indicar qué estado quieres como "Estado verdadero"

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Cuando vuelvas al modo en vivo, podrás hacer clic en el widget de interruptor para cambiar a la vez el estado del rig y los estados de visibilidad de los widgets (en este ejemplo, los estados IK/FK del rig de la pierna izquierda).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
