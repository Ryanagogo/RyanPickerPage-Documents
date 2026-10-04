import useBaseUrl from '@docusaurus/useBaseUrl';

# أداة مفتاح التبديل \{#toggle-widget}

### إنشاء أداة مفتاح تبديل جديدة \{#creating-a-new-toggle-widget}

يجب أن تكون في **وضع التحرير** لإنشاء **أداة مفتاح تبديل** جديدة

**انقر بزر الفأرة الأيمن على جزء فارغ من لوحة أداة الانتقاء** لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "مفتاح تبديل"

### حالات مفتاح التبديل \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

في البداية، تحمل الحالتان التسميتين الحالة A والحالة B، وتمثلان القيمتين 0 و1.

يؤدي النقر على أداة مفتاح التبديل إلى التبديل بين هاتين الحالتين

يمكن أن يكون لكل حالة تسميتها ولونها وقائمة الأدوات التي تُظهرها وبرنامج Python النصي الخاص بها.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

تبديل ظهور الأدوات

إذا كانت لديك أدوات تريد إخفاءها أو إظهارها حسب الحالة، فابدأ بالدخول إلى وضع التحرير،

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

ثم حدّد الأدوات التي تريد إظهارها عند التبديل إلى الحالة A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

ثم انقر بزر الفأرة الأيمن على أداة مفتاح التبديل لإظهار القائمة المنبثقة، واختر "الحالة A -> التعيين بـWidgets المحددة". سيؤدي ذلك إلى تعيين الأدوات المحددة في قائمة أهداف الحالة A

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

بعد ذلك، حدّد الأدوات التي تريد إظهارها في الحالة B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

ثم انقر بزر الفأرة الأيمن على أداة مفتاح التبديل لإظهار القائمة المنبثقة، وانقر على عنصر القائمة "الحالة B -> التعيين بـWidgets المحددة". سيؤدي ذلك إلى تعيين الأدوات المحددة في قائمة أهداف الحالة B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

إذا أردت رؤية طريقة عمل مفتاح التبديل، فعُد إلى الوضع المباشر.

- في الحالة A، تظهر أدوات الحالة A وتُخفى أدوات الحالة B.
- في الحالة B، تُخفى أدوات الحالة A وتظهر أدوات الحالة B.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

تبديل حالات Control Rig

إذا كان لدى Control Rig قناة تحريك منطقية (Bool)، فيمكنك استخدام أداة مفتاح التبديل للتحكم في تلك القناة. وهذا شائع في إعدادات IK/FK.

يمكنك رؤية ذلك إذا كان لديك Control Rig الخاص بالمانيكان في لقطة. فقط حدّد عنصر التحكم Main، وهو الشكل السداسي أسفل الشخصية.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

ثم انظر في Sequencer أو لوحة Anim Details لرؤية القيم المنطقية للتبديل بين IK/FK

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

للربط بأداة مفتاح التبديل، تأكد من أنك في وضع التحرير

حدّد عنصر التحكم Main، ثم انقر بزر الفأرة الأيمن على أداة مفتاح التبديل لإظهار القائمة المنبثقة، واختر "Set Parent Control"

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

ثم، مع تحديد أداة مفتاح التبديل، افتح محرر الخصائص وابحث عن قسم قناة الرسوم المتحركة وتأكد من تفعيل "استخدام قيمة منطقية".

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

ثم انقر في "القناة" واختر قناة التحريك التي تريد استخدامها

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

ثم، إذا لزم الأمر، يمكنك أيضًا تحديد الحالة التي تريدها أن تكون "الحالة الصحيحة"

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

عند العودة إلى الوضع المباشر، يمكنك النقر على أداة مفتاح التبديل لتغيير حالة الـ Rig وحالات ظهور الأدوات معًا (في هذا المثال، حالات IK/FK لـ Rig الساق اليسرى).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
