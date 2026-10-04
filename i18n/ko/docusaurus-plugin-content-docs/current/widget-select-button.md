---
sidebar_position: 3
---

# 선택 버튼 \{#select-button}

*핵심 일꾼: 무언가를 선택하는 버튼입니다.*

## 라이브 모드에서 \{#in-live-mode}

선택 버튼을 클릭하면 지정된 Control Rig 컨트롤과 대상 액터가 뷰포트, 리그,
그리고 바인딩된 경우 Sequencer에서 선택되고, 이어서 버튼에
[Python 스크립트](./python-scripting)가 있으면 실행됩니다. 버튼에는 컨트롤 하나뿐 아니라 세트 전체
("모든 손가락 선택")를 지정할 수 있으며, 리그 컨트롤과 일반 액터를 자유롭게 섞을 수 있습니다.

**Ctrl+클릭**은 대체가 아니라 토글입니다. 버튼의 대상이 아직 모두 선택되지 않았다면
현재 선택에 추가되고, 이미 모두 선택되어 있다면 선택에서 제거됩니다. 어느 쪽이든 나머지
선택은 그대로 유지됩니다.

## 두 가지 선택 동작 \{#two-selection-behaviors}

선택 버튼은 두 가지 모드 중 하나로 동작하며, 속성 편집기의 **대화형 선택 모드**
체크박스로 전환합니다.

### 선택 세트 모드(기본값) \{#selection-set-mode-default}

버튼은 저장된 선택 세트입니다. 클릭 → 버튼의 대상이 선택이 됩니다. 버튼은
다른 곳에서 무엇을 선택하는지 추적하지 않습니다.

### 대화형 선택 모드 \{#interactive-selection-mode}

버튼이 에디터 선택을 실시간으로 반영합니다. 전통적인 애니메이션 피커가
동작하는 방식과 같습니다.

- 페이지는 현재 뷰포트/리그 선택을 초당 여러 번 폴링하고, 버튼의 대상이 모두
  현재 선택에 포함되면 **버튼을 켭니다**. 뷰포트에서 컨트롤을 선택하면
  페이지의 해당 버튼이 저절로 강조 표시됩니다.
- 클릭은 **추가 방식**으로 선택합니다. 버튼의 대상이 이미 선택된 항목을 대체하지 않고
  거기에 더해지므로, 여러 대화형 버튼을 차례로 클릭해 선택을 쌓아 갈 수 있습니다.
- Ctrl+클릭은 앞서 설명한 대로 버튼의 대상을 선택에서 제거합니다.

이 모드는 **버튼당 컨트롤(또는 액터) 하나**를 위해 설계되었습니다. 대상이 여러 개인 버튼에서
활성화해도 동작은 하지만 경고 토스트가 표시됩니다. 대상이 여러 개인 버튼은 부분 선택을
모호함 없이 반영할 수 없기 때문입니다. 폴링은 페이지 탭이 앞에 있고 편집 모드가 꺼져 있을 때만
실행되므로, 백그라운드 탭에는 비용이 들지 않습니다.

새 버튼이 어느 모드로 시작할지는 [에디터 설정](./editor-settings)에서 기본값으로 지정할 수 있습니다.

## 작성 \{#authoring}

편집 모드에서 버튼을 선택하면 속성 편집기에 다음 항목이 표시됩니다.

- **라벨**(및 표시 여부), 위젯 이름, 글꼴 크기
- **배경색** 및 **글꼴 색상**
- **컨트롤 이름** — 페이지의 현재 리그를 기준으로 해석됩니다.
  [Control Rig 및 대상 액터](./control-rig-and-targets) 참조
- **대상 액터** — 지정된 모든 액터에 대한 해석된, 읽기 쉬운 요약
- **대화형 선택 모드** 체크박스
- **Python 스크립트** — 여러 줄. 클릭할 때마다 선택 후에 실행됩니다
- 위치, 크기, 회전, 모서리 반경 — 모든 위젯 공통

새 버튼은 생성 시점에 선택된 항목으로 대상 목록을 채웁니다(기본적으로 켜져 있는
[설정](./editor-settings)). 가장 빠른 작성 흐름은 *뷰포트에서 선택하고, 버튼을 추가하면 끝*입니다.

## 스크립팅 \{#scripting}

Blueprint 함수는 `URyanPickerSelectButtonFunctionLibrary`
(카테고리 `Ryan Picker Page|SelectControl`)에 있으며, 공통 트랜스폼/모양 함수는
[공유 위젯 라이브러리](./blueprint-api)에 있습니다.

| 함수 | |
|---|---|
| `GetControlNames` | 지정된 리그 컨트롤 이름 |
| `GetTargetActorGUIDs` / `GetTargetActorBindingGUIDs` | 지정된 액터, 두 식별자 공간 모두. [Sequencer 스포너블](./control-rig-and-targets#sequencer-spawnables) 참조 |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetFontColor` / `SetFontColor` | |
| `GetFontSize` / `SetFontSize` | |
| `GetPythonScript` / `SetPythonScript` | |
| `GetInteractiveSelectionMode` / `SetInteractiveSelectionMode` | 대상이 여러 개인 버튼에서는 세터가 경고합니다(차단하지는 않음) |

Blueprint 서브클래스는 `BI_RyanPickerSelectButton` 인터페이스 이벤트를 구현할 수 있습니다:
`OnSelectButtonConstructed`, `OnSelectButtonClicked`, `OnControlRigControlsSelected`,
`OnTargetActorsSelected`, 그리고 모든 위젯 유형이 공유하는 [세 가지 수명 주기 이벤트](./blueprint-api#event-hooks).
서브클래스가 Add Widget 메뉴에 표시되는 방식은 [사용자 지정 위젯 Blueprint](./blueprint-api#custom-widget-blueprints)를
참조하세요.
