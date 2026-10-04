---
sidebar_position: 5
---

# 2D Slider \{#2d-slider}

*Sürüklenebilir tek tutamaç, iki dönüşüm kanalı.*

## Canlı Modda \{#in-live-mode}

Bir 2D Slider bir pad'dir: tutamacını sürüklemek X eksenini bir dönüşüm kanalına,
Y eksenini ise başka bir kanala, aynı anda, atanmış her kontrol/aktör üzerinde yazar. Tipik kullanımlar
ayak basışı için bir Öteleme X / Öteleme Y pad'i veya göz yönü için bir Döndürme X / Döndürme Y pad'idir.

[1D Slider](./widget-1d-slider) ile aynı kanal disiplinini izler: her eksen
hedef üzerinde yalnızca kendi kanalını değiştirir; böylece bir 2D pad, aynı kontrolün kalan kanallarını
yönlendiren diğer slider'larla bir arada var olabilir. Auto-key geçerlidir. **Başlangıç Değerine Sıfırla** burada da
sağ tık menüsündedir.

## Değer modeli \{#value-model}

1D Slider ile aynıdır ancak iki boyutludur: **Min Değer/Maks Değer** eksen başına çiftlerdir, **Current
Value** canlı 2D değerdir, **Başlangıç Değeri** ise sürüklemeden etkilenmeyen, belirlenmiş varsayılandır. **Adım Boyutu**
ve **Kilitli** aynı şekilde davranır.

İki kanal birbirinden bağımsız seçilir (**Aktif Channel X**, **Aktif Channel Y**). Her iki ekseni de
*aynı* kanala ayarlamak neredeyse her zaman bir yapılandırma hatasıdır; bu nedenle Öznitelik Editörü,
iki eksenin tek bir değer için sessizce çekişmesine izin vermek yerine bunu bir uyarı şeridiyle işaretler.

## Oluşturma \{#authoring}

Öznitelik Editörü alanları: etiket/ad, eksen başına Min/Maks, Geçerli/Başlangıç değerleri, Aktif Channel X
ve Y (aynı kanal uyarısıyla), tutamaç rengi, gömük tutamaç stili, kilitli, adım boyutu,
hedef ataması ve ortak konum/boyut/döndürme/köşe yarıçapı bloğu.

## Betik Yazma \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (kategori `Ryan Picker Page|2DSlider`):

| Fonksiyon | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, eksen başına |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | hedefler |

Blueprint alt sınıfları `BI_RyanPicker2DSlider` arayüzünü uygulayabilir: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
ayrıca [ortak yaşam döngüsü olayları](./blueprint-api#event-hooks).
