import useBaseUrl from '@docusaurus/useBaseUrl';

# 선택 버튼 \{#selection-button}

### 새 선택 버튼 만들기 \{#creating-a-new-selection-button}

새 **선택 버튼**을 만들려면 **편집 모드**여야 합니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**피커 캔버스의 빈 곳을 마우스 오른쪽 버튼으로 클릭**해 팝업 메뉴를 연 다음 "선택 버튼" 메뉴 항목을 클릭합니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### 선택 버튼 대상 \{#selection-button-targets}

##### 선택 목록에 대상 설정하기 \{#setting-targets-in-the-selection-list}

선택 목록에 대상을 설정하고 추가하는 기본 방법은 두 가지입니다

- **선택 버튼을 만들기 전에**: 버튼이 선택할 컨트롤이나 액터를 선택한 다음 새 선택 버튼을 만듭니다
- **선택 버튼을 만든 후에**: 컨트롤이나 액터를 선택하고, 버튼을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 연 다음 대상 작업 중 하나를 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"선택 항목으로 설정"** 은 목록의 기존 대상을 현재 선택된 항목으로 모두 대체합니다
- **"선택 항목 추가"** 는 현재 선택된 대상을 대상 목록에 추가합니다

##### 선택 목록에서 특정 대상 제거하기 \{#removing-specific-targets-from-the-selection-list}

- 특정 대상을 제거하려면 제거할 컨트롤이나 액터를 선택하고, 선택 버튼을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 연 다음 "선택 항목 제거" 메뉴 항목을 클릭합니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### 선택 목록 비우기 \{#clearing-the-selection-list}

- 선택 목록의 모든 대상을 지우려면 선택 버튼을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 연 다음 "지우기" 메뉴 항목을 클릭합니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### 선택 목록의 현재 대상 확인하기 \{#seeing-the-current-targets-in-the-selection-list}

대상 목록에 어떤 대상이 있는지 확인하는 기본 방법은 세 가지입니다.

-  **선택 버튼 위에 마우스를 올리면** 툴팁이 나타나며, 모든 대상이 표시됩니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **선택 버튼을 마우스 오른쪽 버튼으로 클릭**해 팝업 메뉴를 연 다음 "현재 항목 나열" 메뉴 항목을 클릭합니다. 대상 목록이 Output Log에 출력됩니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **선택 버튼을 선택**한 다음 속성 편집기를 열고 Control Rig 및 대상 카테고리의 목록을 확인합니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### 선택 목록의 대상 선택하기 \{#selecting-the-targets-in-the-selection-list}

대상을 선택하는 기본 방법은 두 가지입니다

- **라이브 모드에서는** 버튼을 클릭하기만 하면 모든 대상이 선택됩니다
- **편집 모드에서는** 버튼을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 연 다음 "현재 항목 선택" 메뉴 항목을 선택합니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### 다른 위젯 선택하기 \{#selecting-other-widgets}

다른 위젯을 선택할 수 있어야 하는 경우가 있습니다. 예를 들어 손가락의 모든 관절에 피커 버튼을 만들어 두었고, 손가락 마디의 열이나 행을 한 번에 선택하는 버튼을 하나 두고 싶을 때입니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

먼저 편집 모드인지 확인한 다음 대상 위젯을 모두 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

다음으로 선택 버튼을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 열고 "다른 위젯 -> "을 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

라이브 모드로 돌아와 선택 버튼을 클릭하면 대상 위젯과 그 위젯들의 모든 대상이 선택됩니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### 속성 편집기에서 \{#from-the-attribute-editor}

속성 편집기에서 값을 보려면 위젯을 하나만 선택해야 합니다

##### Python 스크립트 \{#python-script}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

스크립트 소스 필드에 어떤 Python 스크립트든 붙여넣을 수 있습니다. 스크립트가 길면 필드가 늘어납니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

이 필드는 스크립트 편집에 그다지 적합하지 않으며, 너무 긴 스크립트는 넣지 않는 것이 좋습니다. 스크립트가 길고 제대로 된 스크립트 편집기를 쓰고 싶다면, 스크립트를 임포트해서 실행하면 됩니다.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### 선택 버튼 모양 \{#selection-button-appearance}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **라벨 사용**
  - 라벨을 표시하거나 숨깁니다
- **색상**
  - 버튼의 색상을 설정합니다
- **글꼴**
  - 글꼴 색상과 글꼴 크기를 설정합니다

##### 선택 버튼 텍스트 \{#selection-button-text}

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **라벨**

  - 라벨의 텍스트를 설정합니다

- **텍스트 스타일**

  - 긴 텍스트는 다음 설정으로 서식을 지정할 수 있습니다

    - Justification

    - Word Wrap

    - Margin

    - Clip
