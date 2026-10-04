---
sidebar_position: 13
---

# Öznitelik Editörü ve Outliner \{#attribute-editor--outliner}

Düzenleme Modunun iki kenar çubuğu. Her birinin başlıkta kendi açma/kapama düğmesi vardır; böylece ekranda birini, ikisini ya da
hiçbirini tutabilirsiniz.

## Outliner (sol) \{#outliner-left}

Sayfadaki her şeyin listesi — widget'ı seçmek için bir satıra tıklayın, yeniden adlandırmak için çift tıklayın,
taşımak/silmek için sağ tıklayın. Listenin üstündeki butonlarla değiştirilen üç görünüm vardır:

- **Türe Göre** — altı widget türü başlığı altında gruplanır. Günlük kullanım görünümü.
- **Katmana Göre** — çizim sırasına göre [Katman Grubu](./editing-tools#layer-groups) altında gruplanır. Üst üste
  dizilim burada yeniden düzenlenir: bir widget'ı başka bir gruba taşımak için o gruba sürükleyin, yeniden sıralamak için
  grup içinde sürükleyin veya grupları yeniden sıralamak için bir grup başlığının kendisini sürükleyin. Her grup başlığının
  kendi kilit düğmesi vardır ve bağımsız olarak daraltılır.
- **Gruba Göre** — [Anahtar Grupları](./widget-toggle#toggle-groups), üyeleri her adlandırılmış başlığın altında
  iç içe; grupların yeniden adlandırılması da burada yapılır.

Widget adları sayfa başına benzersizdir (büyük/küçük harf duyarsız) — çakışan bir yeniden adlandırma sessizce bozulmak yerine
reddedilir ve geri alınır. En son kullandığınız görünüm oturumlar arasında genel olarak hatırlanır.

## Öznitelik Editörü (sağ) \{#attribute-editor-right}

Seçili widget'ın özellikleri, bir ayrıntılar panelinde. **Tek seferde bir widget'ı**
düzenler — aynı değişikliği birçok widget'a yaymak için bunun yerine
[araç çubuğu araçlarını](./editing-tools#toolbar-tools) kullanın.

Hangi alanların görüneceği widget'ın türüne bağlıdır; her widget sayfası kendi alanlarını belgeler. Ortak
blok — konum, boyut, döndürme, köşe yarıçapı, widget adı — her zaman bulunur.

Bilinmesi gereken iki davranış:

- **Devam eden düzenlemeler seçim değişmeden önce kaydedilir.** Bir alanı düzenlerken başka bir widget'a
  tıklarsanız, bekleyen değer gerçekte düzenlediğiniz widget'a kaydedilir —
  yeni seçilen widget'a sızamaz.
- **2D Slider'ın aynı kanal uyarısı** doğrudan panelde renkli bir şerit olarak görünür — bkz.
  [2D Slider](./widget-2d-slider).

## Köşe yarıçapı \{#corner-radius}

Widget yuvarlaması, en özgül olanın kazandığı üç düzeyli bir zincirle belirlenir:

1. **Widget başına geçersiz kılma** — tek tek widget üzerinde bir "override corner radius" bayrağı ve
   özel bir değer.
2. **Tür başına Class Default** — her widget türü, sayfanın Class Defaults panelinde kendi
   varsayılanını ayarlayabilir.
3. **Genel varsayılan** — buton/slider/anahtar türleri için 10; Etiketler ve Görseller varsayılan olarak
   keskin köşelidir (0). Genel yedek değer [Editör Ayarları](./editor-settings)'ndan ayarlanabilir.

Özelleştirilmemiş widget'lar zinciri canlı olarak izler — tür varsayılanını artırın, o türdeki
geçersiz kılınmamış her widget onunla birlikte güncellenir.

## Widget kilitleme \{#widget-locking}

Herhangi bir widget kilitlenebilir — Öznitelik Editörü'nün kendi onay kutusundan, Outliner'daki satırında
veya grup başlığındaki kilit simgesinden ya da sağ tık menüsündeki **Kilitle**/**Seçimin Kilidini Aç** komutlarıyla.

Kilitleme yalnızca Düzenleme Modunu etkiler: kilitli bir widget orada seçilemez, taşınamaz veya yeniden boyutlandırılamaz ve
taşıma/yeniden boyutlandırma tutamaçları tamamen kaybolur. Canlı Mod ve Outliner listesinin kendisi etkilenmez
— kilitli bir widget Canlı Modda tıklandığında normal şekilde çalışır ve onu Outliner'da hâlâ görebilir ve
yeniden adlandırabilirsiniz. Bir [Katman Grubunu](./editing-tools#layer-groups) Outliner başlığından kilitlemek
tüm üyelerini aynı şekilde kilitler.

Kilitleme, konumlandırmasını bitirdiğiniz ve çevresinde çalışırken yanlışlıkla kaydırmak istemediğiniz widget'lar içindir
— örneğin bir arka plan Görseli veya tamamlanmış bir buton satırı.

## Canlı Mod ipucu \{#live-mode-tooltip}

Canlı Modda herhangi bir widget'ın üzerine gelmek, bağlantılarını özetleyen bir ipucu gösterir — adı ve
hangi kontrolleri/aktörleri yönlendirdiği. Tanımadığınız bir sayfayı Düzenleme Moduna
girmeden incelemenin en hızlı yolu budur.
