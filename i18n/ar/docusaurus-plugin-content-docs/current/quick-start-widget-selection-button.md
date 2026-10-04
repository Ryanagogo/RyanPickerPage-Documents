import useBaseUrl from '@docusaurus/useBaseUrl';

# زر التحديد \{#selection-button}

### إنشاء زر تحديد جديد \{#creating-a-new-selection-button}

يجب أن تكون في **وضع التحرير** لإنشاء **زر تحديد** جديد

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**انقر بزر الفأرة الأيمن على جزء فارغ من لوحة أداة الانتقاء** لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "زر تحديد"

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### أهداف زر التحديد \{#selection-button-targets}

##### تعيين الأهداف في قائمة التحديد \{#setting-targets-in-the-selection-list}

هناك طريقتان أساسيتان لتعيين الأهداف وإضافتها إلى قائمة التحديد

- **قبل إنشاء زر التحديد**: حدّد عناصر التحكم أو الممثلين الذين تريد أن يحدّدهم الزر، ثم أنشئ زر تحديد جديدًا
- **بعد إنشاء زر التحديد**: حدّد عناصر التحكم أو الممثلين، ثم انقر بزر الفأرة الأيمن على الزر لإظهار القائمة المنبثقة، ثم اختر أحد إجراءات الأهداف

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"التعيين بالتحديد"** يستبدل أي أهداف موجودة في القائمة بالأهداف المحددة حاليًا
- **"إضافة التحديد"** يضيف الأهداف المحددة حاليًا إلى قائمة الأهداف

##### إزالة أهداف معيّنة من قائمة التحديد \{#removing-specific-targets-from-the-selection-list}

- لإزالة أهداف معيّنة، حدّد عناصر التحكم أو الممثلين الذين تريد إزالتهم، ثم انقر بزر الفأرة الأيمن على زر التحديد لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "إزالة التحديد".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### مسح قائمة التحديد \{#clearing-the-selection-list}

- لمسح جميع الأهداف في قائمة التحديد، انقر بزر الفأرة الأيمن على زر التحديد لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "مسح".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### رؤية الأهداف الحالية في قائمة التحديد \{#seeing-the-current-targets-in-the-selection-list}

هناك ثلاث طرق أساسية لمعرفة الأهداف الموجودة في قوائم الأهداف.

-  **مرّر مؤشر الفأرة فوق زر التحديد** لإظهار التلميح. سيعرض جميع الأهداف.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **انقر بزر الفأرة الأيمن على زر التحديد** لإظهار القائمة المنبثقة، ثم انقر على عنصر القائمة "سرد الحالي". ستُطبع قائمة بالأهداف في Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **حدّد زر التحديد**، ثم افتح محرر الخصائص وانظر إلى القوائم في فئتي Control Rig والأهداف

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### تحديد الأهداف في قائمة التحديد \{#selecting-the-targets-in-the-selection-list}

هناك طريقتان أساسيتان لتحديد الأهداف

- **في الوضع المباشر**، يكفي النقر على الزر لتحديد جميع الأهداف
- **في وضع التحرير**، انقر بزر الفأرة الأيمن على الزر لإظهار القائمة المنبثقة، ثم اختر عنصر القائمة "تحديد الحالي".

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### تحديد أدوات أخرى \{#selecting-other-widgets}

هناك حالات تريد فيها القدرة على تحديد أدوات أخرى، كأن تكون قد أعددت أزرار انتقاء لجميع مفاصل الأصابع وتريد زرًا واحدًا يحدّد عمودًا أو صفًا من المفاصل.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

أولًا، تأكد من أنك في وضع التحرير، ثم حدّد جميع الأدوات المستهدفة

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

ثانيًا، انقر بزر الفأرة الأيمن على زر التحديد لإظهار القائمة المنبثقة واختر "أدوات أخرى -> "

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

بعد عودتك إلى الوضع المباشر، عند النقر على زر التحديد، سيحدّد الأدوات المستهدفة وجميع الأهداف الموجودة في تلك الأدوات.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### من محرر الخصائص \{#from-the-attribute-editor}

لرؤية القيم في محرر الخصائص، يجب تحديد أداة واحدة فقط

##### برنامج Python النصي \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

يمكنك لصق أي برنامج Python نصي في حقل مصدر البرنامج النصي. إذا كان البرنامج طويلًا، فسيتّسع الحقل.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

هذا الحقل ليس جيدًا جدًا لتحرير البرامج النصية، ولا يُستحسن وضع برامج طويلة جدًا فيه. إذا كان برنامجك النصي طويلًا وتريد استخدام محرر برامج نصية مناسب، فيمكنك ببساطة استيراد برنامجك وتشغيله.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### مظهر زر التحديد \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **استخدام التسمية**
  - يُظهر التسمية أو يخفيها
- **اللون**
  - يعيّن لون الزر
- **الخط**
  - يعيّن لون الخط وحجمه

##### نص زر التحديد \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **تسمية**

  - يعيّن النص في التسمية

- **أنماط النص**

  - للنصوص الأطول، يمكنك استخدام ما يلي للمساعدة في تنسيق النص

    - Justification

    - Word Wrap

    - Margin

    - Clip
