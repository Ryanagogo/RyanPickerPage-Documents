---
sidebar_position: 1
---

# Introduction \{#introduction}

**Ryan Picker Page** est un picker d'animation pour Unreal Engine : un canevas de boutons, de sliders,
de bascules, d'étiquettes et d'images que vous disposez une fois par personnage, puis que vous utilisez pour sélectionner et piloter
les contrôles Control Rig (et les acteurs du niveau) en un seul clic — sans fouiller le viewport,
la hiérarchie du rig ou l'arborescence de Sequencer en plein plan.

La même fenêtre fait office de picker et d'éditeur. Passez en mode édition pour construire la disposition ; revenez
en mode Live pour animer avec. Les pages sont enregistrées sous forme de fichiers JSON portables que vous pouvez partager
entre projets et avec vos collègues.

## Prérequis \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Ces plugins du moteur activés (le plugin les déclare comme dépendances) : **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

Le plugin est réservé à l'éditeur. Il n'entre jamais dans un build packagé et n'ajoute rien à l'exécution.

## Installation \{#installation}

1. Copiez le dossier `RyanPickerPage` dans le répertoire `Plugins/` de votre projet.
2. Activez-le dans **Edit → Plugins** et redémarrez l'éditeur.
3. Ouvrez un picker depuis **Tools → Ryan Picker Page**.

## Comment vous repérer dans cette documentation \{#finding-your-way-around-these-docs}

Si vous êtes **animateur** et utilisez une page que quelqu'un a créée pour vous, commencez par
[Prise en main](./getting-started) et les sections consacrées au mode Live des pages de widgets.

Si vous **créez des pages**, lisez dans cet ordre : [Prise en main](./getting-started) →
[Control Rig et acteurs cibles](./control-rig-and-targets) → les pages des types de widgets →
[Outils d'édition et du canevas](./editing-tools).

Si vous êtes **TD et étendez le plugin**, allez directement aux pages
[API Blueprint](./blueprint-api) et [Scripting Python](./python-scripting) — qui expliquent notamment
comment distribuer vos propres variantes de widgets sous forme de sous-classes Blueprint qui apparaissent dans le menu Add Widget.

### Toutes les pages \{#all-pages}

| Section | Pages |
|---|---|
| Notions de base | [Prise en main](./getting-started) |
| Types de widgets | [Bouton de sélection](./widget-select-button) · [Slider 1D](./widget-1d-slider) · [Slider 2D](./widget-2d-slider) · [Bascule](./widget-toggle) · [Étiquette](./widget-label) · [Image](./widget-image) |
| Créer des pages | [Outils d'édition et du canevas](./editing-tools) · [Refléter la pose](./mirror-pose) · [Signets](./bookmarks) |
| Fonctionnement du ciblage | [Control Rig et acteurs cibles](./control-rig-and-targets) · [Éditeur d'attributs et Outliner](./attribute-editor-and-outliner) |
| Fichiers et paramètres | [Enregistrement, chargement et fichiers](./save-load-and-files) · [Paramètres de l'éditeur](./editor-settings) |
| Extension | [API Blueprint](./blueprint-api) · [Scripting Python](./python-scripting) |
