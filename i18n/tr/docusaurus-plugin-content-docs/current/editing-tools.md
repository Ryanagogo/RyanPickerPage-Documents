---
sidebar_position: 9
---

# Düzenleme ve Tuval Araçları \{#editing--canvas-tools}

Bu sayfadaki her şey **Düzenleme Modunda** gerçekleşir. Tuvalin kendisi her iki modda da kaydırılabilir ve
yakınlaştırılabilir — hangi büyütme rahatsa onunla çalışın.

## Seçim \{#selection}

- Seçmek için bir widget'a tıklayın; Shift/Ctrl+tıklama seçimi genişletir.
- Seçim dikdörtgeni çizmek için tuvalin boş bir yerinde sürükleyin.
- Seçili widget'lar, her birinin kendi imleci olan sekiz yeniden boyutlandırma tutamacı ve bir döndürme tutamacı gösterir.

Öznitelik Editörü tekli seçimi izler; birçok widget'ı aynı anda düzenlemenin yolu aşağıdaki araç çubuğu
araçlarıdır.

## Doğrudan düzenleme \{#direct-manipulation}

Taşımak için bir widget'ı sürükleyin. Yeniden boyutlandırmak için bir tutamacı sürükleyin — yeniden boyutlandırma döndürülmüş
widget'larda da doğru çalışır. Bir widget'ı merkezi etrafında döndürmek için döndürme tutamacını sürükleyin; döndürme
derece cinsinden saklanır ve döndürülmüş widget'lar Canlı Modda tamamen işlevsel kalır (döndürülmüş bir slider
döndürülmüş ekseni boyunca sürüklenir). 15°'lik adımlara oturtmak için döndürürken Shift'i basılı tutun. Çok widget'lı bir seçimi döndürmek,
tüm grubu ortak bir pivot (son seçilen widget'a sabitlenmiş) etrafında katı biçimde döndürürken
her widget da kendi merkezi etrafında dönmeye devam eder.

Kilitli bir widget bunların hiçbirine dahil olmaz — bkz. [Widget kilitleme](./attribute-editor-and-outliner#widget-locking).

Ok tuşları seçimi küçük adımlarla kaydırır (daha büyük adım için Shift; her iki mesafe de sayfanın Class
Defaults değerleridir). Araç çubuğundaki **Kaydır** aracı, tekrarlanan ve kesin adımlar için kendi sayısal kutusuyla
ayarlanan mesafeye sahip ekran okları ekler.

## Araç çubuğu araçları \{#toolbar-tools}

Aynı anda tek bir araç satırı etkindir ve başlıktan değiştirilir:

| Araç | Seçim üzerinde yaptığı |
|---|---|
| **Görsel** | seçili her widget'a bir doku atar |
| **Renk** | seçili her widget'a bir arka plan/yazı tipi rengi uygular |
| **Etiket** | tüm seçimde etiket metnini ve yazı tipi boyutunu ayarlar |
| **Boyut** | tüm seçimde tam genişlik/yüksekliği ayarlar |
| **Kaydır** | yukarıdaki gibi sabit adımlı oklar |
| **Hizala** | sol/sağ/üst/alt, yatay/dikey merkezler ve eşit dağıtım |
| **Ayna** | aşağıya bakın |

Araç çubuğundan (ve Öznitelik Editöründen) yapılan renk düzenlemeleri, renk seçicinin içinde sürüklerken
birleştirilir — her fare hareketi için değil, her renk oturumu için tek bir geri alma adımı.

## Ayna \{#mirror}

Bir sayfanın bir tarafını diğerinden oluşturur: **Mirror Horizontal** / **Mirror Vertical**, seçili her
widget'ın konumunu bir eksene göre yansıtır ve dönüşünü tersine çevirir. Eksen
**Mirror Mode** açılır listesiyle ayarlanır:

| Mod | Neye göre yansıtır |
|---|---|
| Kendisi | her widget'ın kendi merkezi — widget'lar yerinde çevrilir |
| Son Seçilen (Dahil) | son seçilen widget'ın merkezi; o da hareket eder |
| Son Seçilen (Hariç) | son seçilen widget'ın merkezi; o yerinde kalır |
| Görünür Tuval | o anda gördüğünüz alanın merkezi |

Yansıtma yalnızca geometriktir — kontrolleri yeniden adlandırmaz veya slider kanallarını değiştirmez. Olağan
iş akışı önce yansıt, sonra yeniden hedefle'dir: sol kolun widget'larını yansıtın, ardından kopyaları sağ taraftaki
kontrollere yönlendirin. Eşleşmeleri hatırlayan, tekrarlanabilir sol/sağ yansıtma için bkz.
[Pozu Yansıtma](./mirror-pose).

## Katman grupları \{#layer-groups}

Her widget bir **Katman Grubuna** aittir ve çizim sırası, öndan arkaya doğru grup grup
her grubun üyelerinden ibarettir. Üç grup — **Görseller**, **Etiketler**, **Kontroller** — her sayfada
oluşturulur ve silinemez (başka herhangi bir grubu silmek, üyelerini türlerinin varsayılan grubuna
geri atar). Bu üçünün ötesinde istediğiniz kadar grup oluşturabilir, yeniden adlandırabilir, yeniden sıralayabilir ve kilitleyebilirsiniz —
kilitli bir grup, tek bir widget'taki [Widget kilitleme](./attribute-editor-and-outliner#widget-locking) gibi
içindeki her widget'ı kilitler.

Kendi grubu içinde **Öne Getir / Step Up / Step Down / Arka Plana Gönder** için bir widget'a sağ tıklayın. Bir widget'ı
gruplar arasında taşımak, grupların kendisini yeniden sıralamak ve kilitlemek Outliner'ın
[Katmana Göre görünümünden](./attribute-editor-and-outliner#outliner-left) yapılır — tam sürükle-bırak yönetim arayüzü için
o sayfaya bakın.

## Kopyalama, kesme, yapıştırma \{#copy-cut-paste}

Herhangi bir seçimde Ctrl+C / Ctrl+X / Ctrl+V. Yapıştırılanlar imlecin olduğu yere gelir; açık başka bir sayfa sekmesine
yapıştırmak çalışır ve Yerinde Yapıştır, sayfadan sayfaya aktarımlarda tam konumları korur.
Yapıştırılan widget'lar mümkün olduğunda adlarını korur; çakışmalarda sayısal bir son ek eklenir. Anahtar
Grupları [bütün gruplar halinde](./widget-toggle#toggle-groups) kopyalanıp yapıştırılabilir.

## Widget varsayılanları \{#widget-defaults}

Yeni eklenen bir widget'ın görünümü katmanlıdır, en özgül olan en sondadır:

1. **Class Defaults** — sayfanın Class Defaults panelinde düzenlenebilen, tür başına başlangıç değerleri
   (renkler, boyutlar, yazı tipleri...), her widget türü için bir kategori.
2. **Sticky Defaults** — herhangi bir widget'a sağ tıklayın → **Copy to Sticky Defaults**; o türden sonraki
   widget'lar ona uygun şekilde oluşturulur. Hangi özellik kategorilerinin taşınacağı (renk, yazı tipi, köşe yarıçapı,
   boyut, döndürme, metin, görsel) [Editör Ayarları](./editor-settings)'nda seçilir.

Bunlar yalnızca Add Widget menüsünden eklenen widget'lara uygulanır — yapıştırılan ve yüklenen widget'lar kendi
verilerini korur.
