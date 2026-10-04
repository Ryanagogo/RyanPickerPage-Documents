# Noções básicas de widgets \{#widget-basics}

### Criar widgets \{#create-widgets}

- Você precisa estar no modo de edição para criar novos widgets
- Clique com o botão direito em uma área vazia da tela para abrir o menu suspenso, que contém os itens para criar os vários tipos de widgets do picker
- Ao criar um novo widget, ele é posicionado onde o ponteiro do mouse estava quando você clicou com o botão direito.
- Ao criar widgets, uma entrada é adicionada à pilha de desfazer, então você pode desfazer e refazer a criação

### Excluir widgets \{#delete-widgets}

- Você precisa estar no modo de edição para excluir widgets
- Você pode excluir todos os widgets selecionados pressionando a tecla "Delete"
- Para excluir um único widget, clique nele com o botão direito para abrir o menu suspenso do widget. No final do menu, você encontra o item para excluir esse widget.
- Ao excluir widgets, uma entrada é adicionada à pilha de desfazer, então você pode desfazer e refazer as exclusões.

### Selecionar widgets \{#select-widgets}

- Você pode selecionar widgets tanto no modo ao vivo quanto no modo de edição
- Você pode selecionar widgets clicando neles ou desenhando um retângulo ao redor deles
- No modo ao vivo, alguns widgets não podem ser selecionados:
  - Widgets de rótulo
  - Widgets de imagem
- No modo de edição, todos os widgets podem ser selecionados
  - No Outliner, você pode bloquear widgets para que não possam ser selecionados. Isso é útil quando há vários widgets empilhados uns sobre os outros.
- A ordem em que os widgets são selecionados é memorizada. Alguns recursos do modo de edição usam essa ordem de seleção

### Transformar widgets \{#transform-widgets}

- Você precisa estar no modo de edição para transformar widgets
- **Mover**
  - Com um ou mais widgets selecionados, posicione o mouse sobre um deles para que o cursor mude para o cursor de mover. Depois, clique e arraste: todos os widgets selecionados se movem com o mouse.
- **Girar**
  - Com o mouse sobre o widget e o cursor de mover visível, segurar a tecla Alt muda o cursor para o de rotação. Depois, clique e arraste: todos os widgets selecionados giram suavemente em torno do último widget selecionado.
  - Se você segurar Alt e Shift ao mesmo tempo, a rotação acontece em passos de 15 graus
- Ao transformar widgets, uma entrada é adicionada à pilha de desfazer, então você pode desfazer e refazer as transformações.

### Redimensionar widgets \{#resize-widgets}

- Você precisa estar no modo de edição para redimensionar widgets
- Ao passar o ponteiro do mouse sobre uma das bordas ou cantos de um widget, o cursor muda para o cursor de redimensionar borda ou canto. Depois, clique e arraste para redimensionar o widget.
- O redimensionamento só funciona em um widget
- Ao redimensionar widgets, uma entrada é adicionada à pilha de desfazer, então você pode desfazer e refazer o redimensionamento.

### Recortar, copiar e colar \{#cut-copy-and-paste}

- Você precisa estar no modo de edição para recortar, copiar e colar widgets
- Você pode usar os atalhos padrão Ctrl + X, Ctrl + C e Ctrl + V para recortar, copiar e colar os widgets selecionados
- Para um único widget, clique nele com o botão direito para abrir o menu suspenso, onde você encontra os itens Recortar e Copiar
- Ctrl + V cola os widgets na posição do mouse
- Se você clicar com o botão direito em uma área vazia da tela, o menu suspenso oferece duas opções de colagem
  - **Colar**
    - Cola os widgets na posição do mouse
  - **Colar no lugar**
    - Cola os widgets no mesmo lugar onde foram copiados ou recortados

### Menu suspenso dos widgets \{#widget-popup-menu}

- Você precisa estar no modo de edição para ver os menus suspensos dos widgets
- Ao clicar com o botão direito em um widget, um menu suspenso é aberto
  - Os primeiros itens mostram o nome e o tipo do widget, junto com as opções de recortar e copiar
  - O último item serve para excluir o widget
  - Os demais itens dependem do tipo de widget clicado

### Editor de atributos \{#attribute-editor}

- Você precisa estar no modo de edição para ver o Editor de atributos
- O Editor de atributos só mostra atributos quando um único widget está selecionado. Se vários estiverem selecionados, nada é exibido. (Esse comportamento vai mudar em uma versão futura)
- Os primeiros itens informam o nome e o tipo do widget e permitem bloqueá-lo para que não possa ser selecionado
  - Os demais itens dependem do tipo de widget selecionado

### Outliner \{#outliner}

- Você precisa estar no modo de edição para ver o Outliner
- O Outliner mostra todos os widgets da Picker Page, agrupados por camada de exibição, por tipo de widget ou por grupo (este último é específico dos grupos de widgets de alternância)
- Se um widget estiver selecionado na tela, o item dele no Outliner também fica selecionado, e vice-versa.
- Clicando duas vezes em um item do Outliner, você pode renomear o widget
- Na visualização por camada de exibição, há caixas de seleção para bloquear ou desbloquear widgets. Widgets bloqueados não podem ser selecionados no modo de edição. Isso é útil quando há vários widgets empilhados uns sobre os outros.
- Se você selecionar um widget no Outliner, pode usar o atalho "F" para focar a visualização no widget. Isso ajuda quando é difícil encontrar um widget específico
