---
sidebar_position: 2
---

# Başlarken \{#getting-started}

## Sayfa açma \{#opening-a-page}

**Tools → Ryan Picker Page**, yeni bir editör sekmesinde bir sayfa açar. Sayfa başlığındaki **New Tab** butonu
daha fazlasını açar — her sekme tamamen bağımsızdır; kendi dosyası, kendi Control Rig seçimi ve kendi
tuval görünümü vardır. Bir sayfayı yeniden adlandırmak (başlığı Düzenleme Modunda düzenlenebilir) sekmesini de yeniden adlandırır;
böylece açık picker'larla dolu bir ekranda bile yolunuzu bulabilirsiniz.

## İki mod \{#two-modes}

Başlıktaki Düzenleme Modu butonu tüm sayfayı şu iki mod arasında değiştirir:

**Canlı Mod** — animasyon modu. Widget'lara tıklamak rig kontrollerini ve aktörleri seçer; slider'ları sürüklemek
dönüşümleri yönlendirir; bir widget'ın üzerine gelindiğinde neye bağlı olduğunu gösteren bir ipucu görünür. Düzenin
kendisine dokunulamaz.

**Tamamlanmış bir sayfa ömrünü Canlı Modda geçirir.** [Düzenleme ve Tuval Araçları](./editing-tools)
altındaki her şey sizi buraya getirmek için vardır.

**Düzenleme Modu** — oluşturma modu. Widget'larda taşıma/yeniden boyutlandırma/döndürme tutamaçları belirir, tuvalin
boş bir yerine sağ tıklamak **Add Widget** menüsünü açar ve iki daraltılabilir kenar çubuğu görünür: solda
[Outliner](./attribute-editor-and-outliner), sağda
[Öznitelik Editörü](./attribute-editor-and-outliner).

## İlk sayfanızı oluşturun \{#build-your-first-page}

Tek bacak için en basit picker, baştan sona:

1. Karakterinizi ve Control Rig'ini içeren bir Level Sequence açın, ardından bir picker sayfası açın.
   Başlıktaki rig açılır listesi odaktaki sekanstan kendiliğinden dolar — rig'inizi seçin (yalnızca bir tane varsa
   otomatik olarak seçilir).
2. **Düzenleme Moduna** girin.
3. Viewport'ta veya Anim Outliner'da uyluk kontrolünü seçin. Tuvale sağ tıklayın →
   **Add Widget → Seçim Butonu**. Varsayılan olarak yeni bir buton hedef listesini
   mevcut seçimden alır; yani bu buton zaten uyluğu yönlendirir.
4. Baldır ve ayak için tekrarlayın. Her butona ad vermek için
   [Öznitelik Editörü](./attribute-editor-and-outliner)'ndeki etiket alanını kullanın ve onları
   bacak biçiminde bir sütuna sürükleyin.
5. Üçünü birden seçin ve sütunu düzeltmek için [Hizalama araçlarını](./editing-tools) deneyin.
6. Düzenleme Modundan çıkın. Butonlara tıklayın — her biri kendi kontrolünü seçer. Temel döngü budur; geri kalan her şey
   ince ayardır.
7. **Dosya → Kaydet**, sayfayı istediğiniz herhangi bir yere bir JSON dosyası olarak yazar — bkz.
   [Kaydetme, Yükleme ve Dosyalar](./save-load-and-files).

## Geri alma, yineleme ve güvenlik ağları \{#undo-redo-and-safety-nets}

Düzenleme Modundaki her değişiklik — taşıma, yeniden boyutlandırma, ekleme, silme, yapıştırma, renk düzenlemeleri —
sayfanın geri alma yığınına eklenir (varsayılan 30 adım; bkz. [Editör Ayarları](./editor-settings)). Ctrl+Z /
Ctrl+Y veya başlıktaki butonlar. Bir renk seçicinin içinde sürükleme, her hareket için ayrı bir adım yerine tek bir geri alma
adımında birleştirilir; böylece bir renk değişikliğini geri almak tüm sürüklemeyi geri alır.

[Yer imlerinin](./bookmarks) kendine ait ayrı bir geri alma yığını vardır — düzen geri alma işlemleri kayıtlı
görünümlerinizi asla bozmaz, tersi de geçerlidir.

## Kaldığınız yerden devam etme \{#picking-up-where-you-left-off}

Plugin, kaydedilen her dosya için tuvalinizin kaydırma/yakınlaştırma durumunu, hangi Control Rig'in etkin olduğunu ve
Düzenleme Modunda mı yoksa Canlı Modda mı olduğunuzu hatırlar — bunların tümü o dosya bu makinede bir sonraki
yüklendiğinde otomatik olarak geri yüklenir. Bu bilgiler sayfa dosyasının dışında tutulur; dolayısıyla bir sayfayı bir
ekip arkadaşınızla paylaşmak görüntüleme alışkanlıklarınızı değil, düzeni paylaşır. Bkz.
[Kaydetme, Yükleme ve Dosyalar](./save-load-and-files#session-state).
