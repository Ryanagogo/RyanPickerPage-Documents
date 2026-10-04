import useBaseUrl from '@docusaurus/useBaseUrl';

# Anahtar Widget'ı \{#toggle-widget}

### Yeni bir Anahtar Widget'ı oluşturma \{#creating-a-new-toggle-widget}

Yeni bir **Anahtar Widget'ı** oluşturmak için **Düzenleme Modunda** olmanız gerekir

Açılır menüyü getirmek için **picker tuvalinin boş bir bölümüne sağ tıklayın**, ardından "Anahtar" menü öğesine tıklayın

### Anahtar Durumları \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Başlangıçta iki durumun etiketleri Durum A ve Durum B'dir ve 0 ile 1 değerlerini temsil ederler.

Anahtar widget'ına tıklamak bu iki durum arasında geçiş yapar

Her durumun kendi etiketi, rengi, gösterilecek widget listesi ve Python betiği olabilir.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Widget Görünürlüğünü Değiştirme

Bir duruma bağlı olarak gizlemek veya göstermek istediğiniz widget'lar varsa, önce Düzenleme Moduna geçin,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Ardından Durum A'ya geçildiğinde gösterilmesini istediğiniz widget'ları seçin

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Sonra açılır menüyü getirmek için anahtar widget'ına sağ tıklayın ve "Durum A -> Seçili Widget'lar İle Ayarla"yı seçin. Bu, seçili widget'ları Durum A'nın Hedef Listesine ayarlar

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Ardından Durum B'deyken göstermek istediğiniz widget'ları seçin

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Sonra açılır menüyü getirmek için anahtar widget'ına sağ tıklayın ve "Durum B -> Seçili Widget'lar İle Ayarla" menü öğesine tıklayın. Bu, seçili widget'ları Durum B'nin Hedef Listesine ayarlar.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Anahtar'ın nasıl çalıştığını görmek isterseniz Canlı Moda geri dönün.

- Durum A'dayken Durum A widget'ları gösterilir, Durum B widget'ları gizlenir.
- Durum B'deyken Durum A widget'ları gizlenir, Durum B widget'ları gösterilir.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Control Rig Durumlarını Değiştirme

Control Rig'inizde bir Bool animasyon kanalı varsa, o kanalı yönlendirmek için Anahtar widget'ını kullanabilirsiniz. Bu, IK/FK kurulumlarında yaygındır.

Bunu bir çekimde Mannequin Control Rig'iniz varsa görebilirsiniz. Karakterin altındaki altıgen olan Main kontrolünü seçmeniz yeterli.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Ardından IK/FK geçişi için Bool'ları görmek üzere Sequencer'a veya Anim Details paneline bakın

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

Anahtar widget'ına bağlamak için Düzenleme Modunda olduğunuzdan emin olun

Main kontrolünü seçin, ardından açılır menüyü getirmek için anahtar widget'ına sağ tıklayıp "Set Parent Control"ü seçin

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Sonra anahtar widget'ı seçiliyken Öznitelik Editörünü açın, Animasyon Kanalı bölümünü bulun ve "Boolean Kullan"ın işaretli olduğundan emin olun.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Ardından "Kanal"a tıklayın ve kullanmak istediğiniz Animasyon Kanalını seçin

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Gerekirse hangi durumun "Doğru Durumu" olacağını da işaretleyebilirsiniz

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

Canlı Moda geri döndüğünüzde, hem Rig Durumunu hem de Widget Görünürlük Durumlarını değiştirmek için Anahtar widget'ına tıklayabilirsiniz (bu örnekte sol bacağın IK/FK rig durumları).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
