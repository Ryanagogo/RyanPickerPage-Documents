import useBaseUrl from '@docusaurus/useBaseUrl';

# Yansıtma \{#mirroring}

### Widget'ları Yansıtma Aracı \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**Bu aracı bulmak için Düzenleme Modunda olmanız gerekir.**

Düzeninizdeki widget'ları yansıtmanıza yardımcı olmak için tasarlanmıştır; böylece sol/sağ simetri gereken iki ayaklı veya diğer karakterler için düzen oluşturmanızı kolaylaştırır.

## Araç iki bölüme ayrılır \{#the-tool-is-divided-into-two-parts}

### Seçimi Çevirme \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Çevirme Modları \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Kendisi**
  - Seçili her widget kendi ekseni boyunca çevrilir
- **Son Seçilen (Dahil)**
  - Seçili tüm widget'lar son seçilen widget'ın etrafında çevrilir; son seçilen widget da kendi ekseni boyunca çevrilir
- **Son Seçilen (Hariç)**
  - Varsayılan mod budur
  - Seçili tüm widget'lar son seçilen widget'ın etrafında çevrilir, ancak son seçilen widget etkilenmez ve hareket etmez
- **Görünür Tuval**
  - Seçili tüm widget'lar o anda görünen tuval alanına göre çevrilir

##### Çevirme Yönleri \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

Çevirmenin kesin sonucu seçilen davranışa bağlıdır

- **Flip Horizontal**
  - Seçili widget'ları X ekseni boyunca çevirir.
- **Flip Vertical**
  - Seçili widget'ları Y ekseni boyunca çevirir

### Önceden Tanımlı Poz Kümelerini Yansıtma \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Seçili Widget'ları Yansıt \{#mirror-selected-widgets}

- Bir Pose Map'te tanımı olan tüm seçili widget'lar kendi Pose Map'lerine göre yansıtılır
- Bir widget yalnızca bir Pose Map'te bulunabilir

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pozu Soldan Sağa Yansıt \{#mirror-pose-left-to-right}

- Bu işlem, Pose Map Editöründe o anda seçili olan Pose Map üzerinde çalışır
- Yanlış widget'lar yansıtılırsa geri alın ve geçerli Pose Map'i değiştirin

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pozu Sağdan Sola Yansıt \{#mirror-pose-right-to-left}

- Bu işlem, Pose Map Editöründe o anda seçili olan Pose Map üzerinde çalışır
- Yanlış widget'lar yansıtılırsa geri alın ve geçerli Pose Map'i değiştirin

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pose Map Tanımlama \{#define-pose-maps}

Pose Map Editörünü açmak için "Map" butonuna tıklayın

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Pose Map Editörü \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

Tek bir Picker Page üzerinde birden fazla Pose Map tanımlayabilirsiniz. Örneğin, Vücut widget'ları için bir map ve Yüz widget'ları için bir map olabilir

##### Yeni Bir Pose Map Oluştur \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Map Adı \{#map-name}

Yeni bir map oluşturduğunuzda varsayılan bir adı olur, ancak onu istediğiniz gibi yeniden adlandırabilirsiniz

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Çapa Widget'ı \{#anchor-widget}

Pose Map'teki tüm widget'lar çapa widget'ına göre yansıtılır ve dönüştürülür

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Merkez Widget'ları \{#center-widgets}

Tüm merkez widget'ları çapa widget'ına göre ortaya hizalanır

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Widget Çiftleri \{#widget-pairs}

Sol ve sağ çift sütunlarındaki widget'lar, çapa widget'ına göre birbirini yansıtır

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

Map ayarlandıktan sonra pozu sağdan sola yansıtmanın sonucu budur

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Bir Map'i Sıfırlama \{#resetting-a-map}

Map'i temizlemek istiyorsanız Map'i Sıfırla butonuna tıklamanız yeterli

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Map'ler Arasında Geçiş \{#switching-between-maps}

Birden fazla map'iniz olduğunda açılır menüye tıklayıp hangi map'i düzenlemek istediğinizi seçebilirsiniz

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Widget Adları \{#widget-names}

Pose Map'ler widget adlarını kullanır; bu yüzden widget'larınıza, oluşturulduklarında verilen varsayılan adları kullanmak yerine anlamlı adlar vermelisiniz.

Bir widget'ın geçerli adını görmek için widget'ı seçip Outliner'ı açın (tuvalin sol üst köşesindeki "+")

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

İlk başta varsayılan bir ad görebilirsiniz

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Outliner öğesine çift tıklayarak widget adını değiştirebilirsiniz

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Bir widget'ı Pose Map öğesine atama \{#setting-a-widget-on-a-pose-map-item}

**İki farklı yoldan birini kullanabilirsiniz**

Açılır menüyü kullanıp listeden öğeyi seçin

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Map öğesinin sağındaki "Set Selected" butonunu kullanın. Tıkladığınızda seçili widget'ın adı alana yazılır

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

Widget çiftleri için sol ve sağ sütun öğelerinin ikisini de ayarlamanız gerekir

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
