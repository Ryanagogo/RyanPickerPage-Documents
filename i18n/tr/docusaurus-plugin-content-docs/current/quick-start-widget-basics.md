# Widget Temelleri \{#widget-basics}

### Widget Oluşturma \{#create-widgets}

- Yeni widget oluşturmak için Düzenleme Modunda olmanız gerekir
- Çeşitli picker widget türlerini oluşturma öğelerini içeren açılır menüyü açmak için tuvalin boş bir bölümüne sağ tıklayın
- Yeni bir widget oluşturduğunuzda, sağ tıkladığınız sırada fare imlecinin bulunduğu yere yerleştirilir.
- Widget oluşturduğunuzda geri alma yığınına bir öğe eklenir; böylece oluşturmayı geri alıp yineleyebilirsiniz

### Widget Silme \{#delete-widgets}

- Widget silmek için Düzenleme Modunda olmanız gerekir
- Seçili tüm widget'ları "Delete" tuşuna basarak silebilirsiniz
- Tek bir widget'ı silmek için widget açılır menüsünü getirmek üzere widget'a sağ tıklayın. Menünün en altında o widget'ı silme öğesini bulursunuz.
- Widget sildiğinizde geri alma yığınına bir öğe eklenir; böylece silme işlemlerini geri alıp yineleyebilirsiniz.

### Widget Seçme \{#select-widgets}

- Widget'ları hem Canlı Modda hem de Düzenleme Modunda seçebilirsiniz
- Widget'ları üzerlerine tıklayarak veya etraflarına bir kutu çizerek seçebilirsiniz
- Canlı Modda bazı widget'lar seçilemez:
  - Etiket widget'ları
  - Görüntü widget'ları
- Düzenleme Modunda tüm widget'lar seçilebilir
  - Outliner'da widget'ları seçilemez olacak şekilde kilitleyebilirsiniz. Bu, üst üste yığılmış birden fazla widget'ınız olduğunda kullanışlıdır.
- Widget'ların seçilme sırası hatırlanır. Seçim sırası Düzenleme Modundaki bazı özellikler tarafından kullanılır

### Widget Dönüştürme \{#transform-widgets}

- Widget'ları dönüştürmek için Düzenleme Modunda olmanız gerekir
- **Taşıma**
  - Bir veya daha fazla widget seçiliyken, fare imleci taşıma imlecine dönüşecek şekilde fareyi seçili widget'lardan birinin üzerine getirin. Ardından tıklayıp sürükleyebilirsiniz; seçili tüm widget'lar fareyle birlikte hareket eder.
- **Döndürme**
  - Fare widget'ın üzerindeyken ve imleç taşıma imleciyken Alt tuşunu basılı tutmak imleci döndürme imlecine çevirir. Ardından tıklayıp sürükleyebilirsiniz; seçili tüm widget'lar son seçilen widget'ın etrafında yumuşak bir şekilde döner.
  - Alt ve Shift tuşlarının ikisini birden basılı tutarsanız döndürme 15 derecelik adımlarla gerçekleşir
- Widget'ları dönüştürdüğünüzde geri alma yığınına bir öğe eklenir; böylece dönüşümleri geri alıp yineleyebilirsiniz.

### Widget'ları Yeniden Boyutlandırma \{#resize-widgets}

- Widget'ları yeniden boyutlandırmak için Düzenleme Modunda olmanız gerekir
- Fare imlecini bir widget'ın kenarlarından veya köşelerinden birinin üzerine getirdiğinizde imleç kenar ya da köşe yeniden boyutlandırma imlecine dönüşür. Ardından tıklayıp sürükleyerek widget'ı yeniden boyutlandırabilirsiniz.
- Yeniden boyutlandırma yalnızca tek bir widget üzerinde çalışır
- Widget'ları yeniden boyutlandırdığınızda geri alma yığınına bir öğe eklenir; böylece yeniden boyutlandırmayı geri alıp yineleyebilirsiniz.

### Kesme, Kopyalama ve Yapıştırma \{#cut-copy-and-paste}

- Widget'ları kesmek, kopyalamak ve yapıştırmak için Düzenleme Modunda olmanız gerekir
- Seçili widget'ları kesmek, kopyalamak ve yapıştırmak için standart Ctrl + X, Ctrl + C ve Ctrl + V kısayollarını kullanabilirsiniz
- Tek bir widget için, açılır menüyü getirmek üzere widget'a sağ tıklayabilirsiniz. Orada Kes ve Kopyala menü öğelerini bulursunuz
- Ctrl + V widget'ları fare konumuna yapıştırır
- Tuvalin boş bir bölümüne sağ tıklarsanız, açılır menüde iki yapıştırma seçeneği bulursunuz
  - **Yapıştır**
    - Widget'ları fare konumuna yapıştırır
  - **Yerinde Yapıştır**
    - Widget'ları kopyalandıkları veya kesildikleri yere yapıştırır

### Widget Açılır Menüsü \{#widget-popup-menu}

- Widget açılır menülerini görmek için Düzenleme Modunda olmanız gerekir
- Bir widget'a sağ tıkladığınızda bir açılır menü açılır
  - İlk öğeler widget'ın adını ve türünü, kesme ve kopyalama seçenekleriyle birlikte gösterir
  - Son öğe widget'ı silmek içindir
  - Diğer menü öğeleri tıklanan widget'ın türüne özeldir

### Öznitelik Editörü \{#attribute-editor}

- Öznitelik Editörünü görmek için Düzenleme Modunda olmanız gerekir
- Öznitelik Editörü yalnızca tek bir widget seçiliyken öznitelikleri gösterir. Birden fazla widget seçiliyse hiçbir şey gösterilmez. (Bu davranış gelecekteki bir sürümde değişecek)
- İlk öğeler widget'ın adını ve türünü gösterir; ayrıca widget'ı seçilemeyecek şekilde kilitleme imkânı sunar
  - Diğer öğeler seçili widget'ın türüne özeldir

### Outliner \{#outliner}

- Outliner'ı görmek için Düzenleme Modunda olmanız gerekir
- Outliner, picker page'deki tüm widget'ları gösterir ve bunları Görüntü Katmanına, Widget Türüne veya Gruba göre (bu, Geçiş Widget Gruplarına özeldir) gruplar
- Tuvalde bir widget seçiliyse Outliner'daki widget öğesi de seçili olur; tersi de geçerlidir.
- Outliner'daki bir widget öğesine çift tıklarsanız widget'ı yeniden adlandırabilirsiniz
- Görüntü Katmanı görünümünde widget'ları kilitlemek veya kilidini açmak için onay kutuları bulunur. Kilitli widget'lar Düzenleme Modunda seçilemez. Bu, üst üste yığılmış birden fazla widget'ınız olduğunda kullanışlıdır.
- Outliner'da bir widget seçerseniz görünümü o widget'a odaklamak için "F" kısayolunu kullanabilirsiniz. Belirli bir widget'ı bulmakta zorlanıyorsanız işe yarar
