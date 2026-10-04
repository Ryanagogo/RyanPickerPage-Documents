---
sidebar_position: 16
---

# واجهة Blueprint البرمجية \{#blueprint-api}

تتبع الواجهة البرمجية للإضافة نمطًا واحدًا في كل مكان: **مكتبات دوال** من العُقد
الثابتة، مكتبة مشتركة واحدة لما تملكه كل أداة، إضافة إلى مكتبة لكل نوع أداة لما
ينفرد به ذلك النوع. تأخذ كل دالة الأداة على أنها `Target` مع `DefaultToSelf` — فداخل الرسم البياني الخاص
بـ Blueprint الأداة، تتصل العُقد تلقائيًا بـ `self`.

## الدوال المشتركة — جميع أنواع الأدوات \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`، الفئة `Ryan Picker Page|Widget`:

| الدالة | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | الهندسة على اللوحة |
| `GetRotation` / `SetRotation` | بالدرجات، ضمن النطاق [0, 360) |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | مستوى الأداة في [سلسلة التقريب](./attribute-editor-and-outliner#corner-radius) |
| `GetWidgetName` / `SetWidgetName` | اسم فريد داخل الصفحة |
| `GetCurrentControlRig` | الـ Rig الحالي للصفحة المالكة |
| `GetActorFromGUID` | يحلّ هوية ممثل عبر الصفحة |

## الدوال الخاصة بكل نوع \{#per-type-functions}

المكتبة الخاصة بكل نوع أداة موثّقة في صفحته:

| المكتبة | الفئة | المرجع |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [زر التحديد](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [Slider أحادي البُعد](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [Slider ثنائي الأبعاد](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [مفتاح التبديل](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [التسمية](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [الصورة](./widget-image#scripting) |

## خطافات الأحداث \{#event-hooks}

يوفّر كل نوع من أنواع الأدوات التفاعلية الأربعة واجهة Blueprint من خطافات `BlueprintNativeEvent` —
نفّذها في صنف فرعي من Blueprint لإضافة سلوك دون C++:

| الواجهة | الأحداث الخاصة بالنوع |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`، `OnSelectButtonClicked`، `OnControlRigControlsSelected`، `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`، `OnSliderValueChanged`، `OnSliderDragBegin`، `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | الأحداث الأربعة نفسها، بقيمة ثنائية الأبعاد |
| `BI_RyanPickerToggle` | `OnToggleConstructed`، `OnToggleClicked`، `OnToggleStateChanged`، `OnControlRigControlsSelected`، `OnTargetActorsSelected` |

ترث الواجهات الأربع ثلاثة **أحداث لدورة الحياة** يشترك فيها كل نوع تفاعلي:

- `OnWidgetSelected(bool)` — تغيّر التحديد في وضع التحرير
- `OnWidgetHighlighted(bool)` — تغيّرت حالة التمرير فوق الأداة
- `OnWidgetEditModeChanged(bool)` — دخلت الصفحة وضع التحرير أو خرجت منه

ليس للتسميات والصور واجهة خطافات — فلا شيء فيها قابل للنقر — لكن مكتبة الدوال
المشتركة تغطيها.

## أدوات Blueprint المخصصة \{#custom-widget-blueprints}

أعمق نقطة توسيع: **أنشئ صنفًا فرعيًا من نوع أداة في Blueprint، وستتعامل معه الصفحة على أنه
نوع أداة كامل قائم بذاته.**

1. أنشئ صنف Blueprint يكون صنفه الأب أحد أصناف الأدوات الأصلية النهائية
   (`RyanPickerSelectButton`، `RyanPickerToggle`، `RyanPicker1DSlider`، …).
2. نفّذ أحداث واجهة الخطافات الخاصة به لإضافة سلوكك — مؤثرات بصرية إضافية في
   `OnToggleStateChanged`، ومنطق مخصص في `OnSelectButtonClicked`، وأي شيء تتطلبه اللقطة.
3. يظهر صنفك تلقائيًا في قائمة النقر بزر الفأرة الأيمن على اللوحة ضمن **أدوات مخصصة**،
   مجمّعًا حسب نوعه الأساسي.

ترث الأدوات المخصصة كل شيء — الحفظ/التحميل، والتراجع، ومحرر الخصائص، وأدوات المحاذاة/المرآة،
والاستهداف — لأن الصفحة تتعرّف على أي صنف فرعي من نوع نهائي على أنه ذلك النوع. وتسجّل الصفحات التي
تستخدم أداة مخصصة مسار صنف الـ Blueprint في ملف الحفظ، لذا يُعاد تحميلها
بشكل صحيح في أي مشروع يحتوي على ذلك الـ Blueprint.

بالنسبة إلى سلوك وقت النقر الذي لا يستدعي إنشاء صنف فرعي من Blueprint، كثيرًا ما يكفي
[برنامج Python نصي بسيط على الأداة](./python-scripting).
