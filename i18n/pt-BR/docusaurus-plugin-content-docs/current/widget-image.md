---
sidebar_position: 8
---

# Imagem \{#image}

*Arte na tela — retratos de personagens, diagramas do corpo, fundos.*

As imagens são a base visual de um bom picker: um turnaround do personagem ou o contorno do corpo
atrás dos botões transforma uma grade abstrata de botões em algo legível num piscar de olhos. Assim como os
[rótulos](./widget-label), elas não têm comportamento de clique no modo ao vivo e começam no
[grupo de camadas](./editing-tools#layer-groups) **Imagens** — o mais ao fundo dos três grupos
padrão —, então uma imagem recém-adicionada não cobrirá um controle interativo, a menos que você reordene
os grupos depois.

## Recorte com deslocamento/zoom \{#crop-panzoom}

Em vez de recortar texturas previamente em um editor de imagens, enquadre-as na página: **Image Scale**
aproxima a textura de origem e **Image Offset** desloca a janela visível sobre ela. Uma única
folha de personagem pode alimentar uma dúzia de widgets de imagem, cada um enquadrando uma parte diferente do corpo. Os mesmos
dois controles existem na imagem de fundo de um rótulo.

## Criação \{#authoring}

- **Textura**
- **Modo de Esticamento** — como a textura se ajusta ao retângulo do widget
- **Image Scale** / **Image Offset** — a janela de recorte
- **Cor de fundo** — fica atrás da textura; é também a cor para a qual **Alfa da Imagem** faz a mistura
- **Alfa da Imagem** — opacidade da textura sobre a cor de fundo, 0–1
- Raio do canto (cantos retos por padrão, como nos rótulos)
- O bloco comum de posição/tamanho/rotação

## Renderização \{#rendering}

Imagens e rótulos são desenhados por meio de uma instância dinâmica de um material compartilhado
(`M_RyanPickerRoundedImage`) em vez de um pincel de textura simples. O arredondamento dos cantos, o ajuste pelo modo de esticamento
e a janela de recorte são todos calculados nessa única passagem de material — é por isso que os dois
tipos se comportam de forma idêntica pixel a pixel e que o recorte não custa nada a mais.

## Scripts \{#scripting}

`URyanPickerImageFunctionLibrary` (categoria `Ryan Picker Page|Image`):

| Função | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | recorte com deslocamento/zoom |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | limitado a 0–1 |

Sem interface de ganchos de eventos; as [funções compartilhadas de widgets](./blueprint-api) se aplicam.
