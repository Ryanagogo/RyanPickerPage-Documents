---
sidebar_position: 1
---

# 소개 \{#introduction}

**Ryan Picker Page**는 Unreal Engine용 애니메이션 피커입니다. 버튼, 슬라이더,
토글, 라벨, 이미지로 구성된 캔버스를 캐릭터마다 한 번 배치해 두면, 이후에는 클릭 한 번으로
Control Rig 컨트롤(및 레벨 액터)을 선택하고 조작할 수 있습니다. 샷 작업 도중에 뷰포트,
리그 계층 구조, Sequencer 트리를 뒤질 필요가 없습니다.

피커와 그 에디터는 같은 창입니다. 편집 모드로 전환해 레이아웃을 만들고,
라이브 모드로 돌아와 애니메이션 작업에 사용합니다. 페이지는 이식 가능한 JSON 파일로 저장되므로
프로젝트 간이나 팀원과 공유할 수 있습니다.

## 요구 사항 \{#requirements}

- Unreal Engine **5.6 – 5.8**
- 다음 엔진 플러그인 활성화(이 플러그인이 종속성으로 선언함): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

이 플러그인은 에디터 전용입니다. 패키지 빌드에 포함되지 않으며 런타임에는 아무것도 추가하지 않습니다.

## 설치 \{#installation}

1. `RyanPickerPage` 폴더를 프로젝트의 `Plugins/` 디렉터리에 복사합니다.
2. **Edit → Plugins**에서 활성화하고 에디터를 다시 시작합니다.
3. **Tools → Ryan Picker Page**에서 피커를 엽니다.

## 이 문서 둘러보기 \{#finding-your-way-around-these-docs}

다른 사람이 만들어 준 페이지를 사용하는 **애니메이터**라면
[시작하기](./getting-started)와 각 위젯 페이지의 라이브 모드 섹션부터 읽으세요.

**페이지를 만드는** 분이라면 다음 순서로 읽으세요: [시작하기](./getting-started) →
[Control Rig 및 대상 액터](./control-rig-and-targets) → 위젯 유형 페이지 →
[편집 및 캔버스 도구](./editing-tools).

**플러그인을 확장하는 TD**라면
[Blueprint API](./blueprint-api)와 [Python 스크립팅](./python-scripting) 페이지로 바로 이동하세요.
직접 만든 위젯 변형을 Add Widget 메뉴에 표시되는 Blueprint 서브클래스로 배포하는 방법도 다룹니다.

### 전체 페이지 \{#all-pages}

| 섹션 | 페이지 |
|---|---|
| 기본 | [시작하기](./getting-started) |
| 위젯 유형 | [선택 버튼](./widget-select-button) · [1D 슬라이더](./widget-1d-slider) · [2D 슬라이더](./widget-2d-slider) · [토글](./widget-toggle) · [라벨](./widget-label) · [이미지](./widget-image) |
| 페이지 만들기 | [편집 및 캔버스 도구](./editing-tools) · [포즈 미러](./mirror-pose) · [북마크](./bookmarks) |
| 대상 지정 방식 | [Control Rig 및 대상 액터](./control-rig-and-targets) · [속성 편집기 및 Outliner](./attribute-editor-and-outliner) |
| 파일 및 설정 | [저장, 불러오기 및 파일](./save-load-and-files) · [에디터 설정](./editor-settings) |
| 확장 | [Blueprint API](./blueprint-api) · [Python 스크립팅](./python-scripting) |
