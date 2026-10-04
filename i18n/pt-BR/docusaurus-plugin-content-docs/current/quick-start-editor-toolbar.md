import useBaseUrl from '@docusaurus/useBaseUrl';

# Barra de ferramentas \{#toolbar}

**No modo de edição**, a barra de ferramentas fica no cabeçalho do editor

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Essas ferramentas permitem executar várias ações em um ou mais widgets de picker selecionados.

### Como funciona: \{#the-way-it-works}

- Selecione os widgets
- Clique em um botão da barra de ferramentas para abrir a ferramenta
- Altere o valor no campo ou clique em um botão
- A alteração do valor ou o clique no botão afeta todos os widgets selecionados

### Imagem \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta ferramenta afeta widgets de rótulo e de imagem, já que ambos podem ter uma imagem.**

- Selecione widgets de rótulo ou de imagem e clique no menu suspenso para procurar a imagem desejada ou adicionar a imagem selecionada no Content Browser. Todos os widgets selecionados vão usar essa imagem

### Cor \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta ferramenta afeta todos os widgets que têm cor de fundo. Também afeta widgets que têm texto.**

- Selecione os widgets, clique na cor de fundo ou da fonte e escolha a cor desejada no seletor de cores. Todos os widgets selecionados receberão essas cores

### Rótulo \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta ferramenta afeta widgets que têm texto.**

- Selecione os widgets e altere o texto no campo Rótulo ou o valor do tamanho da fonte. O texto de todos os widgets selecionados será atualizado

### Tamanho \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta ferramenta afeta todos os widgets**

- Selecione os widgets e altere os valores de largura ou altura. A largura ou a altura de todos os widgets selecionados será alterada

### Deslocar \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta ferramenta afeta todos os widgets selecionados**

- Selecione os widgets e altere o valor de deslocamento. Ao clicar em um dos botões de seta, todos os widgets selecionados serão movidos por esse valor.

### Alinhar \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**Esta ferramenta afeta todos os widgets selecionados**

- Selecione os widgets e clique em um dos botões de alinhar ou distribuir. As bordas de todos os widgets selecionados serão alinhadas, ou os widgets serão movidos para ficarem distribuídos de forma uniforme.
- Nos recursos de alinhamento, o último widget selecionado é a âncora, então todos os outros widgets selecionados vão se alinhar a ele.

### Espelhar \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### Esta ferramenta afeta todos os widgets selecionados \{#this-tool-affects-all-selected-widgets}

- Selecione os widgets e clique em um dos botões de inverter ou espelhar. Todos os widgets selecionados serão transformados para suas posições espelhadas

#### Para a inversão (Mirror Flip), você pode definir o comportamento. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Próprio:** cada widget selecionado é invertido em relação ao próprio eixo
- **Última seleção (incl.):** todos os widgets selecionados são invertidos em torno do último widget selecionado. O último selecionado também é invertido em relação ao próprio eixo
- **Última seleção (excl.):** todos os widgets selecionados são invertidos em torno do último widget selecionado. O último widget selecionado não é afetado e não se move.
- **Tela visível:** todos os widgets selecionados são invertidos no eixo da tela visível

#### Para o Espelhar pose funcionar, é preciso criar Pose Maps de espelhamento. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Maps de espelhamento:** permitem definir o widget âncora do espelhamento e configurar os widgets centrais e os pares de widgets esquerda/direita.
- **Vários mapas em uma página:** você pode ter mais de um mapa, por exemplo um para o corpo e outro para o rosto.
