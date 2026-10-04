---
sidebar_position: 15
---

# 에디터 설정 \{#editor-settings}

<strong>파일 → Settings…</strong>는 플러그인의 전역 설정 대화 상자를 엽니다. 이 설정들은 **컴퓨터별**
환경설정으로 여는 모든 페이지에 적용되며, 페이지별 Class Defaults(페이지 Blueprint에 저장)나
파일별 데이터(페이지 파일에 저장)와는 다릅니다.

## 새 위젯 동작 \{#new-widget-behavior}

| 설정 | 기본값 | |
|---|---|---|
| Seed New Widget Targets From Selection | 켜짐 | 새 버튼/슬라이더의 대상을 현재 선택으로 미리 채웁니다. [대상이 지정되는 방식](./control-rig-and-targets#how-targets-get-assigned) 참조 |
| Default Interactive Selection Mode | 꺼짐 | 새 선택 버튼이 [대화형 선택 모드](./widget-select-button#interactive-selection-mode)로 시작합니다 |
| 새 위젯 기본 크기 | 200 × 100 | **Override** 체크박스 포함. 끄면 페이지 자체의 Class Defaults 값이 우선하고, 켜면 이 대화 상자의 값으로 대체됩니다 |
| 기본 모서리 반경 | 10 | Override 체크박스 방식은 동일합니다. [모서리 둥글기 캐스케이드](./attribute-editor-and-outliner#corner-radius)의 전역 대체값입니다 |

## Sticky Defaults 카테고리 \{#sticky-defaults-categories}

일곱 개의 체크박스(**색상, 글꼴, 모서리 반경, 크기, 회전, 텍스트, 이미지**, 기본적으로 모두 켜짐)로
[Copy to Sticky Defaults](./editing-tools#widget-defaults)가 새 위젯에 실제로 적용할
속성 그룹을 제어합니다.
예를 들어 크기와 회전을 끄면 sticky defaults가 순수하게 외관에만 영향을 줍니다.

## 페이지 및 관리 \{#page--housekeeping}

| 설정 | 기본값 | |
|---|---|---|
| 기본 북마크 수 | 4 | 새 페이지의 사용자 [북마크](./bookmarks) 슬롯 수(최대 8) |
| 실행 취소 스택 깊이 | 30 | 메인 페이지의 실행 취소/다시 실행 단계 수 |
| 세션 상태 최대 유지 기간 | 90일 | 이보다 오래된 [세션 상태](./save-load-and-files#session-state) 항목은 정리됩니다. 0이면 정리하지 않습니다 |

## 재정의 패턴 \{#the-override-pattern}

페이지 Class Defaults에도 존재하는 값(위젯 크기, 모서리 반경)의 경우 이 대화 상자는
의도적으로 한발 물러섭니다. 여기서 해당 **Override** 체크박스를 켜기 전까지는 페이지 Blueprint의
Class Defaults가 우선합니다. 이렇게 하면 공유 페이지 Blueprint의 조정값은 기본적으로 그대로 유지되면서도
개별 컴퓨터가 자체 값을 고집할 수 있습니다.
