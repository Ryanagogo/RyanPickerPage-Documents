import useBaseUrl from '@docusaurus/useBaseUrl';

# العكس \{#mirroring}

### أداة عكس الأدوات \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**يجب أن تكون في وضع التحرير لتجد هذه الأداة.**

صُمّمت لمساعدتك على عكس الأدوات في تخطيطك، فتسهّل عليك إنشاء تخطيطات للشخصيات ثنائية الأرجل أو غيرها من الشخصيات التي تحتاج إلى تناظر بين اليسار واليمين.

## تنقسم الأداة إلى جزأين \{#the-tool-is-divided-into-two-parts}

### قلب المحدد \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### أوضاع القلب \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **ذاتي**
  - تنقلب كل أداة محددة حول محورها الخاص
- **آخر تحديد (متضمنًا)**
  - تنقلب جميع الأدوات المحددة حول آخر أداة محددة، وتنقلب آخر أداة محددة حول محورها الخاص
- **آخر تحديد (باستثنائه)**
  - هذا هو الوضع الافتراضي
  - تنقلب جميع الأدوات المحددة حول آخر أداة محددة، لكن آخر أداة محددة لا تتأثر ولا تتحرك
- **اللوحة المرئية**
  - تنقلب جميع الأدوات المحددة حول منطقة اللوحة المرئية حاليًا

##### اتجاهات القلب \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

تعتمد النتيجة الدقيقة للقلب على السلوك المحدد

- **Flip Horizontal**
  - يقلب الأدوات المحددة على امتداد المحور X.
- **Flip Vertical**
  - يقلب الأدوات المحددة على امتداد المحور Y

### عكس مجموعات الوضعيات المحددة مسبقًا \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### عكس الأدوات المحددة \{#mirror-selected-widgets}

- تُعكس جميع الأدوات المحددة التي لها تعريف في Pose Map وفقًا لـ Pose Map الخاصة بها
- لا يمكن أن تكون الأداة إلا في Pose Map واحدة

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### عكس الوضعية من اليسار إلى اليمين \{#mirror-pose-left-to-right}

- تعمل هذه العملية على Pose Map المحددة حاليًا في محرر Pose Map
- إذا عُكست أدوات خاطئة، فتراجع وغيّر Pose Map الحالية

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### عكس الوضعية من اليمين إلى اليسار \{#mirror-pose-right-to-left}

- تعمل هذه العملية على Pose Map المحددة حاليًا في محرر Pose Map
- إذا عُكست أدوات خاطئة، فتراجع وغيّر Pose Map الحالية

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### تعريف خرائط Pose Map \{#define-pose-maps}

انقر على زر "Map" لفتح محرر Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### محرر Pose Map \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

في Picker Page واحدة، يمكنك تعريف أكثر من Pose Map. فمثلًا، يمكن أن تكون لديك خريطة لأدوات الجسم وأخرى لأدوات الوجه

##### إنشاء Pose Map جديدة \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### اسم الخريطة \{#map-name}

عند إنشاء خريطة جديدة لأول مرة يكون لها اسم افتراضي، لكن يمكنك إعادة تسميتها بأي اسم تريده

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### أداة المرساة \{#anchor-widget}

تُعكس جميع الأدوات في Pose Map وتُحوَّل بالنسبة إلى أداة المرساة

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### أدوات المنتصف \{#center-widgets}

تُحاذى جميع أدوات المنتصف إلى المركز بالنسبة إلى أداة المرساة

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### أزواج الأدوات \{#widget-pairs}

تعكس الأدوات في عمودي الأزواج الأيسر والأيمن بعضها بعضًا، بالنسبة إلى أداة المرساة

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

بعد إعداد الخريطة، هذه نتيجة عكس الوضعية من اليمين إلى اليسار

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### إعادة ضبط خريطة \{#resetting-a-map}

إذا أردت مسح الخريطة، فما عليك إلا النقر على زر إعادة ضبط Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### التبديل بين الخرائط \{#switching-between-maps}

عندما يصبح لديك أكثر من خريطة، يمكنك النقر على القائمة المنسدلة واختيار الخريطة التي تريد تحريرها

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### أسماء الأدوات \{#widget-names}

تستخدم خرائط Pose Map أسماء الأدوات، لذا يُستحسن أن تمنح أدواتك أسماء ذات معنى بدلًا من الاكتفاء بالأسماء الافتراضية عند إنشائها.

لرؤية اسم الأداة الحالي، حدّد أداة وافتح Outliner (علامة "+" في الزاوية العلوية اليسرى من اللوحة)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

في البداية، قد ترى اسمًا افتراضيًا

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

يتيح لك النقر المزدوج على العنصر في Outliner تغيير اسم الأداة

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### تعيين أداة لعنصر في Pose Map \{#setting-a-widget-on-a-pose-map-item}

**يمكنك استخدام إحدى طريقتين مختلفتين**

استخدم القائمة المنسدلة واختر العنصر من القائمة

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

استخدم زر "Set Selected" على الجانب الأيمن من عنصر الخريطة. عند النقر عليه، سيوضع اسم الأداة المحددة في الحقل

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

بالنسبة إلى أزواج الأدوات، ستحتاج إلى تعيين عنصرين في العمودين الأيسر والأيمن

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
