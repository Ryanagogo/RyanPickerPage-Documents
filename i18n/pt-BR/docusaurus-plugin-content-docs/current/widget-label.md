---
sidebar_position: 7
---

# Rótulo \{#label}

*Texto na tela. Os cliques passam direto por ele.*

Rótulos servem para anotação: cabeçalhos de seção ("BRAÇO ESQUERDO"), observações ou imagens com legenda. Eles não têm
comportamento de clique no modo ao vivo nem atribuição de destinos — o que também significa que são o único tipo de widget
(junto com [Imagem](./widget-image)) que você pode sobrepor livremente sem roubar cliques dos
controles ao redor.

Um rótulo pode exibir ao vivo o **nome do Control Rig atual** em vez de um texto fixo — coloque um em
um canto da página e ele sempre dirá ao animador qual rig esta aba está controlando.

## Criação \{#authoring}

- **Texto**, tamanho da fonte, cor da fonte, **justificação**, **quebra automática de linha**
- **Cor de fundo** e, opcionalmente, uma **imagem** de fundo com seu próprio modo de esticamento e
  [recorte com deslocamento/zoom](./widget-image#crop-panzoom)
- **Alfa da Imagem** — opacidade dessa imagem de fundo sobre a cor de fundo, 0–1
- Raio do canto: rótulos têm cantos retos por padrão (raio 0), mas participam da mesma
  [cascata de arredondamento](./attribute-editor-and-outliner#corner-radius) que todos os outros tipos
- O bloco comum de posição/tamanho/rotação

Rótulos renderizam o fundo com o mesmo material de cantos arredondados que
[Imagem](./widget-image#rendering), então o arredondamento e o recorte de imagem se comportam de forma idêntica nos dois.

## Scripts \{#scripting}

`URyanPickerLabelFunctionLibrary` (categoria `Ryan Picker Page|Label`):

| Função | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | imagem de fundo |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | recorte com deslocamento/zoom |
| `GetImageAlpha` / `SetImageAlpha` | limitado a 0–1 |

Rótulos não têm interface de ganchos de eventos — não há nada para clicar ou arrastar —, mas todas as
[funções compartilhadas de widgets](./blueprint-api) (posição, tamanho, rotação, raio do canto, nome)
se aplicam.
