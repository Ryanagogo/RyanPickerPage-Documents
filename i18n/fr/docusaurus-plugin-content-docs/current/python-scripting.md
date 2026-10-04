---
sidebar_position: 17
---

# Scripting Python \{#python-scripting}

*Associez du Python d'éditeur à un clic — sans sous-classe Blueprint, sans compilation.*

Les [boutons de sélection](./widget-select-button) portent un script Python facultatif ;
les [bascules](./widget-toggle) en portent un **par état**. Le script s'exécute dans l'environnement Python de l'éditeur
(le module standard `unreal` et tout ce que propose le Python Editor Script Plugin)
chaque fois que le widget est cliqué en mode Live.

## Ordre d'exécution \{#execution-order}

Le script s'exécute **après** le travail de sélection du clic — contrôles sélectionnés, acteurs
sélectionnés, état de la bascule déjà inversé. Votre script peut donc considérer que les cibles du widget
constituent la sélection courante et agir dessus :

```python
import unreal

# S'exécute avec les cibles du bouton déjà sélectionnées.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

Sur une bascule, c'est l'état *vers lequel* on vient de basculer qui exécute son script — une bascule IK/FK peut exécuter
une logique de correspondance/alignement à chaque transition, dans chaque sens.

## Création et stockage \{#authoring-and-storage}

Modifiez le script dans le champ **Script Python** de l'Éditeur d'attributs, le widget étant sélectionné en
mode édition, ou depuis Blueprint via `GetPythonScript` / `SetPythonScript` (bouton de sélection) et
`GetPythonScriptForState` / `SetPythonScriptForState` (bascule).

Dans le fichier de page enregistré, le script est stocké encodé en Base64 — un détail de transport, pas une mesure de sécurité.
Il est en clair dans l'interface de l'éditeur, dans Blueprint et en mémoire, et il s'exécute avec tous les privilèges Python
de l'éditeur. **Ne chargez que des pages provenant de sources de confiance**, le même critère que pour n'importe quel
script d'éditeur, et traitez les fichiers de page partagés comme du code lorsque vous les relisez.
