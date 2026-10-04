---
sidebar_position: 6
---

# Alternador \{#toggle}

*Uma chave de dois estados — IK/FK é o uso clássico.*

## No modo ao vivo \{#in-live-mode}

Um alternador tem dois estados, **A** e **B**. Clicar alterna entre eles, e o estado que
acabou de ficar ativo aplica sua própria configuração: seu rótulo, suas cores, seus controles de rig
e atores atribuídos são selecionados, e seu próprio [script Python](./python-scripting) é executado.
Tudo em um alternador é definido **por estado** — um alternador IK/FK pode selecionar os controles IK
em um estado e os controles FK no outro, com uma cor diferente para cada um.

## Grupos de alternadores \{#toggle-groups}

Agrupe vários alternadores (menu do botão direito, com dois ou mais selecionados) e eles passam a se comportar como botões de
opção: cada alternador declara qual de seus estados conta como "ligado" (seu **Estado Ativado**), e
ligar um membro do grupo desliga todos os outros. Widgets agrupados exibem uma borda
própria na tela, os grupos podem ser nomeados e renomeados, e a
[visualização **Por grupo** do Outliner](./attribute-editor-and-outliner) lista os membros de cada grupo sob
o respectivo cabeçalho. Copiar um grupo oferece uma colagem que o recria como um grupo totalmente novo, com membros e
nome incluídos.

## Controlar o canal booleano de um rig \{#driving-a-rigs-bool-channel}

Além de selecionar controles, um alternador pode ser vinculado diretamente a um **canal de animação booleano** de um
controle do Control Rig — por exemplo, o próprio atributo de troca IK/FK do rig:

- Informe o **controle pai** do canal e o próprio **canal**, e escolha qual estado do alternador
  significa que o canal é *true*.
- Clicar no alternador passa a gravar também o valor booleano.
- O vínculo é bidirecional: a página consulta o valor ao vivo do canal e o reflete no
  estado visual do alternador, então percorrer a timeline além de uma troca IK/FK com chave alterna o botão na página
  sem executar de novo o comportamento de clique.

## Criação \{#authoring}

Campos do Editor de atributos: por estado, rótulo / cor de fundo / cor da fonte / tamanho da fonte / nomes dos
controles / atores de destino / script Python; o estado atual e o Estado Ativado; o vínculo com o canal booleano de animação
(ativar, controle pai, nome do canal, estado true); e o bloco comum de
posição/tamanho/rotação/raio do canto.

## Scripts \{#scripting}

`URyanPickerToggleFunctionLibrary` (categoria `Ryan Picker Page|Toggle`). A maioria das funções recebe um
`ERyanPickerToggleState` e lê/grava a configuração de um estado:

| Função | |
|---|---|
| `GetToggleState` / `SetToggleState` | estado atual |
| `GetOnState` / `SetOnState` | qual estado é "ligado" para a exclusividade do grupo |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | chave geral do vínculo com o canal de animação |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Subclasses de Blueprint podem implementar `BI_RyanPickerToggle`: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, além dos
[eventos de ciclo de vida compartilhados](./blueprint-api#event-hooks).
