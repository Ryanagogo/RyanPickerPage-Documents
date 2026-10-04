import useBaseUrl from '@docusaurus/useBaseUrl';

# 빠른 시작 \{#quick-start}

#### 마네킹 Control Rig 불러오기 \{#load-in-a-mannequin-control-rig}

<img src={useBaseUrl('/img/quick-start/quick-start/load-mannequin.png')} alt="load-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

**Picker Page 열기: Tools -> Ryan Tools -> Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/start-picker-page.png')} alt="start-picker-page" style={{marginLeft: '0px', zoom: '80%'}} />

Epic Mannequin용으로 미리 정의된 Picker Page를 엽니다

**Picker Page: 파일 -> 미리 정의된 항목 불러오기 -> Epic Mannequin**

<img src={useBaseUrl('/img/quick-start/quick-start/open-epic-mannequin-picker.png')} alt="open-epic-mannequin-picker" style={{marginLeft: 0, zoom: '80%'}} />

Picker Page의 버튼 중 하나를 클릭합니다

<img src={useBaseUrl('/img/quick-start/quick-start/pick-mannequin-picker-button.png')} alt="pick-mannequin-picker-button" style={{marginLeft: 0, zoom: '50%'}} />

여러 버튼을 둘러싸도록 사각형을 드래그하면 여러 컨트롤을 한 번에 선택할 수 있습니다

<img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-buttons.png')} alt="multi-select-mannequin-buttons" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/multi-select-mannequin-controls.png')} alt="multi-select-mannequin-controls" style={{zoom: '67%'}} />

이제 직접 피커 버튼을 만들어 봅시다.

먼저 빈 Picker Page 캔버스에서 시작합니다

**Picker Page: 파일 -> 새 Picker Page**

<img src={useBaseUrl('/img/quick-start/quick-start/new-blank-picker-page.png')} alt="new-blank-picker-page" style={{marginLeft: 0, zoom: '67%'}} />

저장하지 않은 변경 사항 팝업이 나타나면 "예"를 클릭하면 됩니다

<img src={useBaseUrl('/img/quick-start/quick-start/unsaved-changes-popup.png')} alt="unsaved-changes-popup" style={{marginLeft: 0, zoom: '80%'}} />

#### 이제 편집 모드로 들어갑니다. "편집 모드" 토글 버튼을 클릭하기만 하면 됩니다. \{#now-go-into-edit-mode--just-click-the-edit-mode-toggle-button}

버튼이 파란색으로 바뀌고 Picker Page 캔버스에 빨간 테두리가 생깁니다.

<img src={useBaseUrl('/img/quick-start/quick-start/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: '50%'}} />

뷰포트로 가서 마네킹의 컨트롤 중 하나를 선택합니다

<img src={useBaseUrl('/img/quick-start/quick-start/select-control-on-mannequin.png')} alt="select-control-on-mannequin" style={{marginLeft: 0, zoom: '67%'}} />

Picker Page로 돌아와 캔버스의 빈 곳을 마우스 오른쪽 버튼으로 클릭합니다.

피커 위젯을 추가할 수 있는 팝업 메뉴가 나타납니다.

첫 번째 항목인 "선택 버튼"을 클릭합니다

<img src={useBaseUrl('/img/quick-start/quick-start/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/quick-start/new-selection-button.png')} alt="new-selection-button" style={{marginLeft: 0, zoom: '100%'}} />

선택해 둔 Control Rig 컨트롤이 무엇이든, 선택 버튼 위젯을 만들 때 그 위젯에 추가됩니다.

#### 편집 모드 토글 버튼을 클릭해 편집 모드에서 나옵니다. \{#click-on-the-edit-mode-toggle-button-to-get-out-of-edit-mode}

캔버스의 빈 곳을 마우스 왼쪽 버튼으로 클릭하면 버튼 선택이 해제됩니다. 이때 Control Rig 컨트롤의 선택도 함께 해제됩니다.

<img src={useBaseUrl('/img/quick-start/quick-start/deselect-button.png')} alt="deselect-button" style={{marginLeft: 0, zoom: ''}} />

버튼을 클릭하거나 버튼 주위에 사각형을 그리면 버튼이 다시 선택됩니다. 이때 Control Rig 컨트롤도 다시 선택됩니다. (편집 모드에서는 위젯만 선택되고 Control Rig에는 영향이 없습니다.)

<img src={useBaseUrl('/img/quick-start/quick-start/box-select-button.png')} alt="box-select-button" style={{marginLeft: 0, zoom: ''}} />

<img src={useBaseUrl('/img/quick-start/quick-start/test-select-selection-button.png')} alt="test-select-selection-button" style={{marginLeft: 0, zoom: '80%'}} />

**참고:** Control Rig 컨트롤을 먼저 선택하면 위젯이 선택됩니다.

#### 이제 다시 편집 모드로 들어갑니다. \{#now-go-back-into-edit-mode}

마우스를 가장자리나 모서리 위로 옮기면 크기 조절 마우스 포인터가 나타납니다.

마우스를 위젯 가운데로 옮기면 이동 마우스 포인터가 나타납니다.

크기 조절 또는 이동 포인터 상태에서 클릭하고 드래그하면 위젯의 크기를 조절하거나 이동할 수 있습니다.

<img src={useBaseUrl('/img/quick-start/quick-start/resize-widget-mouse-pointer.png')} alt="resize-widget-mouse-pointer" style={{marginLeft: 0, zoom: ''}} /><img src={useBaseUrl('/img/quick-start/quick-start/translate-widget-mouse-pointer.png')} alt="translate-widget-mouse-pointer" />

**위젯을 선택한 상태에서 속성 편집기를 열어 봅시다.**

캔버스 오른쪽 위 모서리의 작은 "+"입니다

<img src={useBaseUrl('/img/quick-start/quick-start/open-attribute-editor.png')} alt="open-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

모양 그룹에서 위젯 색상을 바꿀 수 있습니다

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-color.png')} alt="change-widget-color" style={{marginLeft: 0, zoom: '80%'}} />

텍스트 그룹에서 버튼 라벨의 텍스트를 바꿀 수 있습니다

<img src={useBaseUrl('/img/quick-start/quick-start/change-widget-text.png')} alt="change-widget-text" style={{marginLeft: 0, zoom: ''}} />

버튼 속성 편집을 마치면 속성 편집기를 닫고 위젯을 더 만들 수 있습니다.

#### 빠른 시작을 끝까지 읽어 주셔서 감사합니다! \{#thanks-for-reading-through-the-quick-start}
