---
sidebar_position: 8
---

# Görsel \{#image}

*Tuval üzerindeki görseller — karakter portreleri, vücut şemaları, arka planlar.*

Görseller iyi bir picker'ın görsel temelidir: butonların arkasındaki bir karakter turnaround'u veya vücut silüeti,
soyut bir buton ızgarasını bir bakışta okunabilen bir şeye dönüştürür.
[Etiketler](./widget-label) gibi Canlı Modda tıklama davranışları yoktur ve üç varsayılan grubun en arkadaki olan
**Görseller** [Katman Grubu](./editing-tools#layer-groups) içinde başlarlar — böylece yeni eklenen bir Görsel,
grupları daha sonra kendiniz yeniden sıralamadığınız sürece etkileşimli bir kontrolün üzerini örtmez.

## Kırpma kaydırma/yakınlaştırma \{#crop-panzoom}

Dokuları bir görsel düzenleyicide önceden kırpmak yerine onları sayfada çerçeveleyin: **Image Scale**
kaynak dokuya yakınlaştırır ve **Image Offset** görünür pencereyi onun üzerinde kaydırır. Tek bir
karakter sayfası, her biri farklı bir vücut bölümünü çerçeveleyen bir düzine Görsel widget'ını besleyebilir. Aynı
iki kontrol, bir Etiketin arka plan görselinde de bulunur.

## Oluşturma \{#authoring}

- **Doku**
- **Germe Modu** — dokunun widget'ın dikdörtgenine nasıl sığdırılacağı
- **Image Scale** / **Image Offset** — kırpma penceresi
- **Arka plan rengi** — dokunun arkasında durur; **Görsel Alfa**'nın karıştığı renk de budur
- **Görsel Alfa** — dokunun arka plan rengi üzerindeki opaklığı, 0–1
- Köşe yarıçapı (Etiketlerde olduğu gibi varsayılan olarak keskin)
- Ortak konum/boyut/döndürme bloğu

## Çizim \{#rendering}

Görseller ve Etiketler, düz bir doku fırçası yerine ortak tek bir materyalin dinamik bir örneği
(`M_RyanPickerRoundedImage`) üzerinden çizilir. Köşe yuvarlama, germe moduna göre sığdırma
ve kırpma penceresinin tümü bu tek materyal geçişinde hesaplanır — bu yüzden iki
tür piksel düzeyinde aynı davranır ve kırpmanın ek bir maliyeti yoktur.

## Betik Yazma \{#scripting}

`URyanPickerImageFunctionLibrary` (kategori `Ryan Picker Page|Image`):

| Fonksiyon | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | kırpma kaydırma/yakınlaştırma |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | 0–1 aralığına sınırlı |

Olay kancası arayüzü yoktur; [ortak widget fonksiyonları](./blueprint-api) geçerlidir.
