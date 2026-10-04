---
sidebar_position: 11
---

# Marcadores \{#bookmarks}

*Posições de câmera nomeadas para a tela.*

Em um picker de corpo inteiro, você está sempre pulando entre regiões — rosto, mãos, pés. Os marcadores
transformam cada pulo em um único clique: um marcador guarda uma visualização (deslocamento e zoom) da tela, e clicar no botão dele na
linha do cabeçalho leva a tela até lá na hora.

## A linha de marcadores \{#the-bookmark-row}

- **Padrão** sempre existe e está sempre visível, fora da linha rolável — trate-o como
  sua "página inicial".
- **Os espaços do usuário** — 4 por padrão, até 8 (veja [Configurações do editor](./editor-settings)) — ficam em uma
  linha com rolagem horizontal ao lado dele, numerados pela posição e com nome editável.

## Trabalhando com marcadores \{#working-with-bookmarks}

| Ação | Como |
|---|---|
| Ir para uma visualização | clique no botão |
| Guardar a visualização atual | **Ctrl+Shift+clique** no botão, ou clique direito → Definir / substituir — o botão pisca em verde para confirmar |
| Renomear um espaço | clique direito → Renomear |
| Adicionar um espaço | clique direito → Adicionar marcador antes / Adicionar marcador depois |
| Reordenar | clique direito → Mover para a esquerda / Mover para a direita — os dois botões trocados piscam em laranja |
| Remover / redefinir | clique direito → Excluir, ou Reset to Identity |

As edições de marcadores têm sua **própria pilha de desfazer de 30 passos**, totalmente independente do desfazer do layout —
Ctrl+Z na tela nunca vai engolir uma alteração de marcador, e desfazer um marcador nunca afeta o
layout.

Os marcadores são salvos no arquivo da página junto com todo o resto. A largura dos botões, a fonte, o preenchimento e as
duas cores de piscada de confirmação podem ser ajustados por página no painel Class Defaults.
