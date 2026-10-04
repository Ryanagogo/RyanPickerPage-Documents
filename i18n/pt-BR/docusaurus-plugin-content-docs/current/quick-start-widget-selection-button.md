import useBaseUrl from '@docusaurus/useBaseUrl';

# Botão de seleção \{#selection-button}

### Criar um novo botão de seleção \{#creating-a-new-selection-button}

Você precisa estar no **modo de edição** para criar um novo **botão de seleção**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Clique com o botão direito em uma área vazia da tela do picker** para abrir o menu suspenso e, em seguida, clique no item "Botão de seleção"

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Destinos do botão de seleção \{#selection-button-targets}

##### Definir destinos na lista de seleção \{#setting-targets-in-the-selection-list}

Há duas formas básicas de definir e adicionar destinos à lista de seleção

- **Antes de criar o botão de seleção**: selecione os controles ou atores que o botão deve selecionar e depois crie um novo botão de seleção
- **Depois de criar o botão de seleção**: selecione os controles ou atores, clique com o botão direito no botão para abrir o menu suspenso e escolha uma das ações de destino

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"Definir com selecionados"** substitui todos os destinos da lista pelos que estão selecionados no momento
- **"Adicionar selecionados"** adiciona os destinos selecionados no momento à lista de destinos

##### Remover destinos específicos da lista de seleção \{#removing-specific-targets-from-the-selection-list}

- Para remover destinos específicos, selecione os controles ou atores que deseja remover, clique com o botão direito no botão de seleção para abrir o menu suspenso e clique no item "Remover selecionados".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Limpar a lista de seleção \{#clearing-the-selection-list}

- Para remover todos os destinos da lista de seleção, clique com o botão direito no botão de seleção para abrir o menu suspenso e clique no item "Limpar".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Ver os destinos atuais da lista de seleção \{#seeing-the-current-targets-in-the-selection-list}

Há três formas básicas de ver quais destinos estão nas listas.

-  **Passe o mouse sobre o botão de seleção** para exibir a dica. Ela mostra todos os destinos.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Clique com o botão direito no botão de seleção** para abrir o menu suspenso e clique no item "Listar atual". Uma lista dos destinos será exibida no Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Selecione o botão de seleção**, abra o Editor de atributos e veja as listas nas categorias Control Rig e Destinos

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Selecionar os destinos da lista de seleção \{#selecting-the-targets-in-the-selection-list}

Há duas formas básicas de selecionar os destinos

- **No modo ao vivo**, basta clicar no botão para selecionar todos os destinos
- **No modo de edição**, clique com o botão direito no botão para abrir o menu suspenso e escolha o item "Selecionar atual".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Selecionar outros widgets \{#selecting-other-widgets}

Há casos em que você quer poder selecionar outros widgets, por exemplo, se criou botões de picker para todas as articulações dos dedos e quer um botão que selecione uma coluna ou uma fileira de juntas.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Primeiro, verifique se você está no modo de edição e selecione todos os widgets de destino

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Depois, clique com o botão direito no botão de seleção para abrir o menu suspenso e escolha "Outros widgets -> "

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Quando voltar ao modo ao vivo, clicar no botão de seleção vai selecionar os widgets de destino e todos os destinos desses widgets.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### No Editor de atributos \{#from-the-attribute-editor}

Para ver os valores no Editor de atributos, você precisa selecionar um único widget

##### Script Python \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

Você pode colar qualquer script Python no campo Código do Script. Se o script for longo, o campo se expande.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Esse campo não é muito bom para editar scripts, e não é recomendável colocar scripts longos demais nele. Se o seu script for longo e você quiser usar um editor de scripts de verdade, basta importar o script e executá-lo.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Aparência do botão de seleção \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Usar Rótulo**
  - Mostra ou oculta o rótulo
- **Cor**
  - Define a cor do botão
- **Fonte**
  - Define a cor e o tamanho da fonte

##### Texto do botão de seleção \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Rótulo**

  - Define o texto do rótulo

- **Estilos de texto**

  - Para textos mais longos, você pode usar as opções a seguir para formatar o texto

    - Justification

    - Word Wrap

    - Margin

    - Clip
