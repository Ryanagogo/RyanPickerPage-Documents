import useBaseUrl from '@docusaurus/useBaseUrl';

# أداة Slider أحادي البُعد \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### إنشاء أداة Slider أحادي البُعد جديدة \{#creating-a-new-1d-slider-widget}

يجب أن تكون في **وضع التحرير** لإنشاء **أداة Slider أحادي البُعد** جديدة

**انقر بزر الفأرة الأيمن على جزء فارغ من لوحة أداة الانتقاء** لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "Slider أحادي البُعد"

### الغرض \{#purpose}

- يتيح لك الـ Slider أحادي البُعد تحريك قيمة تقع بين قيمة دنيا وقيمة قصوى. له درجة حرية واحدة فقط، لذا يؤثر الشريط على محور تحويل واحد فقط

- القيمة المطبّقة على التحويل قيمة محلية.

- تُطبَّق هذه القيمة على جميع الأهداف المضافة إلى الأداة، سواء كانت عناصر تحكم Control Rig أو ممثلين في المستوى.

### المظهر \{#appearance}

يمكنك تعيين لون أداة Slider أحادي البُعد

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### الأهداف \{#targets}

##### إضافة الأهداف \{#adding-targets}

كما هو الحال مع أهداف زر التحديد، يمكنك تحديد أي عدد من عناصر تحكم Control Rig وممثلي المستوى، ثم النقر بزر الفأرة الأيمن على أداة Slider أحادي البُعد لإظهار القائمة المنبثقة واختيار عنصر القائمة "التعيين بالتحديد".

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### تعيين قيم الشريط \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **القيمة الأولية**: هي قيمة البداية للشريط. يتغير موضعها على الشريط بصريًا عند تغيير القيمتين الدنيا والقصوى.
- **القيمة الدنيا**: أصغر قيمة سيصل إليها الشريط
- **القيمة القصوى**: أكبر قيمة سيصل إليها الشريط

##### تعيين اتجاه الشريط \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **أفقي**: يجعل الشريط يتحرك من جانب إلى آخر
- **رأسي**: يجعل الشريط يتحرك إلى الأعلى والأسفل

##### تعيين محور التحويل المتأثر \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

لاختيار المحور، انقر على القائمة المنسدلة "نشط القناة" واختر أحد عناصر التحويل التسعة.
