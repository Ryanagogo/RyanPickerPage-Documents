import useBaseUrl from '@docusaurus/useBaseUrl';

# 1D Slider Widget'ı \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Yeni bir 1D Slider Widget'ı oluşturma \{#creating-a-new-1d-slider-widget}

Yeni bir **1D Slider Widget'ı** oluşturmak için **Düzenleme Modunda** olmanız gerekir

Açılır menüyü getirmek için **picker tuvalinin boş bir bölümüne sağ tıklayın**, ardından "1D Slider" menü öğesine tıklayın

### Amaç \{#purpose}

- 1D Slider, bir değeri minimum ve maksimum değer arasında kaydırmanızı sağlar. Yalnızca 1 serbestlik derecesi vardır; bu nedenle slider yalnızca bir dönüşüm eksenini etkiler

- Dönüşüme uygulanan değer yerel bir değerdir.

- Bu değer, ister Control Rig kontrolleri ister seviye aktörleri olsun, widget'a eklenmiş tüm hedeflere uygulanır.

### Görünüm \{#appearance}

1D Slider Widget'ının rengini ayarlayabilirsiniz

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Hedefler \{#targets}

##### Hedef ekleme \{#adding-targets}

Seçim Butonu hedeflerinde olduğu gibi, istediğiniz sayıda Control Rig kontrolü ve seviye aktörü seçebilir, ardından açılır menüyü getirmek için 1D Slider widget'ına sağ tıklayıp "Seçili İle Ayarla" menü öğesini seçebilirsiniz.

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Slider değerlerini ayarlama \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Başlangıç Değeri**: Slider'ın başlangıç değeridir. Min ve maks değerleri değiştikçe slider üzerindeki konumu görsel olarak değişir.
- **Min Değer**: Slider'ın ulaşacağı en küçük değer
- **Maks Değer**: Slider'ın ulaşacağı en büyük değer

##### Slider'ın yönünü ayarlama \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Yatay**: Slider'ın yana doğru hareket etmesini sağlar
- **Dikey**: Slider'ın yukarı ve aşağı hareket etmesini sağlar

##### Hangi dönüşüm ekseninin etkileneceğini ayarlama \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

Ekseni seçmek için "Aktif Channel" açılır menüsüne tıklayın ve dokuz dönüşüm öğesinden birini seçin.
