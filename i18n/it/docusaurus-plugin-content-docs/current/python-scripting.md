---
sidebar_position: 17
---

# Scripting Python \{#python-scripting}

*Collega Python dell'editor a un clic, senza sottoclassi Blueprint e senza compilare.*

I [pulsanti di selezione](./widget-select-button) hanno uno script Python facoltativo;
gli [interruttori](./widget-toggle) ne hanno uno **per stato**. Lo script viene eseguito nell'ambiente Python dell'editor
(il modulo standard `unreal` e tutto ciò che offre il Python Editor Script Plugin)
ogni volta che si fa clic sul widget in modalità Live.

## Ordine di esecuzione \{#execution-order}

Lo script viene eseguito **dopo** che il clic ha completato la selezione: controlli selezionati, attori
selezionati, stato dell'interruttore già cambiato. Lo script può quindi presumere che i target del widget
siano la selezione corrente e agire su di essi:

```python
import unreal

# Viene eseguito con i target del pulsante già selezionati.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

Su un interruttore, viene eseguito lo script dello stato *in cui* si è appena passati: un interruttore IK/FK può eseguire
logica di matching/snapping a ogni transizione, in entrambe le direzioni.

## Creazione e archiviazione \{#authoring-and-storage}

Modifica lo script nel campo **Script Python** dell'Editor degli attributi con il widget selezionato in
modalità di modifica, oppure da Blueprint tramite `GetPythonScript` / `SetPythonScript` (pulsante di selezione) e
`GetPythonScriptForState` / `SetPythonScriptForState` (interruttore).

Nel file della pagina salvato, lo script è memorizzato con codifica Base64: un dettaglio di trasporto, non di sicurezza.
È in chiaro nell'interfaccia dell'editor, in Blueprint e in memoria, e viene eseguito con tutti i privilegi Python
dell'editor. **Carica pagine solo da fonti attendibili**, lo stesso criterio che applicheresti a qualsiasi
script dell'editor, e tratta i file di pagina condivisi come codice quando li esamini.
