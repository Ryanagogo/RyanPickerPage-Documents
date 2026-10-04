import useBaseUrl from '@docusaurus/useBaseUrl';

# Espelhamento \{#mirroring}

### Ferramenta Espelhar widgets \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Você precisa estar no modo de edição para encontrar esta ferramenta.**

Ela foi feita para ajudar a espelhar widgets no seu layout, o que facilita criar layouts para bípedes ou outros personagens que precisam de simetria esquerda/direita.

## A ferramenta é dividida em duas partes \{#the-tool-is-divided-into-two-parts}

### Inverter a seleção \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Modos de inversão \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Próprio**
  - Cada widget selecionado é invertido em relação ao próprio eixo
- **Última seleção (incl.)**
  - Todos os widgets selecionados são invertidos em torno do último widget selecionado, que também é invertido em relação ao próprio eixo
- **Última seleção (excl.)**
  - Este é o modo padrão
  - Todos os widgets selecionados são invertidos em torno do último widget selecionado, mas ele não é afetado e não se move
- **Tela visível**
  - Todos os widgets selecionados são invertidos em relação à área da tela visível no momento

##### Direções de inversão \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

O resultado específico da inversão depende do comportamento selecionado

- **Flip Horizontal**
  - Inverte os widgets selecionados ao longo do eixo X.
- **Flip Vertical**
  - Inverte os widgets selecionados ao longo do eixo Y

### Espelhar conjuntos de poses predefinidos \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Espelhar os widgets selecionados \{#mirror-selected-widgets}

- Todos os widgets selecionados que tiverem definição em um Pose Map serão espelhados de acordo com esse Pose Map
- Um widget só pode estar em um Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Espelhar pose da esquerda para a direita \{#mirror-pose-left-to-right}

- Esta operação funciona no Pose Map que estiver selecionado no momento no editor de Pose Maps
- Se os widgets errados forem espelhados, desfaça e troque o Pose Map atual

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Espelhar pose da direita para a esquerda \{#mirror-pose-right-to-left}

- Esta operação funciona no Pose Map que estiver selecionado no momento no editor de Pose Maps
- Se os widgets errados forem espelhados, desfaça e troque o Pose Map atual

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Definir Pose Maps \{#define-pose-maps}

Clique no botão "Map" para abrir o editor de Pose Maps

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### O editor de Pose Maps \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

Em uma única Picker Page, você pode definir mais de um Pose Map. Por exemplo, um mapa para os widgets do corpo e outro para os do rosto

##### Criar um novo Pose Map \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Nome do mapa \{#map-name}

Quando você cria um mapa novo, ele recebe um nome padrão, mas você pode renomeá-lo como quiser

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Widget âncora \{#anchor-widget}

Todos os widgets do Pose Map são espelhados e transformados em relação ao widget âncora

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Widgets centrais \{#center-widgets}

Todos os widgets centrais são alinhados ao centro em relação ao widget âncora

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Pares de widgets \{#widget-pairs}

Os widgets das colunas esquerda e direita dos pares se espelham entre si, em relação ao widget âncora

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Depois de configurar o mapa, este é o resultado de espelhar a pose da direita para a esquerda

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Redefinir um mapa \{#resetting-a-map}

Se quiser limpar o mapa, basta clicar no botão Redefinir Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Alternar entre mapas \{#switching-between-maps}

Quando tiver mais de um mapa, você pode clicar no menu suspenso e escolher qual mapa quer editar

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Nomes dos widgets \{#widget-names}

Os Pose Maps usam os nomes dos widgets, então é bom dar nomes que façam sentido aos widgets em vez de deixar os nomes padrão atribuídos na criação.

Para ver o nome atual de um widget, selecione-o e abra o Outliner (o "+" no canto superior esquerdo da tela)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

No início, você pode ver um nome padrão

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Clicar duas vezes no item do Outliner permite mudar o nome do widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Atribuir um widget a um item do Pose Map \{#setting-a-widget-on-a-pose-map-item}

**Há duas formas diferentes de fazer isso**

Use o menu suspenso e escolha o item na lista

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Use o botão "Set Selected" à direita do item do mapa. Ao clicar nele, o nome do widget selecionado será colocado no campo

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

Para pares de widgets, você precisa definir um item na coluna esquerda e outro na direita

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
