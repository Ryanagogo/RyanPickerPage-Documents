import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget de slider 2D \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Criar um novo widget de slider 2D \{#creating-a-new-2d-slider-widget}

Você precisa estar no **modo de edição** para criar um novo **widget de slider 2D**

**Clique com o botão direito em uma área vazia da tela do picker** para abrir o menu suspenso e, em seguida, clique no item "Slider 2D"

### Finalidade \{#purpose}

- O slider 2D permite deslizar valores entre um mínimo e um máximo. Ele tem 2 graus de liberdade, em X e Y, então o slider pode afetar dois eixos de transformação diferentes

- Os valores aplicados à transformação são valores locais.

- Os valores serão aplicados a todos os destinos adicionados ao widget, sejam eles controles do Control Rig ou atores do nível.

### Aparência \{#appearance}

Você pode definir a cor do widget de slider 2D

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Destinos \{#targets}

##### Adicionar destinos \{#adding-targets}

Assim como nos destinos de um botão de seleção, você pode selecionar qualquer quantidade de controles do Control Rig e atores do nível, clicar com o botão direito no widget de slider 2D para abrir o menu suspenso e escolher o item "Definir com selecionados".

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Definir os valores do slider para as direções X e Y \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valor Inicial**: são os valores de partida do slider para as direções X e Y. A posição no slider muda visualmente conforme os valores mínimo e máximo são alterados.
- **Valor Mínimo**: os menores valores que o slider vai alcançar nas direções X e Y
- **Valor Máximo**: os maiores valores que o slider vai alcançar nas direções X e Y

##### Definir quais eixos de transformação os dois canais ativos vão usar \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Para escolher um eixo, basta clicar em um dos menus suspensos "Ativo Canal" e selecionar um dos nove itens de transformação.
- "Ativo Canal X" e "Ativo Canal Y" precisam usar eixos de transformação diferentes. Os dois não podem usar o mesmo eixo
