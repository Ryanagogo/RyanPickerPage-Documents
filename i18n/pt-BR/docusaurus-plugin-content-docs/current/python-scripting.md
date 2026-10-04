---
sidebar_position: 17
---

# Scripts em Python \{#python-scripting}

*Associe Python do editor a um clique — sem subclasse de Blueprint, sem compilação.*

Os [botões de seleção](./widget-select-button) têm um script Python opcional;
os [alternadores](./widget-toggle) têm um **por estado**. O script é executado no ambiente Python do editor
(o módulo padrão `unreal` e tudo o mais que o Python Editor Script Plugin
oferece) sempre que o widget é clicado no modo ao vivo.

## Ordem de execução \{#execution-order}

O script é executado **depois** que o trabalho de seleção do clique termina — controles selecionados, atores
selecionados, o estado do alternador já trocado. Portanto, seu script pode presumir que os destinos do widget
são a seleção atual e agir sobre eles:

```python
import unreal

# Executado com os destinos do botão já selecionados.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

Em um alternador, é executado o script do estado *para o qual* ele acabou de mudar — um alternador IK/FK pode executar
lógica de correspondência/encaixe em cada transição, em cada direção.

## Criação e armazenamento \{#authoring-and-storage}

Edite o script no campo **Script Python** do Editor de atributos com o widget selecionado no
modo de edição, ou pelo Blueprint via `GetPythonScript` / `SetPythonScript` (botão de seleção) e
`GetPythonScriptForState` / `SetPythonScriptForState` (alternador).

No arquivo de página salvo, o script é armazenado codificado em Base64 — um detalhe de transporte, não de segurança.
Ele fica em texto puro na interface do editor, no Blueprint e na memória, e é executado com todos os privilégios de Python
do editor. **Carregue páginas apenas de fontes confiáveis**, o mesmo critério que você aplicaria a qualquer
script do editor, e trate arquivos de página compartilhados como código ao revisá-los.
