import useBaseUrl from '@docusaurus/useBaseUrl';

# 2D Slider Widget'ı \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Yeni bir 2D Slider Widget'ı oluşturma \{#creating-a-new-2d-slider-widget}

Yeni bir **2D Slider Widget'ı** oluşturmak için **Düzenleme Modunda** olmanız gerekir

Açılır menüyü getirmek için **picker tuvalinin boş bir bölümüne sağ tıklayın**, ardından "2D Slider" menü öğesine tıklayın

### Amaç \{#purpose}

- 2D Slider, değerleri minimum ve maksimum değer arasında kaydırmanızı sağlar. X ve Y üzerinde 2 serbestlik derecesi vardır; bu nedenle slider iki farklı dönüşüm eksenini etkileyebilir

- Dönüşüme uygulanan değerler yerel değerlerdir.

- Değerler, ister Control Rig kontrolleri ister seviye aktörleri olsun, widget'a eklenmiş tüm hedeflere uygulanır.

### Görünüm \{#appearance}

2D Slider Widget'ının rengini ayarlayabilirsiniz

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Hedefler \{#targets}

##### Hedef ekleme \{#adding-targets}

Seçim Butonu hedeflerinde olduğu gibi, istediğiniz sayıda Control Rig kontrolü ve seviye aktörü seçebilir, ardından açılır menüyü getirmek için 2D Slider widget'ına sağ tıklayıp "Seçili İle Ayarla" menü öğesini seçebilirsiniz.

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### X ve Y yönleri için slider değerlerini ayarlama \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Başlangıç Değeri**: Slider'ın X ve Y yönleri için başlangıç değerleridir. Min ve maks değerleri değiştikçe slider üzerindeki konumu görsel olarak değişir.
- **Min Değer**: Slider'ın X ve Y yönlerinde ulaşacağı en küçük değerler
- **Maks Değer**: Slider'ın X ve Y yönlerinde ulaşacağı en büyük değerler

##### İki etkin kanalın kullanacağı dönüşüm eksenlerini ayarlama \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- Bir eksen seçmek için "Aktif Channel" açılır menülerinden birine tıklayın ve dokuz dönüşüm öğesinden birini seçin.
- "Aktif Channel X" ve "Aktif Channel Y" farklı dönüşüm eksenleri kullanmalıdır. İkisi aynı ekseni kullanamaz
