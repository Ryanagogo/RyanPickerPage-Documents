---
sidebar_position: 13
---

# Editor de atributos e Outliner \{#attribute-editor--outliner}

As duas barras laterais do modo de edição. Cada uma tem seu próprio botão no cabeçalho, então você pode manter na tela uma, as duas ou
nenhuma.

## Outliner (à esquerda) \{#outliner-left}

Uma lista de tudo o que há na página — clique em uma linha para selecionar o widget, clique duas vezes para renomeá-lo,
clique com o botão direito para mover/excluir. Três visualizações, alternadas pelos botões acima da lista:

- **Por tipo** — agrupado sob os cabeçalhos dos seis tipos de widget. A visualização do dia a dia.
- **Por camada** — agrupado por [grupo de camadas](./editing-tools#layer-groups), na ordem de desenho. É
  aqui que o empilhamento é reorganizado: arraste um widget para outro grupo para movê-lo para lá, arraste
  dentro de um grupo para reordenar ou arraste o próprio cabeçalho de um grupo para reordenar os grupos. Cada cabeçalho de grupo
  tem seu próprio botão de bloqueio e se recolhe de forma independente.
- **Por grupo** — os [grupos de alternadores](./widget-toggle#toggle-groups) com seus membros aninhados
  sob cada cabeçalho nomeado; os grupos também são renomeados aqui.

Os nomes de widgets são únicos por página (sem diferenciar maiúsculas de minúsculas) — uma renomeação que entra em conflito é rejeitada e
revertida, em vez de ser alterada silenciosamente. A última visualização usada é lembrada globalmente entre sessões.

## Editor de atributos (à direita) \{#attribute-editor-right}

As propriedades do widget selecionado, em um painel de detalhes. Ele edita **um widget por
vez** — para aplicar a mesma alteração a muitos widgets, use as
[ferramentas da barra de ferramentas](./editing-tools#toolbar-tools).

Os campos exibidos dependem do tipo do widget; cada página de widget documenta os seus. O
bloco comum — posição, tamanho, rotação, raio do canto, nome do widget — está sempre presente.

Dois comportamentos que vale a pena conhecer:

- **Edições em andamento são confirmadas antes da mudança de seleção.** Se você estiver editando um campo e
  clicar em outro widget, o valor pendente é confirmado no widget que você estava de fato
  editando — ele não pode vazar para o recém-selecionado.
- **O aviso de canal repetido do slider 2D** aparece como um aviso colorido no próprio painel — veja
  [Slider 2D](./widget-2d-slider).

## Raio do canto \{#corner-radius}

O arredondamento dos widgets é resolvido por uma cascata de três níveis, em que o mais específico vence:

1. **Substituição por widget** — uma flag "override corner radius" mais um valor personalizado no
   widget individual.
2. **Class Default por tipo** — cada tipo de widget pode definir seu próprio padrão no painel Class
   Defaults da página.
3. **Padrão global** — 10 para os tipos botão/slider/alternador; rótulos e imagens têm cantos
   retos (0) por padrão. O valor de reserva global pode ser ajustado em [Configurações do editor](./editor-settings).

Widgets não personalizados seguem a cascata ao vivo — aumente o padrão do tipo e todo widget
daquele tipo sem substituição é atualizado junto.

## Bloqueio de widgets \{#widget-locking}

Qualquer widget pode ser bloqueado — pela caixa de seleção do Editor de atributos, pelo ícone de cadeado na linha dele
ou no cabeçalho do grupo no Outliner, ou por **Bloquear**/**Desbloquear seleção** no menu do botão direito.

O bloqueio só afeta o modo de edição: um widget bloqueado não pode ser selecionado, movido nem redimensionado ali, e
as alças de mover/redimensionar desaparecem por completo. O modo ao vivo e a própria lista do Outliner não são afetados
— um widget bloqueado continua funcionando normalmente quando clicado no modo ao vivo, e você ainda pode vê-lo e
renomeá-lo no Outliner. Bloquear um [grupo de camadas](./editing-tools#layer-groups) pelo cabeçalho no Outliner
bloqueia todos os membros do mesmo jeito.

O bloqueio serve para widgets que você já terminou de posicionar e não quer deslocar sem querer enquanto
trabalha ao redor deles — uma imagem de fundo, por exemplo, ou uma linha de botões pronta.

## Dica no modo ao vivo \{#live-mode-tooltip}

No modo ao vivo, passar o mouse sobre qualquer widget mostra uma dica que resume suas ligações — como ele se chama e
quais controles/atores ele controla. É o jeito mais rápido de examinar uma página desconhecida sem
entrar no modo de edição.
