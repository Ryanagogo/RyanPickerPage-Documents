---
sidebar_position: 4
---

# Slider 1D \{#1d-slider}

*Um slider ligado a exatamente um canal de transformação.*

## No modo ao vivo \{#in-live-mode}

Arrastar o slider grava seu valor em **um canal** — Transladar, Rotacionar ou Escala, X, Y
ou Z — de cada controle do Control Rig e ator de destino atribuído. Nada mais é alterado: o
slider lê a transformação atual de cada destino, troca o único canal que lhe pertence e grava a
transformação de volta. As mudanças de valor passam pelo mesmo caminho de aplicação que o restante do plugin,
incluindo o auto-key do Sequencer, então os movimentos do slider geram chaves como controles movidos à mão.

Como um slider 1D nunca reivindica canais que não são seus, vários sliders podem controlar canais diferentes
do *mesmo* controle lado a lado — um "levantar" em Transladar Y e um "rolar" em Rotacionar Z no mesmo
controle de pé não entram em conflito.

Clicar com o botão direito no slider oferece **Redefinir para o valor inicial**, que o leva de volta ao padrão
definido.

## Modelo de valores \{#value-model}

Três números importam, e apenas dois deles chegam a se mover:

- **Valor Mínimo / Valor Máximo** — o intervalo sobre o qual o arraste é mapeado.
- **Current Value** — o valor ao vivo; o arraste o grava, e é ele que é aplicado aos destinos.
- **Valor Inicial** — um padrão definido pelo autor que o arraste *nunca* altera. Ele só é alterado
  deliberadamente no Editor de atributos, o que o torna um valor sempre seguro para
  "Redefinir para o valor inicial" retornar.

Um **Tamanho do Passo** opcional faz o arraste avançar em incrementos, e **Bloqueado** desativa o arraste
por completo (para um slider de referência que você não quer esbarrar no meio de uma tomada).

## Criação \{#authoring}

Campos do Editor de atributos: rótulo/nome, valores mín./máx./atual/inicial, **Ativo Canal** (o
único canal que este slider controla), **Orientação** (horizontal/vertical), cor da barra, cor da alça,
espessura da barra, estilo de alça rebaixada, bloqueado, tamanho do passo — além dos campos de atribuição de destinos
compartilhados com o [botão de seleção](./widget-select-button) e o bloco comum de
posição/tamanho/rotação/raio do canto.

## Scripts \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (categoria `Ryan Picker Page|1DSlider`):

| Função | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | intervalo |
| `GetCurrentValue` / `SetCurrentValue` | valor ao vivo |
| `GetInitialValue` / `SetInitialValue` | ponto de redefinição definido |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | destinos |

Subclasses de Blueprint podem implementar `BI_RyanPicker1DSlider`: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, além
dos [eventos de ciclo de vida compartilhados](./blueprint-api#event-hooks).
