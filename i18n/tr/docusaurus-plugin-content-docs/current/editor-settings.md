---
sidebar_position: 15
---

# Editör Ayarları \{#editor-settings}

**Dosya → Settings…**, eklentinin genel ayarlar iletişim kutusunu açar. Bunlar, açtığınız her sayfaya uygulanan
**makineye özgü** tercihlerdir; sayfaya özgü Class Defaults'tan (sayfa Blueprint'inde kaydedilir) ve
dosyaya özgü verilerden (sayfa dosyasında kaydedilir) farklıdır.

## Yeni widget davranışı \{#new-widget-behavior}

| Ayar | Varsayılan | |
|---|---|---|
| Seed New Widget Targets From Selection | açık | yeni butonlar/slider'lar hedeflerini mevcut seçimden önceden doldurur — bkz. [Hedefler nasıl atanır](./control-rig-and-targets#how-targets-get-assigned) |
| Default Interactive Selection Mode | kapalı | yeni Seçim Butonları [Etkileşimli Seçim Modunda](./widget-select-button#interactive-selection-mode) başlar |
| Varsayılan Yeni Widget Boyutu | 200 × 100 | bir **Override** onay kutusuyla — kapalıyken sayfanın kendi Class Defaults değeri geçerlidir; açıkken bu iletişim kutusunun değeri onun yerini alır |
| Varsayılan Köşe Yarıçapı | 10 | aynı Override onay kutusu düzeni; [yuvarlama zincirindeki](./attribute-editor-and-outliner#corner-radius) genel yedek değer |

## Sticky Defaults kategorileri \{#sticky-defaults-categories}

Yedi onay kutusu — **Renk, Yazı Tipi, Köşe Yarıçapı, Boyut, Döndürme, Metin, Görsel**, varsayılan olarak hepsi
açık — [Copy to Sticky Defaults](./editing-tools#widget-defaults) komutunun yeni widget'lara
gerçekte hangi özellik gruplarını taşıyacağını belirler.
Örneğin sticky defaults'u tamamen görsel hale getirmek için Boyut ve Döndürme'yi kapatın.

## Sayfa ve bakım \{#page--housekeeping}

| Ayar | Varsayılan | |
|---|---|---|
| Varsayılan Yer İmi Sayısı | 4 | yeni bir sayfadaki kullanıcı [yer imi](./bookmarks) yuvaları (en fazla 8) |
| Geri Al Yığını Derinliği | 30 | ana sayfa geri alma/yineleme adımları |
| Oturum Durumu Maksimum Yaşı | 90 gün | bundan eski [oturum durumu](./save-load-and-files#session-state) kayıtları temizlenir; 0 temizlemeyi devre dışı bırakır |

## Geçersiz kılma düzeni \{#the-override-pattern}

Sayfa Class Defaults'ı olarak da var olan değerler (widget boyutu, köşe yarıçapı) için bu iletişim kutusu
bilerek geri planda kalır: Buradaki ilgili **Override** onay kutusunu işaretleyene kadar sayfa Blueprint'inin
Class Defaults değerleri geçerlidir. Bu, paylaşılan bir sayfa Blueprint'inin ayarlarını varsayılan olarak korurken
tek bir makinenin kendi değerlerinde ısrar etmesine de izin verir.
