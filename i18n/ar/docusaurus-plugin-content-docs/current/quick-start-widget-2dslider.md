import useBaseUrl from '@docusaurus/useBaseUrl';

# أداة Slider ثنائي الأبعاد \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### إنشاء أداة Slider ثنائي الأبعاد جديدة \{#creating-a-new-2d-slider-widget}

يجب أن تكون في **وضع التحرير** لإنشاء **أداة Slider ثنائي الأبعاد** جديدة

**انقر بزر الفأرة الأيمن على جزء فارغ من لوحة أداة الانتقاء** لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "Slider ثنائي الأبعاد"

### الغرض \{#purpose}

- يتيح لك الـ Slider ثنائي الأبعاد تحريك قيم تقع بين قيمة دنيا وقيمة قصوى. له درجتا حرية، على X وY، لذا يمكن للشريط أن يؤثر على محوري تحويل مختلفين

- القيم المطبّقة على التحويل قيم محلية.

- تُطبَّق القيم على جميع الأهداف المضافة إلى الأداة، سواء كانت عناصر تحكم Control Rig أو ممثلين في المستوى.

### المظهر \{#appearance}

يمكنك تعيين لون أداة Slider ثنائي الأبعاد

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### الأهداف \{#targets}

##### إضافة الأهداف \{#adding-targets}

كما هو الحال مع أهداف زر التحديد، يمكنك تحديد أي عدد من عناصر تحكم Control Rig وممثلي المستوى، ثم النقر بزر الفأرة الأيمن على أداة Slider ثنائي الأبعاد لإظهار القائمة المنبثقة واختيار عنصر القائمة "التعيين بالتحديد".

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### تعيين قيم الشريط للاتجاهين X وY \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **القيمة الأولية**: هي قيم البداية للشريط في الاتجاهين X وY. يتغير موضعها على الشريط بصريًا عند تغيير القيمتين الدنيا والقصوى.
- **القيمة الدنيا**: أصغر القيم التي سيصل إليها الشريط في الاتجاهين X وY
- **القيمة القصوى**: أكبر القيم التي سيصل إليها الشريط في الاتجاهين X وY

##### تعيين محاور التحويل التي ستستخدمها القناتان النشطتان \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- لاختيار محور، انقر على إحدى القائمتين المنسدلتين "نشط القناة" واختر أحد عناصر التحويل التسعة.
- يجب أن يستخدم "نشط القناة X" و"نشط القناة Y" محوري تحويل مختلفين. لا يمكن أن يستخدم كلاهما المحور نفسه
