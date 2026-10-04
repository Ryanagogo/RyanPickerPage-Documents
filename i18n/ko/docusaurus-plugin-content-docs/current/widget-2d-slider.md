---
sidebar_position: 5
---

# 2D 슬라이더 \{#2d-slider}

*드래그 가능한 핸들 하나, 트랜스폼 채널 두 개.*

## 라이브 모드에서 \{#in-live-mode}

2D 슬라이더는 패드입니다. 핸들을 드래그하면 지정된 모든 컨트롤/액터에 대해
X축은 한 트랜스폼 채널에, Y축은 다른 채널에 동시에 기록됩니다. 대표적인 용도로는
발 디딤용 이동 X / 이동 Y 패드나 시선용 회전 X / 회전 Y 패드가 있습니다.

[1D 슬라이더](./widget-1d-slider)와 같은 채널 규칙을 따릅니다. 각 축은 대상에서
자기 채널만 대체하므로, 2D 패드는 같은 컨트롤의 나머지 채널을 조작하는 다른 슬라이더와
함께 사용할 수 있습니다. 자동 키가 적용됩니다. **초기값으로 재설정**은 여기서도 마우스 오른쪽 클릭 메뉴에 있습니다.

## 값 모델 \{#value-model}

1D 슬라이더와 같지만 2차원입니다. **최솟값/최댓값**은 축별 쌍이고, **Current
Value**는 현재 2D 값이며, **초기값**은 드래그로 바뀌지 않는 작성된 기본값입니다. **단계 크기**
와 **잠김**도 동일하게 동작합니다.

두 채널은 각각 독립적으로 선택합니다(**활성 Channel X**, **활성 Channel Y**). 두 축을
*같은* 채널로 설정하는 것은 거의 항상 작성 실수이므로, 속성 편집기는 두 축이 한 값을 두고
조용히 다투게 두지 않고 경고 배너로 표시합니다.

## 작성 \{#authoring}

속성 편집기 필드: 라벨/이름, 축별 최소/최대, 현재/초기값, 활성 Channel X
및 Y(같은 채널 경고 포함), 핸들 색상, 들어간 핸들 스타일, 잠김, 단계 크기,
대상 지정, 공통 위치/크기/회전/모서리 반경 블록.

## 스크립팅 \{#scripting}

`URyanPicker2DSliderFunctionLibrary`(카테고리 `Ryan Picker Page|2DSlider`):

| 함수 | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | `FVector2D`, 축별 |
| `GetCurrentValue` / `SetCurrentValue` · `GetInitialValue` / `SetInitialValue` | `FVector2D` |
| `GetActiveChannelX` / `SetActiveChannelX` · `GetActiveChannelY` / `SetActiveChannelY` | `EPickerSliderChannel` |
| `GetHandleColor` / `SetHandleColor` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 대상 |

Blueprint 서브클래스는 `BI_RyanPicker2DSlider`를 구현할 수 있습니다: `OnSliderConstructed`,
`OnSliderValueChanged(FVector2D)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`,
그리고 [공통 수명 주기 이벤트](./blueprint-api#event-hooks).
