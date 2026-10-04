---
sidebar_position: 14
---

# Salvar, carregar e arquivos \{#saving-loading--files}

Uma página é salva em um único **arquivo JSON**, em qualquer lugar do disco que você escolher. Páginas não são assets
do Unreal: elas não ficam em `Content/`, não precisam do projeto em que foram criadas e podem ser
compartilhadas, enviadas por e-mail ou versionadas como qualquer arquivo de texto.

Um único salvamento leva a página inteira: cada widget com todas as suas ligações e estilos, a
[linha de marcadores](./bookmarks), os grupos de alternadores e o [Pose Map](./mirror-pose).

## O menu Arquivo \{#the-file-menu}

| Item | |
|---|---|
| **Salvar** | grava de volta no arquivo atual da página; para uma página nunca salva, funciona como Salvar como |
| **Salvar como** | caixa de diálogo nativa para salvar |
| **Carregar** | caixa de diálogo nativa para abrir |
| **Carregar recente** | arquivos usados recentemente, sem caixa de diálogo |
| **Recarregar** | lê novamente o arquivo atual do disco |
| **Pose Map…** | a [caixa de diálogo Pose Map](./mirror-pose#the-pose-map) |
| **Settings…** | a caixa de diálogo [Configurações do editor](./editor-settings) |

As caixas de diálogo de salvar e carregar reabrem nas últimas pastas usadas.

## O menu Ajuda \{#the-help-menu}

Os itens são totalmente orientados a dados — uma lista de itens Rótulo/URL/Dica editada no painel Class
Defaults da página. Adicione, remova, reordene ou redirecione um item sem alterar código nem recompilar;
clicar em um item abre a URL dele no navegador padrão do sistema. Um item é fixo, em vez de
orientado a dados: **Sobre**, que mostra a versão do plugin, a versão da Unreal Engine e o
autor em uma caixa de informações simples.

## Arquivos antigos continuam carregando \{#old-files-keep-loading}

Os arquivos salvos têm versão de esquema. Carregar um arquivo mais antigo o migra automaticamente por todas as
mudanças de esquema intermediárias — páginas de versões iniciais do plugin carregam na
atual, e basta salvá-las de novo para gravá-las na versão atual. Arquivos que não podem ser
migrados (ou que vêm de um plugin *mais novo* que o seu) são rejeitados com um erro claro,
em vez de serem carregados pela metade.

Uma observação sobre privacidade: o [script Python](./python-scripting) de um botão de seleção é armazenado
no arquivo codificado em Base64 — codificado, não criptografado. Trate arquivos de página que contêm scripts como
os próprios scripts.

## Estado da sessão \{#session-state}

Ao lado do arquivo da página — mas nunca dentro dele — o plugin lembra, por caminho de arquivo, onde você
parou: deslocamento/zoom da tela, o Control Rig ativo, modo de edição ou ao vivo. Carregue o mesmo arquivo
amanhã e a tela estará exatamente onde você a deixou. Como essas informações ficam na sua máquina, indexadas pelo caminho
do arquivo, compartilhar uma página compartilha apenas o layout — quem recebe tem seu próprio estado de visualização.
Entradas sem uso por 90 dias (configurável) são removidas.

## Onde o plugin guarda os próprios arquivos \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # arquivos recentes, últimas pastas das caixas de diálogo, visualização do Outliner
├── editor_settings.json       # os valores da caixa de diálogo Configurações do editor
└── page_session_state.json    # estado da sessão por arquivo, indexado pelo caminho absoluto
```

Eles são por usuário e por máquina. Excluí-los faz perder conveniências (arquivos recentes, visualizações
restauradas, configurações), mas nunca dados de páginas — as páginas existem apenas nos arquivos que você salvou.
