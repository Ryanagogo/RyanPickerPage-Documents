import useBaseUrl from '@docusaurus/useBaseUrl';

# Seçim Butonu \{#selection-button}

### Yeni bir Seçim Butonu oluşturma \{#creating-a-new-selection-button}

Yeni bir **Seçim Butonu** oluşturmak için **Düzenleme Modunda** olmanız gerekir

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

Açılır menüyü getirmek için **picker tuvalinin boş bir bölümüne sağ tıklayın**, ardından "Seçim Butonu" menü öğesine tıklayın

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Seçim Butonu Hedefleri \{#selection-button-targets}

##### Seçim listesinde hedefleri ayarlama \{#setting-targets-in-the-selection-list}

Seçim listesine hedef ayarlamanın ve eklemenin iki temel yolu vardır

- **Seçim Butonunu oluşturmadan önce**: butonun seçmesini istediğiniz kontrolleri veya aktörleri seçin, ardından yeni bir Seçim Butonu oluşturun
- **Seçim Butonunu oluşturduktan sonra**: kontrolleri veya aktörleri seçin, ardından açılır menüyü getirmek için butona sağ tıklayıp Hedef işlemlerinden birini seçin

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"Seçili İle Ayarla"**, listedeki mevcut tüm hedefleri o anda seçili olanlarla değiştirir
- **"Seçileni Ekle"**, o anda seçili hedefleri Hedefler listesine ekler

##### Seçim listesinden belirli hedefleri kaldırma \{#removing-specific-targets-from-the-selection-list}

- Belirli hedefleri kaldırmak için kaldırmak istediğiniz kontrolleri veya aktörleri seçin, ardından açılır menüyü getirmek için seçim butonuna sağ tıklayıp "Seçileni Kaldır" menü öğesine tıklayın.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Seçim listesini temizleme \{#clearing-the-selection-list}

- Seçim listesindeki tüm hedefleri temizlemek için açılır menüyü getirmek üzere seçim butonuna sağ tıklayın, ardından "Temizle" menü öğesine tıklayın.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Seçim listesindeki geçerli hedefleri görme \{#seeing-the-current-targets-in-the-selection-list}

Hedef listelerinde hangi hedeflerin olduğunu görmenin üç temel yolu vardır.

-  İpucunu getirmek için **fareyi Seçim Butonunun üzerine getirin**. Tüm hedefleri gösterir.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  Açılır menüyü getirmek için **Seçim Butonuna sağ tıklayın**, ardından "Mevcutları Listele" menü öğesine tıklayın. Hedeflerin listesi Output Log'a yazdırılır

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Seçim Butonunu seçin**, ardından Öznitelik Editörünü açıp Control Rig ve Hedefler kategorilerindeki listelere bakın

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Seçim listesindeki hedefleri seçme \{#selecting-the-targets-in-the-selection-list}

Hedefleri seçmenin iki temel yolu vardır

- **Canlı Modda**, butona tıklamanız tüm hedefleri seçer
- **Düzenleme Modunda**, açılır menüyü getirmek için butona sağ tıklayın, ardından "Mevcutları Seç" menü öğesini seçin.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Diğer widget'ları seçme \{#selecting-other-widgets}

Bazı durumlarda diğer widget'ları seçebilmek istersiniz; örneğin tüm parmak eklemleri için picker butonları oluşturduysanız ve bir sütun veya sıra boğumu seçen tek bir buton istiyorsanız.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

Önce Düzenleme Modunda olduğunuzdan emin olun, ardından tüm Hedef Widget'ları seçin

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

İkinci olarak, açılır menüyü getirmek için Seçim Butonuna sağ tıklayın ve "Diğer Widget'lar -> " öğesini seçin

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Canlı Moda döndükten sonra Seçim Butonuna tıkladığınızda, Hedef Widget'ları ve bu widget'lardaki tüm Hedefleri seçer.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### Öznitelik Editöründen \{#from-the-attribute-editor}

Değerleri Öznitelik Editöründe görmek için tek bir widget seçmeniz gerekir

##### Python Betiği \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

Betik Kaynağı alanına herhangi bir Python betiği yapıştırabilirsiniz. Betik uzunsa alan genişler.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

Bu alan betik düzenlemek için pek uygun değildir ve çok uzun betikler koymamak iyi olur. Betiğiniz uzunsa ve düzgün bir betik editörü kullanmak istiyorsanız, betiğinizi içe aktarıp çalıştırabilirsiniz.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Seçim Butonu Görünümü \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Etiket Kullan**
  - Etiketi gösterir veya gizler
- **Renk**
  - Butonun rengini ayarlar
- **Yazı Tipi**
  - Yazı tipi rengini ve yazı tipi boyutunu ayarlar

##### Seçim Butonu Metni \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Etiket**

  - Etiketteki metni ayarlar

- **Metin Stilleri**

  - Daha uzun metinlerde, metni biçimlendirmek için şunları kullanabilirsiniz

    - Justification

    - Word Wrap

    - Margin

    - Clip
