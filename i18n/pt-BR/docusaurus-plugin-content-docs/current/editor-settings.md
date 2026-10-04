---
sidebar_position: 15
---

# Configurações do editor \{#editor-settings}

**Arquivo → Settings…** abre a caixa de diálogo de configurações globais do plugin. São preferências **por máquina**
que se aplicam a todas as páginas que você abrir, ao contrário dos Class Defaults por página (salvos no
Blueprint da página) e dos dados por arquivo (salvos no arquivo da página).

## Comportamento de novos widgets \{#new-widget-behavior}

| Configuração | Padrão | |
|---|---|---|
| Seed New Widget Targets From Selection | ativado | novos botões/sliders preenchem os destinos a partir da seleção atual — veja [Como os destinos são atribuídos](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | desativado | novos botões de seleção começam no [modo de seleção interativo](./widget-select-button#interactive-selection-mode) |
| Tamanho padrão de novo widget | 200 × 100 | com uma caixa de seleção **Override** — desmarcada, vale o valor dos Class Defaults da página; marcada, o valor desta caixa de diálogo o substitui |
| Raio de canto padrão | 10 | mesma lógica da caixa Override; é o valor de reserva global na [cascata de arredondamento](./attribute-editor-and-outliner#corner-radius) |

## Categorias de Sticky Defaults \{#sticky-defaults-categories}

Sete caixas de seleção — **Cor, Fonte, Raio do canto, Tamanho, Rotação, Texto, Imagem**, todas marcadas por
padrão — controlam quais grupos de propriedades
[Copy to Sticky Defaults](./editing-tools#widget-defaults) realmente leva para os novos widgets.
Desmarque Tamanho e Rotação, por exemplo, para que os sticky defaults sejam puramente estéticos.

## Página e manutenção \{#page--housekeeping}

| Configuração | Padrão | |
|---|---|---|
| Número padrão de marcadores | 4 | espaços de [marcadores](./bookmarks) do usuário em uma nova página (máx. 8) |
| Profundidade da pilha de desfazer | 30 | passos de desfazer/refazer da página principal |
| Idade máxima do estado da sessão | 90 dias | entradas do [estado da sessão](./save-load-and-files#session-state) mais antigas que isso são removidas; 0 desativa a remoção |

## O padrão de substituição \{#the-override-pattern}

Para valores que também existem como Class Defaults da página (tamanho do widget, raio do canto), esta caixa de diálogo
cede de propósito: os Class Defaults do Blueprint da página prevalecem até você marcar aqui a
caixa **Override** correspondente. Assim, os ajustes de um Blueprint de página compartilhado ficam intactos por padrão,
mas uma máquina específica ainda pode impor seus próprios valores.
