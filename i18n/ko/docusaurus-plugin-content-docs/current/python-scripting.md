---
sidebar_position: 17
---

# Python 스크립팅 \{#python-scripting}

*에디터 Python을 클릭에 연결합니다. Blueprint 서브클래스도, 컴파일도 필요 없습니다.*

[선택 버튼](./widget-select-button)에는 선택 사항인 Python 스크립트를 하나,
[토글](./widget-toggle)에는 **상태마다** 하나씩 지정할 수 있습니다. 스크립트는 라이브 모드에서 위젯을 클릭할 때마다
에디터의 Python 환경(표준 `unreal` 모듈과 Python Editor Script Plugin이 제공하는 기타 모든 기능)에서
실행됩니다.

## 실행 순서 \{#execution-order}

스크립트는 클릭에 따른 선택 작업이 끝난 **후**에 실행됩니다. 즉, 컨트롤과 액터가
선택되고 토글 상태도 이미 전환된 상태입니다. 따라서 스크립트는 위젯의 대상이
현재 선택이라고 가정하고 작업할 수 있습니다.

```python
import unreal

# 버튼의 대상이 이미 선택된 상태에서 실행됩니다.
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"picker clicked: {actor.get_actor_label()}")
```

토글에서는 방금 전환*된* 상태의 스크립트가 실행됩니다. IK/FK 토글이라면 어느 방향으로든
전환될 때마다 매칭/스냅 로직을 실행할 수 있습니다.

## 작성 및 저장 \{#authoring-and-storage}

편집 모드에서 위젯을 선택한 상태로 속성 편집기의 **Python 스크립트** 필드에서 스크립트를 편집하거나,
Blueprint에서 `GetPythonScript` / `SetPythonScript`(선택 버튼) 및
`GetPythonScriptForState` / `SetPythonScriptForState`(토글)를 통해 편집합니다.

저장된 페이지 파일에서 스크립트는 Base64로 인코딩되어 저장됩니다. 이는 전송상의 세부 사항일 뿐 보안 기능이 아닙니다.
에디터 UI, Blueprint, 메모리에서는 일반 텍스트이며, 에디터 Python의 모든 권한으로
실행됩니다. **신뢰할 수 있는 출처의 페이지만 불러오세요.** 다른 에디터 스크립트에 적용하는 것과 같은 기준입니다.
공유된 페이지 파일을 검토할 때는 코드로 취급하세요.
