---
sidebar_position: 5
---

# Slider ثنائي الأبعاد \{#2d-slider}

*مقبض واحد قابل للسحب، وقناتا تحويل.*

## في الوضع المباشر \{#in-live-mode}

الـ Slider ثنائي الأبعاد هو لوحة تحكم: سحب مقبضه يكتب المحور X في قناة تحويل والمحور
Y في قناة أخرى، في آنٍ واحد، على كل عنصر تحكم/ممثل معيّن. من الاستخدامات الشائعة لوحة
إزاحة X / إزاحة Y لتثبيت القدم، أو لوحة دوران X / دوران Y لتوجيه نظر العينين.

يتبع انضباط القنوات نفسه الذي يتبعه [الـ Slider أحادي البُعد](./widget-1d-slider): كل محور
يستبدل قناته فقط على الهدف، لذا تتعايش لوحة ثنائية الأبعاد مع أشرطة تمرير أخرى تتحكم في
القنوات المتبقية لعنصر التحكم نفسه. ينطبق المفتاح التلقائي (Auto-key). ويوجد **إعادة الضبط إلى القيمة الأولية** هنا أيضًا في
قائمة النقر بزر الفأرة الأيمن.

## نموذج القيم \{#value-model}

مطابق للـ Slider أحادي البُعد لكنه ثنائي الأبعاد: **القيمة الدنيا/القيمة القصوى** أزواج لكل محور، و**Current
Value** هي القيمة ثنائية الأبعاد الحالية، و**القيمة الأولية** هي القيمة الافتراضية المحدّدة التي لا يغيّرها السحب. ويتصرف **حجم الخطوة**
و**مقفل** بالطريقة نفسها.

تُختار القناتان بشكل مستقل (**نشط القناة X**، **نشط القناة Y**). إن ضبط
المحورين على القناة *نفسها* يكاد يكون دائمًا خطأً في الإعداد، لذا يشير محرر الخصائص
إلى ذلك بشريط تحذير بدلًا من ترك المحورين يتنازعان بصمت على قيمة واحدة.

## الإنشاء \{#authoring}

حقول محرر الخصائص: التسمية/الاسم، القيمة الدنيا/القصوى لكل محور، القيمتان الحالية/الأولية، نشط القناة X
وY (مع تحذير القناة المكررة)، لون المقبض، نمط المقبض الغائر، القفل، حجم الخطوة،
تعيين الأهداف، وكتلة الموضع/الحجم/الدوران/نصف قطر الزاوية المشتركة.

## البرمجة \{#scripting}

`URyanPicker2DSliderFunctionLibrary` (الفئة `Ryan Picker Page|2DSlider`):

| الدالة | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`، لكل محور |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | الأهداف |

يمكن للأصناف الفرعية من Blueprint تنفيذ `BI_RyanPicker2DSlider`: `OnSliderConstructed`،
`OnSliderValueChanged(FVector2D)`، `OnSliderDragBegin`، `OnSliderDragEnd(bool bValueChanged)`،
إضافة إلى [أحداث دورة الحياة المشتركة](./blueprint-api#event-hooks).
