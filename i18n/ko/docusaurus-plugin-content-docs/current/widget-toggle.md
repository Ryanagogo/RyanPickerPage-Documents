---
sidebar_position: 6
---

# 토글 \{#toggle}

*두 가지 상태를 가진 스위치입니다. 대표적인 용도는 IK/FK 전환입니다.*

## 라이브 모드에서 \{#in-live-mode}

토글은 **A**와 **B** 두 가지 상태를 가집니다. 클릭하면 두 상태가 전환되며,
방금 활성화된 상태가 자체 설정을 적용합니다. 그 상태의 라벨과 색상이 반영되고, 지정된 리그 컨트롤과
액터가 선택되며, 그 상태의 [Python 스크립트](./python-scripting)가 실행됩니다.
토글의 모든 설정은 **상태별**로 작성합니다. IK/FK 토글이라면 한 상태에서는 IK 컨트롤을,
다른 상태에서는 FK 컨트롤을 선택하고 상태마다 다른 색상을 쓸 수 있습니다.

## 토글 그룹 \{#toggle-groups}

여러 토글을 그룹으로 묶으면(두 개 이상 선택 후 마우스 오른쪽 클릭 메뉴) 라디오 버튼처럼
동작합니다. 각 토글은 어느 상태를 "켜짐"으로 볼지(**켜짐 상태**) 선언하며,
그룹의 한 멤버를 켜면 다른 모든 멤버가 꺼집니다. 그룹으로 묶인 위젯은 캔버스에서 구별되는
테두리가 표시되고, 그룹에 이름을 지정하거나 바꿀 수 있으며,
[Outliner의 **그룹별** 보기](./attribute-editor-and-outliner)는 각 그룹의 멤버를
그룹 헤더 아래에 나열합니다. 그룹을 복사하면 멤버와 이름을 포함해 완전히 새로운 그룹으로
다시 만드는 붙여넣기를 선택할 수 있습니다.

## 리그의 bool 채널 조작하기 \{#driving-a-rigs-bool-channel}

컨트롤 선택 외에도, 토글을 Control Rig 컨트롤의 **bool 애니메이션 채널**에 직접
바인딩할 수 있습니다. 예를 들어 리그의 실제 IK/FK 전환 속성 같은 것입니다.

- 채널의 **부모 컨트롤**과 **채널** 자체를 지정하고, 토글의 어느 상태가
  채널의 *true*를 뜻하는지 선택합니다.
- 그러면 토글을 클릭할 때 bool 값도 함께 기록됩니다.
- 바인딩은 양방향입니다. 페이지가 채널의 현재 값을 폴링해 토글의 시각적 상태에
  반영하므로, 키가 설정된 IK/FK 전환을 지나 스크럽하면 클릭 동작을 다시 실행하지 않고도
  페이지의 버튼이 전환됩니다.

## 작성 \{#authoring}

속성 편집기 필드: 상태별 라벨 / 배경색 / 글꼴 색상 / 글꼴 크기 / 컨트롤
이름 / 대상 액터 / Python 스크립트, 현재 상태와 켜짐 상태, 애니메이션 채널 bool
바인딩(활성화, 부모 컨트롤, 채널 이름, true 상태), 그리고 공통
위치/크기/회전/모서리 반경 블록.

## 스크립팅 \{#scripting}

`URyanPickerToggleFunctionLibrary`(카테고리 `Ryan Picker Page|Toggle`). 대부분의 함수는
`ERyanPickerToggleState`를 받아 한 상태의 설정을 읽거나 씁니다.

| 함수 | |
|---|---|
| `GetToggleState` / `SetToggleState` | 현재 상태 |
| `GetOnState` / `SetOnState` | 그룹 배타성에서 "켜짐"으로 보는 상태 |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | 애니메이션 채널 바인딩 마스터 스위치 |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Blueprint 서브클래스는 `BI_RyanPickerToggle`을 구현할 수 있습니다: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, 그리고
[공통 수명 주기 이벤트](./blueprint-api#event-hooks).
