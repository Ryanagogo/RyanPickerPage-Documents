import useBaseUrl from '@docusaurus/useBaseUrl';

# Widget de slider 1D \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Criar um novo widget de slider 1D \{#creating-a-new-1d-slider-widget}

Você precisa estar no **modo de edição** para criar um novo **widget de slider 1D**

**Clique com o botão direito em uma área vazia da tela do picker** para abrir o menu suspenso e, em seguida, clique no item "Slider 1D"

### Finalidade \{#purpose}

- O slider 1D permite deslizar um valor entre um mínimo e um máximo. Ele tem apenas 1 grau de liberdade, então o slider afeta somente um eixo de transformação

- O valor aplicado à transformação é um valor local.

- Esse valor será aplicado a todos os destinos adicionados ao widget, sejam eles controles do Control Rig ou atores do nível.

### Aparência \{#appearance}

Você pode definir a cor do widget de slider 1D

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Destinos \{#targets}

##### Adicionar destinos \{#adding-targets}

Assim como nos destinos de um botão de seleção, você pode selecionar qualquer quantidade de controles do Control Rig e atores do nível, clicar com o botão direito no widget de slider 1D para abrir o menu suspenso e escolher o item "Definir com selecionados".

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Definir os valores do slider \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Valor Inicial**: é o valor de partida do slider. Sua posição no slider muda visualmente conforme os valores mínimo e máximo são alterados.
- **Valor Mínimo**: o menor valor que o slider vai alcançar
- **Valor Máximo**: o maior valor que o slider vai alcançar

##### Definir a direção do slider \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Horizontal**: o slider se move de um lado para o outro
- **Vertical**: o slider se move para cima e para baixo

##### Definir qual eixo de transformação será afetado \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Para escolher o eixo, basta clicar no menu suspenso "Ativo Canal" e selecionar um dos nove itens de transformação.
