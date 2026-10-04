import useBaseUrl from '@docusaurus/useBaseUrl';

# 툴바 \{#toolbar}

**편집 모드에서는** 에디터 헤더 부분에 툴바가 있습니다

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

이 도구들로 선택한 하나 이상의 피커 위젯에 다양한 작업을 수행할 수 있습니다.

### 사용 방법: \{#the-way-it-works}

- 위젯을 선택합니다
- 툴바 버튼을 클릭해 도구를 엽니다
- 필드의 값을 바꾸거나 버튼을 클릭합니다
- 값 변경이나 버튼 클릭은 선택된 모든 위젯에 적용됩니다

### 이미지 \{#image}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**이 도구는 이미지를 가질 수 있는 라벨 위젯과 이미지 위젯에 적용됩니다.**

- 라벨 또는 이미지 위젯을 선택한 다음, 드롭다운을 클릭해 원하는 이미지를 검색하거나 Content Browser에서 선택한 이미지를 추가합니다. 선택된 모든 위젯이 그 이미지를 사용합니다

### 색상 \{#color}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**이 도구는 배경색이 있는 모든 위젯에 적용됩니다. 텍스트가 있는 위젯에도 적용됩니다.**

- 위젯을 선택한 다음 배경색 또는 글꼴 색상을 클릭하고 색상 선택기에서 원하는 색을 고릅니다. 선택된 모든 위젯에 그 색상이 적용됩니다

### 라벨 \{#label}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**이 도구는 텍스트가 있는 위젯에 적용됩니다.**

- 위젯을 선택한 다음 라벨 필드의 텍스트나 글꼴 크기 값을 바꿉니다. 선택된 모든 위젯의 텍스트가 업데이트됩니다

### 크기 \{#size}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**이 도구는 모든 위젯에 적용됩니다**

- 위젯을 선택한 다음 너비 또는 높이 값을 바꿉니다. 선택된 모든 위젯의 너비나 높이가 바뀝니다

### 넛지 \{#nudge}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**이 도구는 선택된 모든 위젯에 적용됩니다**

- 위젯을 선택한 다음 넛지 값을 바꿉니다. 화살표 버튼 중 하나를 클릭하면 선택된 모든 위젯이 그 값만큼 이동합니다.

### 정렬 \{#align}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**이 도구는 선택된 모든 위젯에 적용됩니다**

- 위젯을 선택한 다음 정렬 또는 분배 버튼 중 하나를 클릭합니다. 선택된 모든 위젯의 가장자리가 정렬되거나, 위젯이 균등하게 분배되도록 이동합니다.
- 정렬 기능에서는 마지막으로 선택한 위젯이 앵커가 되므로, 나머지 선택된 위젯은 모두 마지막으로 선택한 위젯에 맞춰 정렬됩니다.

### 미러 \{#mirror}

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### 이 도구는 선택된 모든 위젯에 적용됩니다 \{#this-tool-affects-all-selected-widgets}

- 위젯을 선택한 다음 반전 또는 미러 버튼 중 하나를 클릭합니다. 선택된 모든 위젯이 미러링된 위치로 변환됩니다

#### 미러 반전(Mirror Flip)에서는 반전 동작을 설정할 수 있습니다. \{#for-the-mirror-flip-you-can-set-the-flip-behavior}

- **자신:** 선택된 각 위젯이 자기 축을 기준으로 반전됩니다
- **마지막 선택(포함):** 선택된 모든 위젯이 마지막으로 선택한 위젯을 중심으로 반전됩니다. 마지막으로 선택한 위젯도 자기 축을 기준으로 반전됩니다
- **마지막 선택(제외):** 선택된 모든 위젯이 마지막으로 선택한 위젯을 중심으로 반전됩니다. 마지막으로 선택한 위젯은 영향을 받지 않으며 움직이지 않습니다.
- **보이는 캔버스:** 선택된 모든 위젯이 보이는 캔버스의 축을 기준으로 반전됩니다

#### 포즈 미러가 작동하려면 미러용 Pose Map을 만들어야 합니다. \{#for-mirror-pose-to-work-pose-mirror-maps-need-to-be-created}

- **미러용 Pose Map:** 미러링의 앵커 위젯을 정의하고, 가운데 위젯과 왼쪽/오른쪽 위젯 쌍을 설정할 수 있습니다.
- **한 페이지에 여러 맵:** 맵을 하나 이상 둘 수 있으므로, 몸용 맵과 얼굴용 맵을 따로 만들 수 있습니다.
