---
sidebar_position: 3
---

# Bouton de sélection \{#select-button}

*Le cheval de trait : un bouton qui sélectionne des choses.*

## En mode Live \{#in-live-mode}

Cliquer sur un bouton de sélection sélectionne ses contrôles Control Rig et ses acteurs cibles assignés — dans le
viewport, dans le rig et dans Sequencer lorsqu'ils y sont liés — puis exécute son
[script Python](./python-scripting), s'il en a un. Un bouton peut porter un seul contrôle ou tout un
ensemble (« sélectionner tous les doigts »), et peut mélanger librement contrôles de rig et simples acteurs.

**Ctrl+clic** bascule au lieu de remplacer : si les cibles du bouton ne sont pas encore toutes sélectionnées,
elles sont ajoutées à la sélection courante ; si elles le sont déjà, elles en sont retirées — le reste
de votre sélection n'est pas touché dans les deux cas.

## Deux comportements de sélection \{#two-selection-behaviors}

Un bouton de sélection fonctionne dans l'un de deux modes, que l'on bascule avec la case **Mode de sélection interactif**
de l'Éditeur d'attributs :

### Mode ensemble de sélection (par défaut) \{#selection-set-mode-default}

Le bouton est un ensemble de sélection mémorisé. Clic → ses cibles deviennent la sélection. Le bouton
ne suit pas ce que vous sélectionnez ailleurs.

### Mode de sélection interactif \{#interactive-selection-mode}

Le bouton devient un miroir en direct de la sélection de l'éditeur, comme se comportent les pickers d'animation
traditionnels :

- La page interroge plusieurs fois par seconde la sélection actuelle du viewport/du rig et **allume le
  bouton** dès que toutes ses cibles font partie de la sélection courante — sélectionnez le contrôle dans
  le viewport, et son bouton s'illumine tout seul sur la page.
- Un clic sélectionne de façon **additive** — les cibles du bouton s'ajoutent à ce qui est déjà sélectionné
  au lieu de le remplacer ; cliquer successivement sur plusieurs boutons interactifs construit donc une sélection.
- Ctrl+clic retire les cibles du bouton de la sélection, comme ci-dessus.

Ce mode est conçu pour **un contrôle (ou un acteur) par bouton**. L'activer sur un bouton
à plusieurs cibles fonctionne, mais affiche un avertissement — un bouton à plusieurs cibles ne peut pas
refléter sans ambiguïté une sélection partielle. L'interrogation ne s'exécute que lorsque l'onglet de la page est au
premier plan et que le mode édition est désactivé ; les onglets en arrière-plan ne coûtent donc rien.

Les nouveaux boutons peuvent démarrer par défaut dans l'un ou l'autre mode via les [Paramètres de l'éditeur](./editor-settings).

## Création \{#authoring}

Avec le bouton sélectionné en mode édition, l'Éditeur d'attributs propose :

- **Étiquette** (et son affichage ou non), nom du widget, taille de police
- **Couleur d'arrière-plan** et **couleur de police**
- **Noms des contrôles** — résolus par rapport au rig actuel de la page ; voir
  [Control Rig et acteurs cibles](./control-rig-and-targets)
- **Acteurs cibles** — un récapitulatif résolu et lisible de chaque acteur assigné
- Case **Mode de sélection interactif**
- **Script Python** — sur plusieurs lignes ; s'exécute après la sélection à chaque clic
- Position, taille, rotation, rayon d'angle — communs à tous les widgets

Les nouveaux boutons initialisent leur liste de cibles à partir de la sélection au moment de leur création (un
[paramètre](./editor-settings), activé par défaut) — la boucle de création la plus rapide est *sélectionner dans le
viewport, ajouter le bouton, terminé*.

## Scripting \{#scripting}

Les fonctions Blueprint se trouvent dans `URyanPickerSelectButtonFunctionLibrary`
(catégorie `Ryan Picker Page|SelectControl`) ; les fonctions communes de transformation et d'apparence sont dans la
[bibliothèque commune des widgets](./blueprint-api).

| Fonction | |
|---|---|
| `GetControlNames` | noms des contrôles de rig assignés |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | acteurs assignés, dans les deux espaces d'identité — voir [Spawnables de Sequencer](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | le setter avertit (sans bloquer) sur les boutons à plusieurs cibles |

Les sous-classes Blueprint peuvent implémenter les événements de l'interface `BI_RyanPickerSelectButton` :
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, ainsi que les [trois événements de cycle de vie](./blueprint-api#event-hooks) communs à tous
les types de widgets. Voir [Blueprints de widgets personnalisés](./blueprint-api#custom-widget-blueprints) pour savoir
comment une sous-classe apparaît dans le menu Add Widget.
