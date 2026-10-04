import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget de alternador \{#toggle-widget}

### Criar um novo widget de alternador \{#creating-a-new-toggle-widget}

Você precisa estar no **modo de edição** para criar um novo **widget de alternador**

**Clique com o botão direito em uma área vazia da tela do picker** para abrir o menu suspenso e, em seguida, clique no item "Alternador"

### Estados do alternador \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Inicialmente, os dois estados têm os rótulos Estado A e Estado B e representam os valores 0 e 1.

Clicar no widget de alternador troca entre esses dois estados

Cada estado pode ter seu próprio rótulo, cor, lista de widgets a exibir e script Python.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Alternar a visibilidade de widgets

Se você tem widgets que quer ocultar ou exibir conforme um estado, comece entrando no modo de edição,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Depois, selecione os widgets que devem aparecer ao mudar para o Estado A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Em seguida, clique com o botão direito no widget de alternador para abrir o menu suspenso e escolha "Estado A -> Definir com Widgets selecionados". Isso colocará os widgets selecionados na lista de destinos do Estado A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Depois, selecione os widgets que você quer exibir no Estado B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Em seguida, clique com o botão direito no widget de alternador para abrir o menu suspenso e clique no item "Estado B -> Definir com Widgets selecionados". Isso colocará os widgets selecionados na lista de destinos do Estado B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Se quiser ver como o alternador funciona, volte para o modo ao vivo.

- No Estado A, os widgets do Estado A são exibidos e os do Estado B ficam ocultos.
- No Estado B, os widgets do Estado A ficam ocultos e os do Estado B são exibidos.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Alternar estados do Control Rig

Se o seu Control Rig tiver um canal de animação booleano, você pode usar o widget de alternador para controlar esse canal. Isso é comum em configurações IK/FK.

Você pode ver isso se tiver o Control Rig do Mannequin em uma tomada. Basta selecionar o controle Main, o hexágono na base do personagem.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Depois, olhe no Sequencer ou no painel Anim Details para ver os booleanos de troca IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Para conectar ao widget de alternador, verifique se você está no modo de edição

Selecione o controle Main, clique com o botão direito no widget de alternador para abrir o menu suspenso e escolha "Set Parent Control"

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Depois, com o widget de alternador selecionado, abra o Editor de atributos, procure a seção Canal de animação e verifique se "Usar booleano" está marcado.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Em seguida, clique em "Canal" e selecione o canal de animação que você quer usar

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Se necessário, você também pode definir qual estado será o "Estado verdadeiro"

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Ao voltar para o modo ao vivo, você pode clicar no widget de alternador para mudar ao mesmo tempo o estado do rig e os estados de visibilidade dos widgets (neste exemplo, os estados IK/FK do rig da perna esquerda).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
