---
sidebar_position: 17
---

# Python ile Betik Yazma \{#python-scripting}

*Editör Python'unu bir tıklamaya bağlayın — Blueprint alt sınıfı yok, derleme yok.*

[Seçim butonları](./widget-select-button) isteğe bağlı bir Python betiği taşır;
[anahtarlar](./widget-toggle) ise **her durum için** bir tane taşır. Betik, widget Canlı Modda her tıklandığında
editörün Python ortamında (standart `unreal` modülü ve Python Editor Script Plugin'in sunduğu diğer her şey)
çalışır.

## Çalışma sırası \{#execution-order}

Betik, tıklamanın seçim işi bittikten **sonra** çalışır — kontroller seçilmiş, aktörler
seçilmiş, bir anahtarın durumu zaten değişmiştir. Bu nedenle betiğiniz widget'ın hedeflerinin
mevcut seçim olduğunu varsayabilir ve onlar üzerinde işlem yapabilir:

```python
import unreal

# Butonun hedefleri zaten seçiliyken çalışır.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

Bir anahtarda, az önce *geçilen* durumun betiği çalışır — bir IK/FK anahtarı her geçişte, her iki yönde de
eşleştirme/hizalama mantığı çalıştırabilir.

## Yazma ve saklama \{#authoring-and-storage}

Betiği, widget Düzenleme Modunda seçiliyken Öznitelik Editörü'ndeki **Python Betiği** alanında
veya Blueprint'ten `GetPythonScript` / `SetPythonScript` (Seçim Butonu) ve
`GetPythonScriptForState` / `SetPythonScriptForState` (Anahtar) ile düzenleyin.

Kaydedilen sayfa dosyasında betik Base64 ile kodlanmış olarak saklanır — bu bir aktarım ayrıntısıdır, güvenlik önlemi değildir.
Editör arayüzünde, Blueprint'te ve bellekte düz metindir ve editörün tüm Python yetkileriyle
çalışır. **Sayfaları yalnızca güvendiğiniz kaynaklardan yükleyin** — herhangi bir editör betiğine uyguladığınız
standartla aynı — ve paylaşılan sayfa dosyalarını incelerken onlara kod gibi davranın.
