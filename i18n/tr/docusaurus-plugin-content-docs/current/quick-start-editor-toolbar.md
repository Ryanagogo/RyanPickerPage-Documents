import useBaseUrl from '@docusaurus/useBaseUrl';

# Araç Çubuğu \{#toolbar}

**Düzenleme Modundayken** araç çubuğunu editörün başlık bölümünde bulursunuz

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

Bu araçlar, seçili bir veya daha fazla Picker widget'ı üzerinde çeşitli işlemler yapmanızı sağlar.

### Nasıl çalışır: \{#the-way-it-works}

- Widget'ları seçin
- Aracı açmak için bir araç çubuğu butonuna tıklayın
- Alandaki değeri değiştirin veya bir butona tıklayın
- Değer değişikliği veya buton tıklaması seçili tüm widget'ları etkiler

### Görsel \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**Bu araç, her ikisi de görsel içerebilen Etiket ve Görsel widget'larını etkiler.**

- Etiket veya Görsel widget'larını seçin, ardından istediğiniz görseli aramak veya Content Browser'da seçili olan görseli eklemek için açılır listeye tıklayın. Seçili tüm widget'lar o görseli kullanır

### Renk \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**Bu araç arka plan rengi olan tüm widget'ları etkiler. Metin içeren widget'ları da etkiler.**

- Widget'ları seçin, ardından arka plan veya yazı tipi rengine tıklayıp Renk Seçici'den istediğiniz rengi seçin. Seçili tüm widget'lar bu renkleri alır

### Etiket \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**Bu araç metin içeren widget'ları etkiler.**

- Widget'ları seçin, ardından Etiket alanındaki metni veya Yazı Tipi Boyutu değerini değiştirin. Seçili tüm widget'ların metni güncellenir

### Boyut \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**Bu araç tüm widget'ları etkiler**

- Widget'ları seçin, ardından Genişlik veya Yükseklik değerlerini değiştirin. Seçili tüm widget'ların genişlikleri veya yükseklikleri değişir

### Kaydır \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**Bu araç seçili tüm widget'ları etkiler**

- Widget'ları seçin, ardından kaydırma değerini değiştirin. Ok butonlarından birine tıkladığınızda seçili tüm widget'lar bu değer kadar hareket eder.

### Hizala \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**Bu araç seçili tüm widget'ları etkiler**

- Widget'ları seçin, ardından hizalama veya dağıtma butonlarından birine tıklayın. Seçili tüm widget'ların kenarları hizalanır ya da widget'lar eşit dağılacak şekilde taşınır.
- Hizalama özelliklerinde çapa, son seçilen widget'tır; dolayısıyla diğer tüm seçili widget'lar son seçilen widget'a hizalanır.

### Ayna \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### Bu araç seçili tüm widget'ları etkiler \{#this-tool-affects-all-selected-widgets}

- Widget'ları seçin, ardından çevirme veya ayna butonlarından birine tıklayın. Seçili tüm widget'lar yansıtılmış konumlarına dönüştürülür

#### Ayna Çevirme (Mirror Flip) için çevirme davranışını ayarlayabilirsiniz. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **Kendisi:** Seçili her widget kendi ekseni boyunca çevrilir
- **Son Seçilen (Dahil):** Seçili tüm widget'lar son seçilen widget'ın etrafında çevrilir. Son seçilen de kendi ekseni boyunca çevrilir
- **Son Seçilen (Hariç):** Seçili tüm widget'lar son seçilen widget'ın etrafında çevrilir. Son seçilen widget etkilenmez, hareket etmez.
- **Görünür Tuval:** Seçili tüm widget'lar görünür tuvalin ekseninde çevrilir

#### Pozu Yansıtma'nın çalışması için Pose Mirror Map'lerin oluşturulması gerekir. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **Pose Mirror Map'ler:** Yansıtma için çapa widget'ını tanımlamanızı ve merkez widget'ları ile sol/sağ widget çiftlerini ayarlamanızı sağlar.
- **Bir Sayfada Birden Fazla Map:** Birden fazla map'iniz olabilir; örneğin biri vücut, biri yüz için.
