---
sidebar_position: 12
---

# Control Rig e atores de destino \{#control-rig--target-actors}

*A que um widget está "ligado" e como essa ligação sobrevive a sessões, sequências e respawns.*

Widgets nunca guardam referências fixas a objetos. Eles armazenam **nomes e identidades** — nomes de controles do
Control Rig, identidades de atores — e os resolvem em relação ao estado atual do editor no momento em que
você clica. É essa indireção que permite que uma página salva continue funcionando após reinícios do editor,
em níveis diferentes e ao longo do ciclo de vida dos atores no Sequencer.

## O Control Rig atual \{#the-current-control-rig}

Cada aba de página tem um **Control Rig atual**, escolhido no menu suspenso do cabeçalho. O menu
lista os rigs vinculados na **Level Sequence em foco** e se mantém sozinho: mude para uma
sequência diferente com o picker aberto e a lista é reconstruída — mantendo sua escolha se
aquele rig ainda estiver vinculado e selecionando automaticamente quando houver exatamente um rig disponível.

Os nomes de controle nos widgets são resolvidos em relação a esse rig. Portanto, a mesma página controla qualquer
personagem que compartilhe a nomenclatura de controles do rig — monte uma página de bípede e use-a para todo o elenco.
(Os [rótulos](./widget-label) podem exibir o nome do rig atual para que os animadores sempre saibam qual
personagem uma aba está controlando.)

## Atores de destino \{#target-actors}

Widgets também podem ter **atores** como destino — no lugar de controles de rig ou junto com eles. Um botão pode
selecionar ao mesmo tempo um objeto de cena, uma câmera e um controle de rig; um slider pode controlar diretamente um canal de transformação de um ator,
gerando chaves automáticas no Sequencer como qualquer animação feita à mão.

### Spawnables do Sequencer \{#sequencer-spawnables}

Atores comuns do nível são identificados pelo GUID de ator estável. **Os spawnables são a armadilha**:
o Sequencer os recria com um GUID de ator *novo* a cada sessão, o que quebraria silenciosamente qualquer
página salva com o anterior. Por isso, toda atribuição de ator em todo widget armazena duas identidades
em paralelo — o GUID do ator *e* o **GUID de binding** do ator no Sequencer, que é estável
entre respawns. A resolução tenta o GUID do ator e, se falhar, recorre ao binding. Você nunca
precisa gerenciar isso; é por isso que páginas cheias de spawnables continuam funcionando na semana seguinte.

## Como os destinos são atribuídos \{#how-targets-get-assigned}

No modo de edição, com um widget selecionado:

- **Preencher ao criar** (padrão, [configurável](./editor-settings)): a lista de destinos de um novo widget é
  preenchida com os controles/atores que estiverem selecionados quando você o adiciona. Selecionar no viewport →
  Add Widget é todo o gesto de criação.
- Os campos de destino do Editor de atributos mostram um resumo resolvido e legível — nomes reais de atores
  e controles, não GUIDs — para que você confira as ligações num relance. Referências quebradas
  (atores excluídos, controles renomeados) simplesmente não resolvem para nada, em vez de causar erro na página.

## Duas filosofias de seleção \{#two-selection-philosophies}

Os [botões de seleção](./widget-select-button) oferecem os dois comportamentos clássicos de picker:
**conjuntos de seleção** (um clique substitui a seleção pelo conjunto armazenado) e o **modo de seleção
interativo** (os botões refletem continuamente a seleção do editor e o clique é cumulativo — veja
a página do botão de seleção para o comportamento completo). A coleta da seleção é deliberadamente
independente do rig: o preenchimento e a correspondência interativa consideram sua seleção real no editor, não apenas
controles que pertencem ao rig atual do menu suspenso.
