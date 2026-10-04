---
sidebar_position: 8
---

# 이미지 \{#image}

*캔버스 위의 아트워크입니다. 캐릭터 초상, 신체 도식, 배경 등에 사용합니다.*

이미지는 좋은 피커의 시각적 기반입니다. 버튼 뒤에 캐릭터 턴어라운드나 신체 윤곽을 두면
추상적인 버튼 격자가 한눈에 읽히는 화면으로 바뀝니다.
[라벨](./widget-label)과 마찬가지로 라이브 모드에서 클릭 동작이 없으며, 세 가지 기본 그룹 중
가장 뒤에 있는 **이미지** [레이어 그룹](./editing-tools#layer-groups)에서 시작합니다. 따라서
나중에 직접 그룹 순서를 바꾸지 않는 한, 새로 추가한 이미지가 인터랙티브 컨트롤을 가리지 않습니다.

## 자르기 팬/줌 \{#crop-panzoom}

이미지 편집기에서 텍스처를 미리 자르는 대신 페이지에서 프레이밍하세요. **Image Scale**은
원본 텍스처를 확대하고, **Image Offset**은 보이는 영역을 텍스처 위에서 이동합니다. 캐릭터
시트 한 장으로 각기 다른 신체 부위를 프레이밍한 이미지 위젯 여러 개를 만들 수 있습니다. 같은
두 컨트롤이 라벨의 배경 이미지에도 있습니다.

## 작성 \{#authoring}

- **텍스처**
- **스트레치 모드** — 텍스처를 위젯 사각형에 맞추는 방식
- **Image Scale** / **Image Offset** — 자르기 영역
- **배경색** — 텍스처 뒤에 놓이며, **이미지 알파**가 블렌딩되는 대상 색이기도 합니다
- **이미지 알파** — 배경색 위에 놓인 텍스처의 불투명도, 0–1
- 모서리 반경(라벨처럼 기본은 각진 모서리)
- 공통 위치/크기/회전 블록

## 렌더링 \{#rendering}

이미지와 라벨은 단순한 텍스처 브러시가 아니라 하나의 공유 머티리얼
(`M_RyanPickerRoundedImage`)의 다이내믹 인스턴스로 그려집니다. 모서리 둥글기, 스트레치 모드 맞춤,
자르기 영역이 모두 그 하나의 머티리얼 패스에서 계산됩니다. 그래서 두
유형은 픽셀 단위로 동일하게 동작하며, 자르기에 추가 비용이 들지 않습니다.

## 스크립팅 \{#scripting}

`URyanPickerImageFunctionLibrary`(카테고리 `Ryan Picker Page|Image`):

| 함수 | |
|---|---|
| `GetImageTexture` / `SetImageTexture` | |
| `GetStretchMode` / `SetStretchMode` | |
| `GetImageScale` / `SetImageScale` · `GetImageOffset` / `SetImageOffset` | 자르기 팬/줌 |
| `GetBackgroundColor` / `SetBackgroundColor` | |
| `GetImageAlpha` / `SetImageAlpha` | 0–1로 제한 |

이벤트 훅 인터페이스는 없으며, [공통 위젯 함수](./blueprint-api)가 적용됩니다.
