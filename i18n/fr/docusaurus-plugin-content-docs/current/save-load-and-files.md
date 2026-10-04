---
sidebar_position: 14
---

# Enregistrement, chargement et fichiers \{#saving-loading--files}

Une page s'enregistre dans un unique **fichier JSON**, à l'emplacement de votre choix sur le disque. Les pages ne sont pas des assets
Unreal : elles ne se trouvent pas dans `Content/`, n'ont pas besoin du projet dans lequel elles ont été créées et peuvent être
partagées, envoyées par e-mail ou versionnées comme n'importe quel fichier texte.

Un enregistrement contient toute la page : chaque widget avec toutes ses liaisons et ses styles, la
[rangée de signets](./bookmarks), les groupes de bascules et la [Pose Map](./mirror-pose).

## Le menu Fichier \{#the-file-menu}

| Élément | |
|---|---|
| **Enregistrer** | réécrit dans le fichier actuel de la page ; se comporte comme Enregistrer sous pour une page jamais enregistrée |
| **Enregistrer sous** | boîte de dialogue d'enregistrement native |
| **Charger** | boîte de dialogue d'ouverture native |
| **Charger un fichier récent** | fichiers récemment utilisés, sans boîte de dialogue |
| **Recharger** | relit le fichier actuel depuis le disque |
| **Pose Map…** | la [boîte de dialogue Pose Map](./mirror-pose#the-pose-map) |
| **Settings…** | la boîte de dialogue [Paramètres de l'éditeur](./editor-settings) |

Les boîtes de dialogue d'enregistrement et de chargement s'ouvrent dans les derniers répertoires utilisés.

## Le menu Aide \{#the-help-menu}

Ses éléments sont entièrement pilotés par les données — une liste d'éléments Étiquette/URL/Info-bulle modifiée dans le panneau Class
Defaults de la page. Ajoutez, supprimez, réordonnez ou redirigez un élément sans modifier le code ni recompiler ;
cliquer sur un élément ouvre son URL dans le navigateur par défaut de votre système. Un élément est fixe plutôt que
piloté par les données : **À propos**, qui affiche la version du plugin, la version d'Unreal Engine et
l'auteur dans une simple boîte d'information.

## Les anciens fichiers se chargent toujours \{#old-files-keep-loading}

Les fichiers de sauvegarde sont versionnés par schéma. Charger un ancien fichier le fait migrer automatiquement à travers chaque
changement de schéma intermédiaire — les pages issues des premières versions du plugin se chargent dans la
version actuelle, et il suffit de les réenregistrer pour les écrire au format actuel. Les fichiers qui ne peuvent pas être
migrés (ou qui proviennent d'un plugin *plus récent* que le vôtre) sont refusés avec une erreur explicite
au lieu d'être chargés à moitié.

Une remarque sur la confidentialité : le [script Python](./python-scripting) d'un bouton de sélection est stocké
encodé en Base64 dans le fichier — encodé, pas chiffré. Traitez les fichiers de page contenant des scripts comme
les scripts eux-mêmes.

## État de session \{#session-state}

À côté du fichier de la page — mais jamais à l'intérieur — le plugin mémorise, pour chaque chemin de fichier, où vous vous êtes
arrêté : panoramique/zoom du canevas, Control Rig actif, mode édition ou Live. Rechargez le même fichier
demain et le canevas sera exactement là où vous l'avez laissé. Comme ces données sont stockées sur votre machine et indexées par chemin
de fichier, partager une page ne partage que la disposition — les destinataires obtiennent leur propre état d'affichage.
Les entrées inutilisées depuis 90 jours (configurable) sont purgées.

## Où le plugin conserve ses propres fichiers \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # fichiers récents, derniers répertoires de dialogue, vue de l'Outliner
├── editor_settings.json       # les valeurs de la boîte de dialogue Paramètres de l'éditeur
└── page_session_state.json    # état de session par fichier, indexé par chemin absolu
```

Ils sont propres à chaque utilisateur et à chaque machine. Les supprimer fait perdre des commodités (fichiers récents, vues
restaurées, paramètres) mais jamais de données de page — les pages n'existent que dans les fichiers que vous avez enregistrés.
