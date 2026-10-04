---
sidebar_position: 10
---

# Espelhar pose \{#mirror-pose}

*Ensine à página uma única vez sua própria simetria esquerda/direita; espelhe layouts para sempre.*

A [ferramenta Espelhar](./editing-tools#mirror) reflete o que estiver selecionado em relação à
âncora escolhida — ótima para inversões pontuais, mas não sabe quais widgets
correspondem a quais. **Espelhar pose** resolve isso com um **Pose Map**: um registro no nível da página de
qual widget é o par esquerdo de qual, onde fica a linha central e qual widget
ancora tudo. Depois de mapeado, espelhar o layout é um único clique, sempre, sem
malabarismos de seleção.

## O Pose Map \{#the-pose-map}

Criado na caixa de diálogo **Pose Map…** (menu Arquivo). Cada página tem exatamente um mapa, com três
tipos de entrada:

- **Âncora** — o único widget que define o eixo de espelhamento (o centro dele). Normalmente um
  botão de raiz/pélvis posicionado na linha central da página. Nada é espelhado até que uma âncora seja definida —
  caso contrário, o botão Pose avisa com uma notificação.
- **Widgets centrais** — coluna, cabeça, qualquer coisa na linha central. Eles espelham sobre si mesmos
  (invertendo no lugar em relação ao eixo).
- **Pares** — pares de widgets esquerdo/direito: coxa esquerda ↔ coxa direita e assim por diante.

Os menus suspensos de widgets da caixa de diálogo estão em ordem alfabética e são pesquisáveis, então mapear uma página grande
é questão de digitar para filtrar, não de rolar. Um botão **Redefinir Map** (com confirmação) limpa
o mapa inteiro. O mapa é salvo dentro do arquivo da página, então viaja junto com o layout.

## Como usar \{#using-it}

A linha Espelhar da barra de ferramentas tem um botão **Pose** e um menu suspenso de direção, depois dos botões
Mirror Horizontal/Vertical.

**Com uma seleção** — clicar em **Pose** espelha cada widget selecionado de acordo com seu papel
no mapa: a posição e a rotação de um widget esquerdo ou direito são refletidas em relação ao eixo da âncora e
gravadas no seu *par* (o lado selecionado é a origem e não se move); os widgets centrais e a
âncora invertem no lugar. Widgets selecionados que não estão no mapa são ignorados com uma notificação,
enquanto o restante é processado.

**Sem nada selecionado** — o mapa inteiro é espelhado com um clique, na direção indicada pelo menu suspenso
(**Esquerda → Direita** por padrão, ou **Direita → Esquerda**): a âncora e cada widget central
invertem no lugar, e cada par copia seu lado de origem para o lado de destino. É o
botão "terminei o braço esquerdo, carimba o braço direito".

O menu suspenso de direção é um controle temporário da página — ele não é salvo com o arquivo.

## O que muda — e o que não muda \{#what-it-changes--and-doesnt}

Espelhar pose move a **geometria dos widgets**: posição e rotação na tela. Assim como a ferramenta Espelhar,
ela não altera aquilo a que os widgets estão ligados — seu botão da coxa direita continua controlando a coxa
direita; ele só é colocado exatamente onde está o esquerdo, espelhado. Essa é a ideia:
redefinir os destinos uma vez e depois manter os dois lados visualmente em sincronia conforme o layout evolui.
