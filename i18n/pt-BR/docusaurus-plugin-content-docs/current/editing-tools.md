---
sidebar_position: 9
---

# Ferramentas de edição e da tela \{#editing--canvas-tools}

Tudo nesta página acontece no **modo de edição**. A tela em si pode ser deslocada e ampliada nos dois
modos — monte a página no nível de zoom que for mais confortável.

## Seleção \{#selection}

- Clique em um widget para selecioná-lo; Shift/Ctrl+clique amplia a seleção.
- Arraste em uma área vazia da tela para desenhar uma caixa de seleção.
- Widgets selecionados mostram oito alças de redimensionamento mais uma alça de rotação, cada uma com seu próprio cursor.

O Editor de atributos acompanha a seleção única; as ferramentas da barra de ferramentas abaixo servem para editar muitos
widgets de uma vez.

## Manipulação direta \{#direct-manipulation}

Arraste um widget para movê-lo. Arraste uma alça para redimensionar — o redimensionamento funciona corretamente também em widgets
girados. Arraste a alça de rotação para girar um widget em torno do centro; a rotação é armazenada em
graus, e widgets girados continuam totalmente funcionais no modo ao vivo (um slider girado é arrastado ao longo do
eixo girado). Segure Shift durante a rotação para encaixar em incrementos de 15°. Girar uma seleção de vários widgets
gira o grupo inteiro de forma rígida em torno de um pivô comum (ancorado no último widget
selecionado), enquanto cada widget também continua girando em torno do próprio centro.

Um widget bloqueado fica de fora de tudo isso — veja [Bloqueio de widgets](./attribute-editor-and-outliner#widget-locking).

As setas do teclado deslocam a seleção aos poucos (Shift para um passo maior; as duas distâncias são Class
Defaults da página). A ferramenta **Deslocar** da barra de ferramentas adiciona setas na tela com distância própria,
definida em um campo numérico, para passos repetidos e exatos.

## Ferramentas da barra de ferramentas \{#toolbar-tools}

Uma linha de ferramentas fica ativa por vez, alternada pelo cabeçalho:

| Ferramenta | Age sobre a seleção |
|---|---|
| **Imagem** | atribui uma textura a cada widget selecionado |
| **Cor** | aplica uma cor de fundo/fonte a cada widget selecionado |
| **Rótulo** | define o texto do rótulo e o tamanho da fonte em toda a seleção |
| **Tamanho** | define largura/altura exatas em toda a seleção |
| **Deslocar** | setas de passo fixo, como acima |
| **Alinhar** | esquerda/direita/topo/base, centros horizontal/vertical e distribuição uniforme |
| **Espelhar** | veja abaixo |

As edições de cor pela barra de ferramentas (e pelo Editor de atributos) são agrupadas enquanto você arrasta dentro do
seletor de cores — um passo de desfazer por sessão de cor, não por movimento do mouse.

## Espelhar \{#mirror}

Monta um lado de uma página a partir do outro: **Mirror Horizontal** / **Mirror Vertical** refletem
a posição de cada widget selecionado em relação a um eixo e invertem sua rotação. O eixo é definido pelo
menu suspenso **Mirror Mode**:

| Modo | Reflete em relação a |
|---|---|
| Próprio | o centro de cada widget — os widgets invertem no lugar |
| Última seleção (incl.) | o centro do último widget selecionado; ele também se move |
| Última seleção (excl.) | o centro do último widget selecionado; ele fica onde está |
| Tela visível | o centro do que você está vendo no momento |

O espelhamento é apenas geométrico — ele não renomeia controles nem troca canais de sliders. O fluxo
habitual é espelhar e depois redirecionar: espelhe os widgets do braço esquerdo e depois aponte as cópias para os
controles do lado direito. Para um espelhamento esquerda/direita repetível que lembra os pares, veja
[Espelhar pose](./mirror-pose).

## Grupos de camadas \{#layer-groups}

Todo widget pertence a um **grupo de camadas**, e a ordem de desenho é simplemente a dos membros de cada grupo,
grupo a grupo, da frente para trás. Três grupos — **Imagens**, **Rótulos**, **Controles** — são criados
em toda página e não podem ser excluídos (excluir qualquer outro grupo devolve seus membros ao
grupo padrão do tipo deles). Além desses três, você pode criar, renomear, reordenar e bloquear
quantos grupos quiser — um grupo bloqueado bloqueia todos os widgets dele, assim como o
[bloqueio](./attribute-editor-and-outliner#widget-locking) de um widget individual.

Clique com o botão direito em um widget para **Trazer para frente / Step Up / Step Down / Enviar para trás**, dentro do próprio grupo. Mover
um widget entre grupos, reordenar os próprios grupos e bloquear são feitos na
[visualização Por camada](./attribute-editor-and-outliner#outliner-left) do Outliner — veja essa página para a
interface completa de gerenciamento por arrastar e soltar.

## Copiar, recortar, colar \{#copy-cut-paste}

Ctrl+C / Ctrl+X / Ctrl+V em qualquer seleção. O que é colado aparece no cursor; colar em outra aba de página
aberta funciona, e Colar no lugar preserva as posições exatas para transferências entre páginas.
Widgets colados mantêm seus nomes quando possível, com um sufixo numérico em caso de duplicata. Grupos de
alternadores podem ser copiados e colados [como grupos inteiros](./widget-toggle#toggle-groups).

## Padrões de widgets \{#widget-defaults}

A aparência de um widget recém-adicionado é definida em camadas, da menos para a mais específica:

1. **Class Defaults** — valores iniciais por tipo (cores, tamanhos, fontes...) editáveis no
   painel Class Defaults da página, uma categoria por tipo de widget.
2. **Sticky Defaults** — clique com o botão direito em qualquer widget → **Copy to Sticky Defaults**, e os próximos
   widgets daquele tipo serão criados iguais a ele. Quais categorias de propriedades são mantidas (cor, fonte, raio do canto,
   tamanho, rotação, texto, imagem) é definido em [Configurações do editor](./editor-settings).

Isso só vale para widgets criados pelo menu Add Widget — widgets colados e carregados mantêm seus próprios
dados.
