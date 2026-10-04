---
sidebar_position: 3
---

# Botão de seleção \{#select-button}

*O burro de carga: um botão que seleciona coisas.*

## No modo ao vivo \{#in-live-mode}

Clicar em um botão de seleção seleciona os controles do Control Rig e os atores de destino atribuídos a ele — no
viewport, no rig e no Sequencer, onde estiverem vinculados — e, em seguida, executa o
[script Python](./python-scripting) dele, se houver. Um botão pode ter um único controle ou um conjunto inteiro
("selecionar todos os dedos") e pode misturar livremente controles de rig e atores comuns.

**Ctrl+clique** alterna em vez de substituir: se os destinos do botão ainda não estiverem todos selecionados,
eles são adicionados à seleção atual; se já estiverem, são removidos dela — o restante
da sua seleção fica intocado em ambos os casos.

## Dois comportamentos de seleção \{#two-selection-behaviors}

Um botão de seleção funciona em um de dois modos, alternados pela caixa de seleção **Modo de Seleção Interativo**
no Editor de atributos:

### Modo de conjunto de seleção (padrão) \{#selection-set-mode-default}

O botão é um conjunto de seleção armazenado. Clique → os destinos dele passam a ser a seleção. O botão
não acompanha o que você seleciona em outros lugares.

### Modo de Seleção Interativo \{#interactive-selection-mode}

O botão vira um espelho ao vivo da seleção do editor, do jeito que os pickers de animação
tradicionais se comportam:

- A página consulta a seleção atual do viewport/rig várias vezes por segundo e **acende o
  botão** sempre que todos os destinos dele fazem parte da seleção atual — selecione o controle no
  viewport e o botão correspondente se destaca sozinho na página.
- O clique seleciona de forma **cumulativa** — os destinos do botão se juntam ao que já está selecionado
  em vez de substituí-lo, então clicar em vários botões interativos vai montando uma seleção.
- Ctrl+clique remove os destinos do botão da seleção, como acima.

Esse modo foi pensado para **um controle (ou um ator) por botão**. Ativá-lo em um botão
com vários destinos funciona, mas exibe um aviso — um botão com vários destinos não consegue
espelhar sem ambiguidade uma seleção parcial. A consulta só é executada enquanto a aba da página está em
primeiro plano e o modo de edição está desligado, então abas em segundo plano não custam nada.

Novos botões podem começar por padrão em qualquer um dos modos pelas [Configurações do editor](./editor-settings).

## Criação \{#authoring}

Com o botão selecionado no modo de edição, o Editor de atributos exibe:

- **Rótulo** (e se ele é exibido), nome do widget, tamanho da fonte
- **Cor de fundo** e **cor da fonte**
- **Nomes dos controles** — resolvidos em relação ao rig atual da página; veja
  [Control Rig e atores de destino](./control-rig-and-targets)
- **Atores de destino** — um resumo resolvido e legível de cada ator atribuído
- Caixa de seleção **Modo de Seleção Interativo**
- **Script Python** — com várias linhas; executado após a seleção a cada clique
- Posição, tamanho, rotação, raio do canto — comuns a todos os widgets

Novos botões preenchem a lista de destinos com o que estiver selecionado no momento da criação (uma
[configuração](./editor-settings), ativada por padrão) — o ciclo de criação mais rápido é *selecionar no
viewport, adicionar o botão, pronto*.

## Scripts \{#scripting}

As funções de Blueprint ficam em `URyanPickerSelectButtonFunctionLibrary`
(categoria `Ryan Picker Page|SelectControl`); as funções comuns de transformação/aparência estão na
[biblioteca compartilhada de widgets](./blueprint-api).

| Função | |
|---|---|
| `GetControlNames` | nomes dos controles de rig atribuídos |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | atores atribuídos, nos dois espaços de identidade — veja [Spawnables do Sequencer](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | o setter avisa (não bloqueia) em botões com vários destinos |

Subclasses de Blueprint podem implementar os eventos da interface `BI_RyanPickerSelectButton`:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, além dos [três eventos de ciclo de vida](./blueprint-api#event-hooks) que todo
tipo de widget compartilha. Veja [Blueprints de widgets personalizados](./blueprint-api#custom-widget-blueprints) para saber
como uma subclasse aparece no menu Add Widget.
