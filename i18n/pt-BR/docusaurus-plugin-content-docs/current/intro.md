---
sidebar_position: 1
---

# Introdução \{#introduction}

**Ryan Picker Page** é um picker de animação para Unreal Engine: uma tela de botões, sliders,
alternadores, rótulos e imagens que você monta uma vez por personagem e depois usa para selecionar e controlar
os controles do Control Rig (e atores do nível) com um único clique — sem precisar procurar no viewport,
na hierarquia do rig ou na árvore do Sequencer no meio de uma tomada.

A mesma janela é ao mesmo tempo o picker e o seu editor. Mude para o modo de edição para montar o layout; volte
ao modo ao vivo para animar com ele. As páginas são salvas como arquivos JSON portáteis que você pode compartilhar
entre projetos e com a equipe.

## Requisitos \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Estes plugins do motor ativados (o plugin os declara como dependências): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

O plugin é exclusivo do editor. Ele nunca entra em uma build empacotada e não adiciona nada em tempo de execução.

## Instalação \{#installation}

1. Copie a pasta `RyanPickerPage` para o diretório `Plugins/` do seu projeto.
2. Ative-o em **Edit → Plugins** e reinicie o editor.
3. Abra um picker em **Tools → Ryan Picker Page**.

## Como se orientar nesta documentação \{#finding-your-way-around-these-docs}

Se você é um **animador** usando uma página que alguém montou para você, comece por
[Primeiros passos](./getting-started) e pelas seções do modo ao vivo nas páginas de widgets.

Se você vai **criar páginas**, leia nesta ordem: [Primeiros passos](./getting-started) →
[Control Rig e atores de destino](./control-rig-and-targets) → as páginas dos tipos de widget →
[Ferramentas de edição e da tela](./editing-tools).

Se você é um **TD estendendo o plugin**, vá direto para as páginas
[API de Blueprint](./blueprint-api) e [Scripts em Python](./python-scripting) — incluindo
como distribuir suas próprias variantes de widget como subclasses de Blueprint que aparecem no menu Add Widget.

### Todas as páginas \{#all-pages}

| Seção | Páginas |
|---|---|
| Noções básicas | [Primeiros passos](./getting-started) |
| Tipos de widget | [Botão de seleção](./widget-select-button) · [Slider 1D](./widget-1d-slider) · [Slider 2D](./widget-2d-slider) · [Alternador](./widget-toggle) · [Rótulo](./widget-label) · [Imagem](./widget-image) |
| Criar páginas | [Ferramentas de edição e da tela](./editing-tools) · [Espelhar pose](./mirror-pose) · [Marcadores](./bookmarks) |
| Como funciona a definição de destinos | [Control Rig e atores de destino](./control-rig-and-targets) · [Editor de atributos e Outliner](./attribute-editor-and-outliner) |
| Arquivos e configurações | [Salvar, carregar e arquivos](./save-load-and-files) · [Configurações do editor](./editor-settings) |
| Extensão | [API de Blueprint](./blueprint-api) · [Scripts em Python](./python-scripting) |
