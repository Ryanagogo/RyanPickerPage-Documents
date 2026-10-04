---
sidebar_position: 4
---

# 1D 슬라이더 \{#1d-slider}

*정확히 하나의 트랜스폼 채널에 연결된 슬라이더입니다.*

## 라이브 모드에서 \{#in-live-mode}

슬라이더를 드래그하면 지정된 모든 Control Rig 컨트롤과 대상 액터의 **한 채널**(이동, 회전, 스케일의
X, Y, Z 중 하나)에 값이 기록됩니다. 그 외에는 아무것도 건드리지 않습니다.
슬라이더는 각 대상의 현재 트랜스폼을 읽고, 자신이 맡은 채널 하나만 바꾼 뒤
트랜스폼을 다시 기록합니다. 값 변경은 Sequencer 자동 키를 포함해 플러그인의 나머지 부분과 같은
적용 경로를 거치므로, 슬라이더 조작은 손으로 움직인 컨트롤과 똑같이 키가 생성됩니다.

1D 슬라이더는 자기 소유가 아닌 채널을 절대 점유하지 않으므로, 여러 슬라이더가 *같은* 컨트롤의 서로 다른
채널을 나란히 조작할 수 있습니다. 하나의 발 컨트롤에 이동 Y "들기"와 회전 Z "굴리기"를 함께 두어도
충돌하지 않습니다.

슬라이더를 마우스 오른쪽 버튼으로 클릭하면 **초기값으로 재설정**이 나타나며, 작성된 기본값으로
되돌립니다.

## 값 모델 \{#value-model}

중요한 숫자는 세 개이며, 그중 두 개만 바뀝니다.

- **최솟값 / 최댓값** — 드래그가 대응되는 범위입니다.
- **Current Value** — 현재 값입니다. 드래그로 기록되며, 대상에 적용되는 값입니다.
- **초기값** — 작성자가 정한 기본값으로, 드래그로는 *절대* 바뀌지 않습니다. 속성 편집기에서
  의도적으로만 변경되므로 "초기값으로 재설정"이 돌아갈 수 있는
  항상 안전한 값이 됩니다.

선택 사항인 **단계 크기**는 드래그를 일정 간격으로 스냅하며, **잠김**은 드래그를
완전히 비활성화합니다(샷 도중 실수로 건드리고 싶지 않은 참조용 슬라이더에 유용).

## 작성 \{#authoring}

속성 편집기 필드: 라벨/이름, 최소/최대/현재/초기값, **활성 Channel**(이
슬라이더가 조작하는 단 하나의 채널), **방향**(가로/세로), 바 색상, 핸들 색상,
바 두께, 들어간 핸들 스타일, 잠김, 단계 크기. 여기에
[선택 버튼](./widget-select-button)과 공유하는 대상 지정 필드와 공통
위치/크기/회전/모서리 반경 블록이 더해집니다.

## 스크립팅 \{#scripting}

`URyanPicker1DSliderFunctionLibrary`(카테고리 `Ryan Picker Page|1DSlider`):

| 함수 | |
|---|---|
| `GetMinValue` / `SetMinValue` · `GetMaxValue` / `SetMaxValue` | 범위 |
| `GetCurrentValue` / `SetCurrentValue` | 현재 값 |
| `GetInitialValue` / `SetInitialValue` | 작성된 재설정 지점 |
| `GetActiveChannel` / `SetActiveChannel` | `EPickerSliderChannel`: Translate/Rotate/Scale × X/Y/Z |
| `GetOrientation` / `SetOrientation` | |
| `GetBarColor` / `SetBarColor` · `GetHandleColor` / `SetHandleColor` | |
| `GetBarThickness` / `SetBarThickness` · `GetHandleIndented` / `SetHandleIndented` | |
| `GetLocked` / `SetLocked` · `GetStepSize` / `SetStepSize` | |
| `GetControlNames` · `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 대상 |

Blueprint 서브클래스는 `BI_RyanPicker1DSlider`를 구현할 수 있습니다: `OnSliderConstructed`,
`OnSliderValueChanged(float)`, `OnSliderDragBegin`, `OnSliderDragEnd(bool bValueChanged)`, 그리고
[공통 수명 주기 이벤트](./blueprint-api#event-hooks).
