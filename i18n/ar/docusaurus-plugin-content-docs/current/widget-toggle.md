---
sidebar_position: 6
---

# مفتاح تبديل \{#toggle}

*مفتاح بحالتين — والاستخدام النموذجي له هو IK/FK.*

## في الوضع المباشر \{#in-live-mode}

لمفتاح التبديل حالتان، **A** و**B**. يؤدي النقر إلى التبديل بينهما، وتطبّق الحالة التي
أصبحت نشطة للتو إعداداتها الخاصة: تسميتها وألوانها، وتُحدَّد عناصر تحكم الـ Rig
والممثلون المعيّنون لها، ويعمل [برنامج Python النصي](./python-scripting) الخاص بها.
كل ما يتعلق بمفتاح التبديل يُعدّ **لكل حالة** — فيمكن لمفتاح تبديل IK/FK أن يحدّد عناصر تحكم IK
في حالة وعناصر تحكم FK في الأخرى، بلون مختلف لكل منهما.

## مجموعات مفاتيح التبديل \{#toggle-groups}

جمّع عدة مفاتيح تبديل (من قائمة النقر بزر الفأرة الأيمن، مع تحديد اثنين أو أكثر) فتتصرف كأزرار
الاختيار: يعلن كل مفتاح تبديل أي حالتيه تُعدّ "تشغيلًا" (**حالة التشغيل** الخاصة به)، و
تشغيل عضو واحد في المجموعة يوقف جميع الأعضاء الآخرين. تظهر الأدوات المجمّعة بإطار
مميز على اللوحة، ويمكن تسمية المجموعات وإعادة تسميتها، كما يعرض
[عرض **حسب المجموعة** في Outliner](./attribute-editor-and-outliner) أعضاء كل مجموعة تحت
عنوانها. يتيح نسخ مجموعة لصقًا يعيد إنشاءها كمجموعة جديدة تمامًا، بما في ذلك الأعضاء
والاسم.

## التحكم في قناة bool الخاصة بالـ Rig \{#driving-a-rigs-bool-channel}

إلى جانب تحديد عناصر التحكم، يمكن ربط مفتاح التبديل مباشرة بـ**قناة تحريك منطقية (bool)** على
عنصر تحكم Control Rig — مثل سمة مفتاح IK/FK الفعلية في الـ Rig:

- حدّد **عنصر التحكم الأب** للقناة و**القناة** نفسها، واختر أي حالة لمفتاح التبديل
  تعني أن القناة *true*.
- عندها يكتب النقر على مفتاح التبديل القيمة المنطقية أيضًا.
- الربط ثنائي الاتجاه: تستطلع الصفحة القيمة الحالية للقناة وتعكسها على
  الحالة المرئية لمفتاح التبديل، لذا فإن تمرير الخط الزمني عبر مفتاح IK/FK له مفتاح إطار يقلب الزر على الصفحة
  دون إعادة تشغيل سلوك النقر.

## الإنشاء \{#authoring}

حقول محرر الخصائص: لكل حالة التسمية / لون الخلفية / لون الخط / حجم الخط / أسماء عناصر
التحكم / الممثلون المستهدفون / برنامج Python النصي؛ والحالة الحالية وحالة التشغيل؛ وربط قناة التحريك المنطقية
(التفعيل، عنصر التحكم الأب، اسم القناة، حالة true)؛ وكتلة
الموضع/الحجم/الدوران/نصف قطر الزاوية المشتركة.

## البرمجة \{#scripting}

`URyanPickerToggleFunctionLibrary` (الفئة `Ryan Picker Page|Toggle`). تأخذ معظم الدوال
`ERyanPickerToggleState` وتقرأ/تكتب إعدادات حالة واحدة:

| الدالة | |
|---|---|
| `GetToggleState` / `SetToggleState` | الحالة الحالية |
| `GetOnState` / `SetOnState` | أي حالة تُعدّ "تشغيلًا" لحصرية المجموعة |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | المفتاح الرئيسي لربط قناة التحريك |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

يمكن للأصناف الفرعية من Blueprint تنفيذ `BI_RyanPickerToggle`: `OnToggleConstructed`،
`OnToggleClicked`، `OnToggleStateChanged(ERyanPickerToggleState)`،
`OnControlRigControlsSelected`، `OnTargetActorsSelected`، إضافة إلى
[أحداث دورة الحياة المشتركة](./blueprint-api#event-hooks).
