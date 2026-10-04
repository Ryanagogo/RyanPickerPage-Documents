---
sidebar_position: 2
---

# Primeiros passos \{#getting-started}

## Abrir uma página \{#opening-a-page}

**Tools → Ryan Picker Page** abre uma página em uma nova aba do editor. O botão **New Tab** no
cabeçalho da página abre outras — cada aba é totalmente independente, com seu próprio arquivo, sua própria seleção de Control Rig
e sua própria visualização da tela. Renomear uma página (o título pode ser editado no modo de edição) renomeia
a aba correspondente, de modo que uma fileira de pickers abertos continua fácil de navegar.

## Dois modos \{#two-modes}

O botão do modo de edição no cabeçalho alterna a página inteira entre:

**Modo ao vivo** — o modo de animação. Clicar nos widgets seleciona controles do rig e atores; arrastar
sliders controla transformações; passar o mouse sobre um widget mostra uma dica com aquilo a que ele está conectado. O layout
em si não pode ser alterado.

**É no modo ao vivo que uma página pronta passa a vida.** Tudo em
[Ferramentas de edição e da tela](./editing-tools) existe para trazer você até aqui.

**Modo de edição** — o modo de construção. Os widgets ganham alças de mover, redimensionar e girar, clicar com o botão direito
em uma área vazia da tela abre o menu **Add Widget** e duas barras laterais recolhíveis aparecem: o
[Outliner](./attribute-editor-and-outliner) à esquerda e o
[Editor de atributos](./attribute-editor-and-outliner) à direita.

## Crie sua primeira página \{#build-your-first-page}

Um picker mínimo para uma perna, do começo ao fim:

1. Abra uma Level Sequence que contenha seu personagem e o Control Rig dele e, em seguida, abra uma página de picker.
   O menu suspenso de rigs do cabeçalho é preenchido a partir da sequência em foco — escolha seu rig (ele é
   selecionado automaticamente se houver apenas um).
2. Entre no **modo de edição**.
3. No viewport ou no Anim Outliner, selecione o controle da coxa. Clique com o botão direito na tela →
   **Add Widget → Botão de seleção**. Por padrão, um novo botão preenche sua lista de destinos a partir da
   seleção atual, então este botão já controla a coxa.
4. Repita para a panturrilha e o pé. Use o campo de rótulo do
   [Editor de atributos](./attribute-editor-and-outliner) para nomear cada botão e arraste-os para formar uma
   coluna no formato de uma perna.
5. Selecione os três e experimente as [ferramentas de alinhamento](./editing-tools) para endireitar a coluna.
6. Saia do modo de edição. Clique nos botões — cada um seleciona seu controle. Esse é o ciclo básico; todo o resto
   é refinamento.
7. **Arquivo → Salvar** grava a página em um arquivo JSON onde você quiser — veja
   [Salvar, carregar e arquivos](./save-load-and-files).

## Desfazer, refazer e redes de segurança \{#undo-redo-and-safety-nets}

Toda alteração no modo de edição — mover, redimensionar, adicionar, excluir, colar, editar cores — vai para a
pilha de desfazer da página (30 passos por padrão; veja [Configurações do editor](./editor-settings)). Ctrl+Z /
Ctrl+Y, ou os botões do cabeçalho. Arrastar dentro de um seletor de cores é agrupado em um único passo de desfazer
em vez de um por movimento, então desfazer uma mudança de cor desfaz o arraste inteiro.

Os [marcadores](./bookmarks) têm sua própria pilha de desfazer separada — desfazer alterações de layout nunca afeta
suas visualizações salvas, e vice-versa.

## Continuar de onde parou \{#picking-up-where-you-left-off}

Para cada arquivo salvo, o plugin lembra o deslocamento e o zoom da tela, qual Control Rig estava ativo e
se você estava no modo de edição ou ao vivo — tudo é restaurado automaticamente na próxima vez que esse arquivo for
carregado, nesta máquina. Essas informações ficam fora do arquivo da página, então compartilhar uma página com um
colega compartilha o layout, não seus hábitos de visualização. Veja
[Salvar, carregar e arquivos](./save-load-and-files#session-state).
