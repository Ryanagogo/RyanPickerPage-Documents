---
sidebar_position: 7
---

# 라벨 \{#label}

*캔버스 위의 텍스트입니다. 클릭은 그대로 통과합니다.*

라벨은 주석용입니다. 섹션 제목("왼쪽 팔"), 메모, 캡션이 달린 이미지 등에 사용합니다. 라이브 모드에서
클릭 동작도 없고 대상 지정도 없습니다. 즉, 주변 컨트롤의 클릭을 가로채지 않고 자유롭게 겹쳐 놓을 수 있는
유일한 위젯 유형([이미지](./widget-image)와 함께)이기도 합니다.

라벨은 고정 텍스트 대신 **현재 Control Rig의 이름**을 실시간으로 표시할 수도 있습니다. 페이지
모서리에 하나 놓아 두면 이 탭이 어떤 리그를 조작하는지 애니메이터에게 항상 알려 줍니다.

## 작성 \{#authoring}

- **텍스트**, 글꼴 크기, 글꼴 색상, **정렬**, **자동 줄 바꿈**
- **배경색**, 그리고 선택적으로 자체 스트레치 모드와
  [자르기 팬/줌](./widget-image#crop-panzoom)을 갖춘 배경 **이미지**
- **이미지 알파** — 배경색 위에 놓인 배경 이미지의 불투명도, 0–1
- 모서리 반경: 라벨은 기본적으로 모서리가 각져 있지만(반경 0), 다른 모든 유형과 같은
  [모서리 둥글기 캐스케이드](./attribute-editor-and-outliner#corner-radius)를 따릅니다
- 공통 위치/크기/회전 블록

라벨은 [이미지](./widget-image#rendering)와 같은 둥근 모서리 머티리얼로 배경을 렌더링하므로,
모서리 둥글기와 이미지 자르기가 둘 다 동일하게 동작합니다.

## 스크립팅 \{#scripting}

`URyanPickerLabelFunctionLibrary`(카테고리 `Ryan Picker Page|Label`):

| 함수 | |
|---|---|
| `GetText` / `SetText` | |
| `GetFontSize` / `SetFontSize` · `GetFontColor` / `SetFontColor` | |
| `GetTextJustification` / `SetTextJustification` · `GetAutoWrapText` / `SetAutoWrapText` | |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImage` / `SetImage` · `GetStretchMode` / `SetStretchMode` | 배경 이미지 |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | 자르기 팬/줌 |
| `GetImageAlpha` / `SetImageAlpha` | 0–1로 제한 |

라벨에는 이벤트 훅 인터페이스가 없습니다(클릭하거나 드래그할 대상이 없으므로). 하지만
[공통 위젯 함수](./blueprint-api)(위치, 크기, 회전, 모서리 반경, 이름)는
모두 적용됩니다.
