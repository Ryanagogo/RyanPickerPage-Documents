---
sidebar_position: 16
---

# API de Blueprint \{#blueprint-api}

A superfície de scripting do plugin segue um único padrão em todo lugar: **bibliotecas de funções** de nós
estáticos, uma biblioteca compartilhada para o que todo widget tem, mais uma biblioteca por tipo de widget para o que
só aquele tipo tem. Toda função recebe o widget como `Target` com `DefaultToSelf` — dentro do próprio grafo de um
Blueprint de widget, os nós se ligam sozinhos a `self`.

## Funções compartilhadas — todos os tipos de widget \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, categoria `Ryan Picker Page|Widget`:

| Função | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | geometria na tela |
| `GetRotation` / `SetRotation` | graus, ajustados para [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | o nível por widget da [cascata de arredondamento](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | nome único na página |
| `GetCurrentControlRig` | o rig atual da página proprietária |
| `GetActorFromGUID` | resolve a identidade de um ator por meio da página |

## Funções por tipo \{#per-type-functions}

A biblioteca própria de cada tipo de widget está documentada na respectiva página:

| Biblioteca | Categoria | Referência |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Botão de seleção](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [Slider 1D](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [Slider 2D](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Alternador](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Rótulo](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Imagem](./widget-image#scripting) |

## Ganchos de eventos \{#event-hooks}

Cada um dos quatro tipos de widget interativos expõe uma interface de Blueprint com ganchos `BlueprintNativeEvent` —
implemente-os em uma subclasse de Blueprint para adicionar comportamento sem C++:

| Interface | Eventos específicos do tipo |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | os mesmos quatro, com valor 2D |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

As quatro herdam três **eventos de ciclo de vida** compartilhados por todo tipo interativo:

- `OnWidgetSelected(bool)` — a seleção no modo de edição mudou
- `OnWidgetHighlighted(bool)` — o estado de hover mudou
- `OnWidgetEditModeChanged(bool)` — a página entrou no modo de edição ou saiu dele

Rótulos e imagens não têm interface de ganchos — não há nada clicável neles —, mas a biblioteca de
funções compartilhada os cobre.

## Blueprints de widgets personalizados \{#custom-widget-blueprints}

O ponto de extensão mais profundo: **crie uma subclasse de um tipo de widget em Blueprint, e a página a tratará como
um tipo de widget de primeira classe por si só.**

1. Crie uma classe de Blueprint cujo pai seja uma das classes de widget nativas finais
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Implemente os eventos da interface de ganchos dela para adicionar seu comportamento — visuais extras em
   `OnToggleStateChanged`, lógica personalizada em `OnSelectButtonClicked`, o que a tomada exigir.
3. Sua classe aparece automaticamente no menu do botão direito da tela, em **Widgets personalizados**,
   agrupada pelo tipo base.

Widgets personalizados herdam tudo — salvar/carregar, desfazer, o Editor de atributos, as ferramentas de alinhar/espelhar,
a definição de destinos — porque a página reconhece qualquer subclasse de um tipo final como aquele tipo. Páginas que
usam um widget personalizado registram o caminho de classe do Blueprint no arquivo salvo, então recarregam
corretamente em qualquer projeto que contenha o Blueprint.

Para um comportamento de clique que não justifique uma subclasse de Blueprint, muitas vezes basta um simples
[script Python no widget](./python-scripting).
