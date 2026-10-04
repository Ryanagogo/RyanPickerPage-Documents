---
sidebar_position: 1
---

# مقدمة \{#introduction}

**Ryan Picker Page** هي أداة انتقاء (Picker) للتحريك في Unreal Engine: لوحة من الأزرار وأشرطة التمرير (Sliders)
ومفاتيح التبديل والتسميات والصور، تُرتّبها مرة واحدة لكل شخصية ثم تستخدمها لتحديد عناصر تحكم Control Rig
(وممثلي المستوى) وتحريكها بنقرة واحدة — دون الحاجة إلى البحث في نافذة العرض (Viewport)
أو في تسلسل الـ Rig الهرمي أو في شجرة Sequencer في منتصف اللقطة.

النافذة نفسها هي أداة الانتقاء ومحررها في آنٍ واحد. انتقل إلى وضع التحرير لبناء التخطيط، ثم عُد
إلى الوضع المباشر لتحرّك به. تُحفظ الصفحات كملفات JSON قابلة للنقل يمكنك مشاركتها
بين المشاريع ومع أعضاء فريقك.

## المتطلبات \{#requirements}

- Unreal Engine **5.6 – 5.8**
- تفعيل إضافات المحرك التالية (تُعلنها الإضافة كتبعيات): **Control Rig**،
  **Synthesis**، **Python Editor Script Plugin**

الإضافة مخصّصة للمحرر فقط. لا تدخل أبدًا في أي إصدار مُحزَّم ولا تضيف شيئًا وقت التشغيل.

## التثبيت \{#installation}

1. انسخ المجلد `RyanPickerPage` إلى المجلد `Plugins/` في مشروعك.
2. فعّلها من **Edit → Plugins** ثم أعد تشغيل المحرر.
3. افتح أداة انتقاء من **Tools → Ryan Picker Page**.

## كيف تتنقّل في هذا التوثيق \{#finding-your-way-around-these-docs}

إذا كنت **محرّكًا (Animator)** تستخدم صفحة أعدّها لك شخص آخر، فابدأ بصفحة
[البدء](./getting-started) وبأقسام الوضع المباشر في صفحات الأدوات (Widgets).

إذا كنت **تبني صفحات**، فاقرأ بهذا الترتيب: [البدء](./getting-started) ←
[Control Rig والممثلون المستهدفون](./control-rig-and-targets) ← صفحات أنواع الأدوات ←
[أدوات التحرير واللوحة](./editing-tools).

إذا كنت **مدير تقني (TD) توسّع الإضافة**، فانتقل مباشرة إلى صفحتي
[واجهة Blueprint البرمجية](./blueprint-api) و[البرمجة بلغة Python](./python-scripting) — بما في ذلك
كيفية توزيع متغيرات الأدوات الخاصة بك كأصناف فرعية من Blueprint تظهر في قائمة Add Widget.

### جميع الصفحات \{#all-pages}

| القسم | الصفحات |
|---|---|
| الأساسيات | [البدء](./getting-started) |
| أنواع الأدوات | [زر تحديد](./widget-select-button) · [Slider أحادي البُعد](./widget-1d-slider) · [Slider ثنائي الأبعاد](./widget-2d-slider) · [مفتاح تبديل](./widget-toggle) · [تسمية](./widget-label) · [صورة](./widget-image) |
| بناء الصفحات | [أدوات التحرير واللوحة](./editing-tools) · [عكس الوضعية](./mirror-pose) · [الإشارات المرجعية](./bookmarks) |
| كيف يعمل الاستهداف | [Control Rig والممثلون المستهدفون](./control-rig-and-targets) · [محرر الخصائص وOutliner](./attribute-editor-and-outliner) |
| الملفات والإعدادات | [الحفظ والتحميل والملفات](./save-load-and-files) · [إعدادات المحرر](./editor-settings) |
| التوسيع | [واجهة Blueprint البرمجية](./blueprint-api) · [البرمجة بلغة Python](./python-scripting) |
