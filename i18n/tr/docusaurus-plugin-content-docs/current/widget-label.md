---
sidebar_position: 7
---

# Etiket \{#label}

*Tuval üzerinde metin. Tıklamalar doğrudan içinden geçer.*

Etiketler açıklama içindir: bölüm başlıkları ("SOL KOL"), notlar veya açıklamalı görseller. Canlı Modda
tıklama davranışları ve hedef atamaları yoktur — bu da onları (Görsel ile birlikte, bkz. [Görsel](./widget-image))
çevrelerindeki kontrollerden tıklama çalmadan serbestçe üst üste yerleştirebileceğiniz tek widget
türü yapar.

Bir Etiket, sabit metin yerine **geçerli Control Rig'in adını** canlı olarak gösterebilir — bir sayfa köşesine bir tane
yerleştirin; animatöre bu sekmenin hangi rig'i yönlendirdiğini her zaman gösterir.

## Oluşturma \{#authoring}

- **Metin**, yazı tipi boyutu, yazı tipi rengi, **hizalama**, **otomatik satır kaydırma**
- **Arka plan rengi** ve isteğe bağlı olarak kendi germe modu ve
  [kırpma kaydırma/yakınlaştırması](./widget-image#crop-panzoom) olan bir arka plan **görseli**
- **Görsel Alfa** — o arka plan görselinin arka plan rengi üzerindeki opaklığı, 0–1
- Köşe yarıçapı: Etiketlerin köşeleri varsayılan olarak keskindir (yarıçap 0), ancak diğer tüm türlerle aynı
  [yuvarlama zincirine](./attribute-editor-and-outliner#corner-radius) dahildirler
- Ortak konum/boyut/döndürme bloğu

Etiketler arka planlarını [Görsel](./widget-image#rendering) ile aynı yuvarlatılmış köşe materyaliyle çizer;
bu nedenle yuvarlama ve görsel kırpma her ikisinde de aynı şekilde davranır.

## Betik Yazma \{#scripting}

`URyanPickerLabelFunctionLibrary` (kategori `Ryan Picker Page|Label`):

| Fonksiyon | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | arka plan görseli |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | kırpma kaydırma/yakınlaştırma |
| `GetImageAlpha` / `SetImageAlpha` | 0–1 aralığına sınırlı |

Etiketlerin olay kancası arayüzü yoktur — tıklanacak ya da sürüklenecek bir şey yoktur — ancak tüm
[ortak widget fonksiyonları](./blueprint-api) (konum, boyut, döndürme, köşe yarıçapı, ad)
geçerlidir.
