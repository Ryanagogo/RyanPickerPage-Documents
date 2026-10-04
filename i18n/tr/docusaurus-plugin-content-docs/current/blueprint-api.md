---
sidebar_position: 16
---

# Blueprint API \{#blueprint-api}

Eklentinin betik arayüzü baştan sona tek bir düzeni izler: statik düğümlerden oluşan **fonksiyon kütüphaneleri** —
her widget'ın sahip olduğu şeyler için ortak bir kütüphane, ayrıca yalnızca o türün sahip olduğu şeyler için
widget türü başına bir kütüphane. Her fonksiyon widget'ı `DefaultToSelf` ile `Target` olarak alır — bir widget
Blueprint'inin kendi grafiği içinde düğümler kendilerini `self`'e bağlar.

## Ortak fonksiyonlar — tüm widget türleri \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, kategori `Ryan Picker Page|Widget`:

| Fonksiyon | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | tuval geometrisi |
| `GetRotation` / `SetRotation` | derece, [0, 360) aralığına sarılır |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | [yuvarlama zincirinin](./attribute-editor-and-outliner#corner-radius) widget başına düzeyi |
| `GetWidgetName` / `SetWidgetName` | sayfada benzersiz ad |
| `GetCurrentControlRig` | sahip sayfanın geçerli rig'i |
| `GetActorFromGUID` | bir aktör kimliğini sayfa üzerinden çözümler |

## Türe özgü fonksiyonlar \{#per-type-functions}

Her widget türünün kendi kütüphanesi kendi sayfasında belgelenmiştir:

| Kütüphane | Kategori | Başvuru |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [Seçim Butonu](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D Slider](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D Slider](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [Anahtar](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [Etiket](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [Görsel](./widget-image#scripting) |

## Olay kancaları \{#event-hooks}

Dört etkileşimli widget türünün her biri `BlueprintNativeEvent` kancalarından oluşan bir Blueprint arayüzü sunar —
C++ olmadan davranış eklemek için bunları bir Blueprint alt sınıfında uygulayın:

| Arayüz | Türe özgü olaylar |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | aynı dördü, 2D değerle |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

Dördü de her etkileşimli türün paylaştığı üç **yaşam döngüsü olayını** devralır:

- `OnWidgetSelected(bool)` — Düzenleme Modu seçimi değişti
- `OnWidgetHighlighted(bool)` — üzerine gelme durumu değişti
- `OnWidgetEditModeChanged(bool)` — sayfa Düzenleme Moduna girdi/çıktı

Etiketlerin ve Görsellerin kanca arayüzü yoktur — üzerlerinde tıklanabilir bir şey yoktur — ancak ortak
fonksiyon kütüphanesi onları da kapsar.

## Özel widget Blueprint'leri \{#custom-widget-blueprints}

En derin genişletme noktası: **Blueprint'te bir widget türünden alt sınıf türetin; sayfa onu kendi başına
birinci sınıf bir widget türü olarak ele alır.**

1. Üst sınıfı yerel yaprak widget sınıflarından biri olan bir Blueprint sınıfı oluşturun
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider`, …).
2. Davranışınızı eklemek için kanca arayüzünün olaylarını uygulayın — `OnToggleStateChanged` üzerinde ek
   görseller, `OnSelectButtonClicked` üzerinde özel mantık, çekim ne gerektiriyorsa.
3. Sınıfınız tuvalin sağ tık menüsünde **Özel Widget'lar** altında, temel türüne göre gruplanmış olarak
   otomatik olarak görünür.

Özel widget'lar her şeyi devralır — kaydetme/yükleme, geri alma, Öznitelik Editörü, hizalama/ayna araçları,
hedefleme — çünkü sayfa bir yaprak türün her alt sınıfını o tür olarak tanır. Özel bir widget kullanan sayfalar,
Blueprint'in sınıf yolunu kayıt dosyasına yazar; böylece Blueprint'i içeren her projede
doğru şekilde yeniden yüklenir.

Blueprint alt sınıfını gerektirmeyen tıklama anı davranışları için çoğu zaman basit bir
[widget üzerindeki Python betiği](./python-scripting) yeterlidir.
