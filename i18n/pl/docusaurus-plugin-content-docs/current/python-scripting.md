---
sidebar_position: 17
---

# Skrypty w Pythonie \{#python-scripting}

*Podepnij Pythona edytora pod kliknięcie — bez podklasy Blueprint, bez kompilacji.*

[Przyciski wyboru](./widget-select-button) mają jeden opcjonalny skrypt w Pythonie;
[przełączniki](./widget-toggle) mają po jednym **na każdy stan**. Skrypt działa w środowisku Pythona edytora
(standardowy moduł `unreal` i wszystko inne, co oferuje Python Editor Script Plugin)
za każdym razem, gdy widget zostanie kliknięty w trybie Live.

## Kolejność wykonywania \{#execution-order}

Skrypt uruchamia się **po** zakończeniu zaznaczania wywołanego kliknięciem — kontrolki zaznaczone, aktorzy
zaznaczeni, stan przełącznika już zmieniony. Twój skrypt może więc założyć, że cele widgetu
stanowią bieżące zaznaczenie, i na nich działać:

```python
import unreal

# Uruchamia się, gdy cele przycisku są już zaznaczone.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

W przełączniku uruchamia się skrypt stanu, *na który* właśnie przełączono — przełącznik IK/FK może wykonywać
logikę dopasowania/przyciągania przy każdym przejściu, w każdą stronę.

## Tworzenie i przechowywanie \{#authoring-and-storage}

Edytuj skrypt w polu **Skrypt Python** w Edytorze atrybutów, gdy widget jest zaznaczony w
trybie edycji, albo z Blueprintu przez `GetPythonScript` / `SetPythonScript` (przycisk wyboru) oraz
`GetPythonScriptForState` / `SetPythonScriptForState` (przełącznik).

W zapisanym pliku strony skrypt jest przechowywany w kodowaniu Base64 — to szczegół transportowy, a nie zabezpieczenie.
W interfejsie edytora, w Blueprincie i w pamięci jest zwykłym tekstem i działa z pełnymi uprawnieniami Pythona
edytora. **Wczytuj strony tylko z zaufanych źródeł** — według tego samego standardu, który stosujesz do każdego
skryptu edytora — i podczas przeglądu traktuj udostępnione pliki stron jak kod.
