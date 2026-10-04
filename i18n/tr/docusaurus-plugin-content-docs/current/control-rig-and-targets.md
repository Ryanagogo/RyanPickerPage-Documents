---
sidebar_position: 12
---

# Control Rig ve Hedef Aktörler \{#control-rig--target-actors}

*Bir widget'ın neye "bağlı" olduğu ve bu bağlantının oturumlar, sekanslar ve yeniden oluşturmalar boyunca nasıl korunduğu.*

Widget'lar asla katı nesne referansları tutmaz. **Adları ve kimlikleri** — Control Rig kontrol adlarını,
aktör kimliklerini — saklar ve tıkladığınız anda bunları editörün güncel durumuna göre çözümler. Bu
dolaylılık, kaydedilmiş tek bir sayfanın editör yeniden başlatmalarında, farklı seviyelerde ve
Sequencer'ın aktör yaşam döngüsü boyunca çalışmaya devam etmesini sağlar.

## Geçerli Control Rig \{#the-current-control-rig}

Her sayfa sekmesinin, başlıktaki açılır listeden seçilen bir **geçerli Control Rig**'i vardır. Açılır liste,
**odaktaki Level Sequence** içinde bağlı rig'leri listeler ve kendini günceller: picker açıkken farklı bir
sekansa geçin, liste yeniden oluşturulur — o rig hâlâ bağlıysa seçiminiz korunur,
yalnızca tek bir rig varsa otomatik olarak seçilir.

Widget'lardaki kontrol adları bu rig'e göre çözümlenir. Bu nedenle aynı sayfa, rig'in kontrol adlandırmasını
paylaşan her karakteri yönlendirir — tek bir iki ayaklı sayfası oluşturun ve tüm kadro için kullanın.
([Etiketler](./widget-label), animatörlerin bir sekmenin hangi karakteri yönlendirdiğini her zaman bilmesi için geçerli rig'in adını
gösterebilir.)

## Hedef aktörler \{#target-actors}

Widget'lar rig kontrolleri yerine veya onlarla birlikte **aktörleri** de hedefleyebilir. Bir buton aynı anda
bir dekor nesnesini, bir kamerayı ve bir rig kontrolünü seçebilir; bir slider bir aktörün dönüşüm kanalını doğrudan
yönlendirerek tıpkı elle yapılan animasyon gibi Sequencer'a auto-key yazabilir.

### Sequencer spawnable'ları \{#sequencer-spawnables}

Sıradan seviye aktörleri kararlı aktör GUID'leriyle tanımlanır. **Asıl tuzak spawnable'lardır**:
Sequencer onları her oturumda *yeni* bir aktör GUID'iyle yeniden oluşturur; bu da eskisine göre kaydedilmiş
her sayfayı sessizce bozardı. Bu yüzden her widget'taki her aktör ataması iki kimliği
paralel olarak saklar — aktör GUID'i *ve* yeniden oluşturmalar arasında kararlı kalan, aktörün Sequencer
**binding GUID'i**. Çözümleme önce aktör GUID'ini dener, ardından binding'e başvurur. Bunu asla
yönetmeniz gerekmez; spawnable ağırlıklı sayfaların gelecek hafta da çalışmasının nedeni budur.

## Hedefler nasıl atanır \{#how-targets-get-assigned}

Düzenleme Modunda, bir widget seçiliyken:

- **Oluştururken doldurma** (varsayılan, [yapılandırılabilir](./editor-settings)): yeni bir widget'ın hedef listesi,
  onu eklediğiniz anda seçili olan kontrol/aktörlerle önceden doldurulur. Viewport'ta seçin →
  Add Widget; oluşturma işleminin tamamı bundan ibarettir.
- Öznitelik Editörü'nün hedef alanları çözümlenmiş, okunabilir bir özet gösterir — GUID'ler değil, gerçek aktör
  ve kontrol adları — böylece bağlantıları bir bakışta doğrulayabilirsiniz. Bozuk referanslar
  (silinmiş aktörler, yeniden adlandırılmış kontroller) sayfada hata oluşturmak yerine hiçbir şeye çözümlenmez.

## İki seçim felsefesi \{#two-selection-philosophies}

[Seçim Butonları](./widget-select-button) iki klasik picker davranışını da sunar:
**seçim kümeleri** (bir tıklama seçimi kayıtlı kümeyle değiştirir) ve **Etkileşimli
Seçim Modu** (butonlar editör seçimini sürekli yansıtır ve tıklamalar ekleme yapar — tam davranış için
Seçim Butonu sayfasına bakın). Seçimin toplanması bilinçli olarak
rig'den bağımsızdır: doldurma ve etkileşimli eşleştirme, yalnızca açılır listedeki geçerli rig'e ait kontrolleri değil,
editördeki gerçek seçiminizi dikkate alır.
