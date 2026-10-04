---
sidebar_position: 5
---

# Slider 2D \{#2d-slider}

*Uma alça arrastável, dois canais de transformação.*

## No modo ao vivo \{#in-live-mode}

Um slider 2D é um pad: arrastar sua alça grava o eixo X em um canal de transformação e o
eixo Y em outro, simultaneamente, em cada controle/ator atribuído. Usos típicos são um pad de
Transladar X / Transladar Y para apoiar o pé ou um pad de Rotacionar X / Rotacionar Y para a direção do olhar.

Ele segue a mesma disciplina de canais do [slider 1D](./widget-1d-slider): cada eixo
substitui apenas o próprio canal no destino, então um pad 2D convive com outros sliders que controlam
os canais restantes do mesmo controle. O auto-key se aplica. **Redefinir para o valor inicial** também está no
menu do botão direito.

## Modelo de valores \{#value-model}

Idêntico ao slider 1D, mas bidimensional: **Valor Mínimo/Valor Máximo** são pares por eixo, **Current
Value** é o valor 2D ao vivo e **Valor Inicial** é o padrão definido, imune ao arraste. **Tamanho do Passo**
e **Bloqueado** se comportam da mesma forma.

Os dois canais são escolhidos de forma independente (**Ativo Canal X**, **Ativo Canal Y**). Definir
os dois eixos para o *mesmo* canal é quase sempre um erro de configuração, então o Editor de atributos
sinaliza isso com um aviso em vez de deixar os dois eixos disputarem silenciosamente um único valor.

## Criação \{#authoring}

Campos do Editor de atributos: rótulo/nome, mín./máx. por eixo, valores atual/inicial, Ativo Canal X
e Y (com o aviso de canal repetido), cor da alça, estilo de alça rebaixada, bloqueado, tamanho do passo,
atribuição de destinos e o bloco comum de posição/tamanho/rotação/raio do canto.

## Scripts \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (categoria `Ryan Picker Page|2DSlider`):

| Função | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, por eixo |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | destinos |

Subclasses de Blueprint podem implementar `BI_RyanPicker2DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
além dos [eventos de ciclo de vida compartilhados](./blueprint-api#event-hooks).
