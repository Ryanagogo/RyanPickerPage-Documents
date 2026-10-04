---
sidebar_position: 16
---

# Blueprint API \{#blueprint-api}

플러그인의 스크립팅 인터페이스는 일관되게 하나의 패턴을 따릅니다. 정적 노드로 이루어진
**함수 라이브러리**로, 모든 위젯이 가진 기능을 위한 공유 라이브러리 하나와, 해당 유형만 가진 기능을 위한
위젯 유형별 라이브러리가 있습니다. 모든 함수는 위젯을 `DefaultToSelf`가 지정된 `Target`으로 받으므로,
위젯 Blueprint 자체 그래프 안에서는 노드가 자동으로 `self`에 연결됩니다.

## 공유 함수 — 모든 위젯 유형 \{#shared-functions--every-widget-type}

`URyanPickerWidgetFunctionLibrary`, 카테고리 `Ryan Picker Page|Widget`:

| 함수 | |
|---|---|
| `GetPosition` / `SetPosition` · `GetSize` / `SetSize` | 캔버스 지오메트리 |
| `GetRotation` / `SetRotation` | 도 단위, [0, 360)으로 정규화 |
| `GetCornerRadius` / `SetCornerRadius` · `GetOverrideCornerRadius` / `SetOverrideCornerRadius` | [모서리 둥글기 캐스케이드](./attribute-editor-and-outliner#corner-radius)의 위젯별 단계 |
| `GetWidgetName` / `SetWidgetName` | 페이지 내 고유 이름 |
| `GetCurrentControlRig` | 소유 페이지의 현재 리그 |
| `GetActorFromGUID` | 페이지를 통해 액터 식별자를 해석 |

## 유형별 함수 \{#per-type-functions}

각 위젯 유형 고유의 라이브러리는 해당 페이지에 문서화되어 있습니다.

| 라이브러리 | 카테고리 | 레퍼런스 |
|---|---|---|
| `URyanPickerSelectButtonFunctionLibrary` | `…\|SelectControl` | [선택 버튼](./widget-select-button#scripting) |
| `URyanPicker1DSliderFunctionLibrary` | `…\|1DSlider` | [1D 슬라이더](./widget-1d-slider#scripting) |
| `URyanPicker2DSliderFunctionLibrary` | `…\|2DSlider` | [2D 슬라이더](./widget-2d-slider#scripting) |
| `URyanPickerToggleFunctionLibrary` | `…\|Toggle` | [토글](./widget-toggle#scripting) |
| `URyanPickerLabelFunctionLibrary` | `…\|Label` | [라벨](./widget-label#scripting) |
| `URyanPickerImageFunctionLibrary` | `…\|Image` | [이미지](./widget-image#scripting) |

## 이벤트 훅 \{#event-hooks}

네 가지 인터랙티브 위젯 유형은 각각 `BlueprintNativeEvent` 훅으로 이루어진 Blueprint 인터페이스를
제공합니다. Blueprint 서브클래스에서 이를 구현하면 C++ 없이 동작을 추가할 수 있습니다.

| 인터페이스 | 유형별 이벤트 |
|---|---|
| `BI_RyanPickerSelectButton` | `OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |
| `BI_RyanPicker1DSlider` | `OnSliderConstructed`, `OnSliderValueChanged`, `OnSliderDragBegin`, `OnSliderDragEnd` |
| `BI_RyanPicker2DSlider` | 같은 네 가지, 2D 값 |
| `BI_RyanPickerToggle` | `OnToggleConstructed`, `OnToggleClicked`, `OnToggleStateChanged`, `OnControlRigControlsSelected`, `OnTargetActorsSelected` |

네 인터페이스 모두 모든 인터랙티브 유형이 공유하는 세 가지 **수명 주기 이벤트**를 상속합니다.

- `OnWidgetSelected(bool)` — 편집 모드 선택이 변경됨
- `OnWidgetHighlighted(bool)` — 호버 상태가 변경됨
- `OnWidgetEditModeChanged(bool)` — 페이지가 편집 모드에 들어가거나 나옴

라벨과 이미지에는 훅 인터페이스가 없지만(클릭할 수 있는 요소가 없으므로), 공유
함수 라이브러리가 이들을 다룹니다.

## 사용자 지정 위젯 Blueprint \{#custom-widget-blueprints}

가장 깊은 확장 지점입니다. **Blueprint에서 위젯 유형의 서브클래스를 만들면, 페이지는 이를
독립된 정식 위젯 유형으로 취급합니다.**

1. 부모 클래스가 네이티브 리프 위젯 클래스 중 하나
   (`RyanPickerSelectButton`, `RyanPickerToggle`, `RyanPicker1DSlider` 등)인 Blueprint 클래스를 만듭니다.
2. 훅 인터페이스의 이벤트를 구현해 원하는 동작을 추가합니다. `OnToggleStateChanged`에서
   시각 효과를 더하거나, `OnSelectButtonClicked`에서 사용자 지정 로직을 실행하는 등 샷에 필요한 무엇이든 가능합니다.
3. 클래스는 캔버스의 마우스 오른쪽 클릭 메뉴에서 **사용자 지정 위젯** 아래에,
   기본 유형별로 묶여 자동으로 나타납니다.

사용자 지정 위젯은 저장/불러오기, 실행 취소, 속성 편집기, 정렬/미러 도구, 대상 지정 등
모든 것을 상속합니다. 페이지가 리프 유형의 모든 서브클래스를 그 유형으로 인식하기 때문입니다. 사용자 지정 위젯을
사용하는 페이지는 저장 파일에 Blueprint의 클래스 경로를 기록하므로, 해당 Blueprint가 포함된
모든 프로젝트에서 올바르게 다시 불러올 수 있습니다.

Blueprint 서브클래스까지 만들 필요가 없는 클릭 시 동작이라면, 간단한
[위젯의 Python 스크립트](./python-scripting)로 충분한 경우가 많습니다.
