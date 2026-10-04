# Atalhos \{#hotkeys}

Todos os atalhos de teclado e gestos de mouse aos quais o editor do picker responde.

### Regras de foco e de modo \{#focus-and-mode-rules}

- **Os atalhos de teclado só funcionam enquanto a tela tem o foco.** A tela recebe o foco assim que você clica nela. Se um campo de uma barra lateral ou a lista do Outliner estiver com o foco, as teclas pressionadas vão para lá.
- Apenas o atalho **F** funciona no modo ao vivo. Todos os outros atalhos de teclado são exclusivos do modo de edição.
- O deslocamento arrastando com o botão direito e o zoom com a roda do mouse funcionam tanto no modo de edição quanto no modo ao vivo.

### Teclado \{#keyboard}

| Tecla | Ação | Modo |
|---|---|---|
| **Delete** | Excluir os widgets selecionados | Somente edição |
| **F** | Centralizar a visualização da tela na seleção atual (o zoom não muda) | Edição + ao vivo |
| **Alt + clique em um botão** | Centralizar o viewport nos objetos selecionados ao clicar em um botão |Somente ao vivo|
| **Alt + selecionar botões arrastando** | Centralizar o viewport nos objetos selecionados ao arrastar uma caixa sobre botões |Somente ao vivo|
| **Setas do teclado** | Deslocar a seleção (padrão de 2 px) | Somente edição |
| **Shift + setas do teclado** | Deslocar a seleção com um passo maior (padrão de 10 px) | Somente edição |
| **Ctrl + X** | Recortar os widgets selecionados | Somente edição |
| **Ctrl + C** | Copiar os widgets selecionados | Somente edição |
| **Ctrl + V** | Colar na posição do cursor do mouse | Somente edição |
| **Ctrl + Z** | Desfazer | Somente edição |
| **Ctrl + Shift + Z** ou **Ctrl + Y** | Refazer | Somente edição |

As duas distâncias de deslocamento pelo teclado são definidas no painel Class Defaults da página. Elas são independentes da ferramenta **Deslocar** da barra de ferramentas, que tem seu próprio campo de distância.

Copiar / recortar / colar funciona entre abas de páginas abertas.

**Não atribuídos:** não existe Ctrl+A (selecionar tudo), Ctrl+S (salvar), Ctrl+D (duplicar) nem Esc (desmarcar). Duplicar, Alinhar, Distribuir e Espelhar ficam apenas no menu do botão direito ou na barra de ferramentas.

### Mouse – selecionar widgets \{#mouse---selecting-widgets}

Apenas Ctrl e Shift mudam o funcionamento da seleção.

| Gesto | Ação |
|---|---|
| Clicar em um widget | Selecionar apenas esse widget |
| Ctrl + clicar em um widget | Adicionar esse widget à seleção ou removê-lo dela |
| Shift + clicar em um widget | Adicionar esse widget à seleção |
| Clicar em uma área vazia da tela | Limpar a seleção |
| Arrastar em uma área vazia da tela | Desenhar uma caixa de seleção |
| Ctrl ou Shift + arrastar uma caixa de seleção | Adicionar os widgets da caixa à seleção atual em vez de substituí-la |
| Clicar em uma linha do Outliner | Seleciona esse widget — funciona até em widgets bloqueados |
| Clicar duas vezes em uma linha do Outliner | Renomeá-lo |

### Mouse – mover, redimensionar, girar (modo de edição) \{#mouse---moving-resizing-rotating-edit-mode}

As oito alças de redimensionamento e a alça de mover só aparecem no modo de edição.

| Gesto | Ação |
|---|---|
| Arrastar a alça de mover | Mover os widgets selecionados |
| **Alt** + arrastar a alça de mover | Girar em vez de mover |
| **Alt + Shift** + arrastar a alça de mover | Girar encaixando em passos de 15 graus |
| Arrastar uma alça de borda ou de canto | Redimensionar (funciona corretamente em widgets girados) |

Segure Alt antes de pressionar a alça de mover para começar a girar. Mantenha Shift pressionado durante o arraste para encaixar.

### Mouse – navegar pela tela \{#mouse---navigating-the-canvas}

| Gesto | Ação | Modo |
|---|---|---|
| Roda do mouse | Aproximar em direção ao cursor | Edição + ao vivo |
| Arrastar com o botão direito | Deslocar a tela | Edição + ao vivo |
| Clique direito (sem arrastar) | Abrir o menu de contexto | Somente edição |
| Arrastar o divisor de uma barra lateral | Redimensionar o painel do Outliner ou do Editor de atributos | Somente edição |

### Marcadores \{#bookmarks}

| Gesto | Ação |
|---|---|
| Clicar em um marcador | Aplicar a visualização salva |
| **Ctrl + Shift + clique** em um marcador | Salvar a visualização atual nesse marcador (substituindo-o) |
| Clique direito em um marcador | Renomeá-lo ou limpá-lo |
