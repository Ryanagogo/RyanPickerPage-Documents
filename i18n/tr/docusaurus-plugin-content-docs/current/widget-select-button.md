---
sidebar_position: 3
---

# Seçim Butonu \{#select-button}

*İşin yükünü taşıyan: bir şeyleri seçen bir buton.*

## Canlı Modda \{#in-live-mode}

Bir Seçim Butonuna tıklamak, atanmış Control Rig kontrollerini ve hedef aktörlerini — viewport'ta,
rig'de ve bağlı olduğu yerde Sequencer'da — seçer, ardından varsa
[Python betiğini](./python-scripting) çalıştırır. Bir buton tek bir kontrol ya da bütün bir
küme ("tüm parmakları seç") taşıyabilir ve rig kontrollerini düz aktörlerle serbestçe karıştırabilir.

**Ctrl+tıklama** değiştirmek yerine açıp kapatır: butonun hedeflerinin tümü henüz seçili değilse
mevcut seçime eklenir; zaten seçiliyse seçimden çıkarılır — her iki durumda da seçiminizin
geri kalanına dokunulmaz.

## İki seçim davranışı \{#two-selection-behaviors}

Bir Seçim Butonu, Öznitelik Editörü'ndeki **Etkileşimli Seçim Modu** onay kutusuyla değiştirilen
iki moddan birinde çalışır:

### Seçim Kümesi modu (varsayılan) \{#selection-set-mode-default}

Buton kayıtlı bir seçim kümesidir. Tıklama → hedefleri seçim olur. Buton
başka yerlerde neyi seçtiğinizi takip etmez.

### Etkileşimli Seçim Modu \{#interactive-selection-mode}

Buton, geleneksel animasyon picker'larının davrandığı gibi, editör seçiminin canlı bir yansıması
haline gelir:

- Sayfa geçerli viewport/rig seçimini saniyede birkaç kez sorgular ve butonun hedeflerinin tümü
  geçerli seçimin parçası olduğunda **butonu yakar** — kontrolü viewport'ta seçin,
  butonu sayfada kendiliğinden vurgulanır.
- Tıklama **ekleyerek** seçer — butonun hedefleri zaten seçili olanın yerine geçmek yerine ona
  katılır; böylece birkaç etkileşimli butona tıklayarak bir seçim oluşturabilirsiniz.
- Ctrl+tıklama, yukarıdaki gibi butonun hedeflerini seçimden çıkarır.

Bu mod **buton başına bir kontrol (veya bir aktör)** için tasarlanmıştır. Birden fazla hedefi olan
bir butonda etkinleştirmek çalışır ama bir uyarı bildirimi gösterir — çok hedefli bir buton kısmi bir seçimi
belirsizlik olmadan yansıtamaz. Sorgulama yalnızca sayfanın sekmesi ön plandayken ve
Düzenleme Modu kapalıyken çalışır; dolayısıyla arka plandaki sekmelerin hiçbir maliyeti yoktur.

Yeni butonlar [Editör Ayarları](./editor-settings) üzerinden varsayılan olarak iki moddan birinde başlatılabilir.

## Oluşturma \{#authoring}

Buton Düzenleme Modunda seçiliyken Öznitelik Editörü şunları sunar:

- **Etiket** (ve gösterilip gösterilmeyeceği), widget adı, yazı tipi boyutu
- **Arka plan rengi** ve **yazı tipi rengi**
- **Kontrol adları** — sayfanın geçerli rig'ine göre çözümlenir; bkz.
  [Control Rig ve Hedef Aktörler](./control-rig-and-targets)
- **Hedef aktörler** — atanmış her aktörün çözümlenmiş, okunabilir bir özeti
- **Etkileşimli Seçim Modu** onay kutusu
- **Python Betiği** — çok satırlı; her tıklamada seçimden sonra çalışır
- Konum, boyut, döndürme, köşe yarıçapı — tüm widget'larda ortaktır

Yeni butonlar hedef listelerini oluşturulma anında seçili olandan alır (varsayılan olarak açık bir
[ayar](./editor-settings)) — en hızlı oluşturma döngüsü *viewport'ta seç, buton ekle, bitti* şeklindedir.

## Betik Yazma \{#scripting}

Blueprint fonksiyonları `URyanPickerSelectButtonFunctionLibrary` içindedir
(kategori `Ryan Picker Page|SelectControl`); ortak dönüşüm/görünüm fonksiyonları
[ortak widget kütüphanesindedir](./blueprint-api).

| Fonksiyon | |
|---|---|
| `GetControlNames` | atanmış rig kontrol adları |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | atanmış aktörler, her iki kimlik alanında — bkz. [Sequencer spawnable'ları](./control-rig-and-targets#sequencer-spawnables) |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | setter, çok hedefli butonlarda uyarır (engellemez) |

Blueprint alt sınıfları `BI_RyanPickerSelectButton` arayüzünün olaylarını uygulayabilir:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, ayrıca her widget türünün paylaştığı [üç yaşam döngüsü olayı](./blueprint-api#event-hooks).
Bir alt sınıfın Add Widget menüsünde nasıl göründüğü için [Özel widget Blueprint'leri](./blueprint-api#custom-widget-blueprints)
bölümüne bakın.
