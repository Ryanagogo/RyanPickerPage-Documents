---
sidebar_position: 10
---

# Pozu Yansıtma \{#mirror-pose}

*Sayfaya sol/sağ simetrisini bir kez öğretin; düzenleri sonsuza dek yansıtın.*

[Ayna aracı](./editing-tools#mirror), o anda seçili olanı seçtiğiniz çapaya göre
yansıtır — tek seferlik çevirmeler için uygundur, ancak hangi widget'ların birbirine karşılık geldiğini
bilmez. **Pozu Yansıtma** bunu bir **Pose Map** ile çözer: hangi widget'ın hangisinin sol taraftaki eşi olduğunu,
orta çizginin nerede olduğunu ve bütünü hangi widget'ın sabitlediğini kaydeden sayfa düzeyinde bir kayıt.
Eşleme bir kez yapıldığında düzeni yansıtmak her seferinde tek tıklamadır; seçim
akrobasisine gerek kalmaz.

## Pose Map \{#the-pose-map}

**Pose Map…** iletişim kutusunda (Dosya menüsü) oluşturulur. Her sayfanın tam olarak bir map'i vardır ve üç
tür kayıt içerir:

- **Çapa** — yansıma eksenini (kendi merkezini) tanımlayan tek widget. Genellikle sayfanın
  orta çizgisinde duran bir kök/pelvis butonudur. Bir Çapa ayarlanmadan hiçbir şey yansıtılmaz —
  aksi halde Poz butonu bir bildirimle uyarır.
- **Merkez widget'ları** — omurga, baş, orta çizgideki her şey. Kendi üzerlerine yansıtılırlar
  (eksen üzerinde yerinde çevrilirler).
- **Çiftler** — Sol/Sağ widget çiftleri: sol uyluk ↔ sağ uyluk vb.

İletişim kutusundaki widget açılır listeleri alfabetik sıralıdır ve aranabilir; böylece büyük bir sayfayı eşlemek
kaydırmak yerine yazarak filtrelemekten ibarettir. Bir **Map'i Sıfırla** butonu (onaylı) tüm
map'i temizler. Map sayfa dosyasının içine kaydedilir, böylece düzenle birlikte taşınır.

## Kullanım \{#using-it}

Araç çubuğundaki Ayna satırında, Mirror Horizontal/Vertical butonlarından sonra bir **Poz** butonu ve bir yön
açılır listesi bulunur.

**Bir seçimle** — **Poz**'a tıklamak, seçili her widget'ı map'teki rolüne göre yansıtır:
bir Sol veya Sağ widget'ın konumu ve dönüşü Çapa'nın eksenine göre yansıtılır ve
*eşine* yazılır (seçili taraf kaynaktır ve hareket etmez); Merkez ve
Çapa widget'ları yerinde çevrilir. Map'te bulunmayan seçili widget'lar bir bildirimle atlanır,
geri kalanlar işlenir.

**Hiçbir şey seçili değilken** — tüm map, açılır listede belirtilen yönde tek tıklamayla yansıtılır
(varsayılan olarak **Sol → Sağ** veya **Sağ → Sol**): Çapa ve her Merkez widget'ı
yerinde çevrilir ve her Çift kaynak tarafını hedef tarafına kopyalar. Bu,
"Sol kolu bitirdim, sağ kolu da bas" butonudur.

Yön açılır listesi geçici bir sayfa kontrolüdür — dosyayla birlikte kaydedilmez.

## Neyi değiştirir, neyi değiştirmez \{#what-it-changes--and-doesnt}

Pozu Yansıtma **widget geometrisini** taşır: tuval üzerindeki konum ve dönüş. Ayna aracı gibi,
widget'ların neye bağlı olduğuna dokunmaz — sağ uyluk butonunuz sağ uyluğu yönlendirmeye devam eder;
yalnızca sol olanın bulunduğu yere tam olarak, yansıtılmış biçimde yerleştirilir. Amaç da budur:
hedefleri bir kez belirleyin, ardından düzen geliştikçe iki tarafı görsel olarak uyumlu tutun.
