---
sidebar_position: 4
---

# 1D Slider \{#1d-slider}

*Tam olarak bir dönüşüm kanalına bağlı bir slider.*

## Canlı Modda \{#in-live-mode}

Slider'ı sürüklemek, değerini atanmış her Control Rig kontrolünün ve hedef aktörün **tek bir kanalına** —
Öteleme, Döndürme veya Ölçek; X, Y veya Z — yazar. Başka hiçbir şeye dokunulmaz:
slider her hedefin mevcut dönüşümünü okur, sahip olduğu tek kanalı değiştirir ve dönüşümü
geri yazar. Değer değişiklikleri, Sequencer auto-key dahil, eklentinin geri kalanıyla aynı uygulama yolundan geçer;
böylece slider hareketleri elle taşınan kontroller gibi key oluşturur.

Bir 1D Slider kendisine ait olmayan kanalları asla sahiplenmediğinden, birkaç slider *aynı* kontrolün farklı
kanallarını yan yana yönlendirebilir — tek bir ayak kontrolündeki bir Öteleme Y "kaldırma" ile bir Döndürme Z "yuvarlanma"
çakışmaz.

Slider'a sağ tıklamak **Başlangıç Değerine Sıfırla** seçeneğini sunar; bu, onu belirlenmiş varsayılana
geri döndürür.

## Değer modeli \{#value-model}

Üç sayı önemlidir ve bunlardan yalnızca ikisi değişir:

- **Min Değer / Maks Değer** — sürüklemenin eşlendiği aralık.
- **Current Value** — canlı değer; sürükleme onu yazar ve hedeflere uygulanan odur.
- **Başlangıç Değeri** — sürüklemenin *asla* dokunmadığı, yazar tarafından belirlenmiş varsayılan. Yalnızca
  Öznitelik Editöründe bilinçli olarak değiştirilir; bu da onu "Başlangıç Değerine Sıfırla" için
  her zaman güvenli bir dönüş değeri yapar.

İsteğe bağlı bir **Adım Boyutu** sürüklemeyi artışlara oturtur, **Kilitli** ise sürüklemeyi tamamen
devre dışı bırakır (çekimin ortasında yanlışlıkla oynatılmasını istemediğiniz bir referans slider'ı için).

## Oluşturma \{#authoring}

Öznitelik Editörü alanları: etiket/ad, Min/Maks/Geçerli/Başlangıç değerleri, **Aktif Channel** (bu slider'ın
yönlendirdiği tek kanal), **Yönelim** (yatay/dikey), çubuk rengi, tutamaç rengi,
çubuk kalınlığı, gömük tutamaç stili, kilitli, adım boyutu — ayrıca [Seçim Butonu](./widget-select-button) ile
paylaşılan hedef atama alanları ve ortak
konum/boyut/döndürme/köşe yarıçapı bloğu.

## Betik Yazma \{#scripting}

`URyanPicker1DSliderFunctionLibrary` (kategori `Ryan Picker Page|1DSlider`):

| Fonksiyon | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | aralık |
| `GetCurrentValue` / `SetCurrentValue` | canlı değer |
| `GetInitialValue` / `SetInitialValue` | belirlenmiş sıfırlama noktası |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | hedefler |

Blueprint alt sınıfları `BI_RyanPicker1DSlider` arayüzünü uygulayabilir: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, ayrıca
[ortak yaşam döngüsü olayları](./blueprint-api#event-hooks).
