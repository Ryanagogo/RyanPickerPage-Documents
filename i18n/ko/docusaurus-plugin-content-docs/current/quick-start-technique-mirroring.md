import useBaseUrl from '@docusaurus/useBaseUrl';

# 미러링 \{#mirroring}

### 위젯 미러 도구 \{#mirror-widgets-tool}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**이 도구는 편집 모드에서만 찾을 수 있습니다.**

레이아웃의 위젯을 미러링하도록 설계된 도구로, 좌우 대칭이 필요한 이족 보행 캐릭터 등의 레이아웃을 만들 때 도움이 됩니다.

## 도구는 두 부분으로 나뉩니다 \{#the-tool-is-divided-into-two-parts}

### 선택 항목 반전 \{#flipping-selected}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### 반전 모드 \{#flip-modes}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **자신**
  - 선택된 각 위젯이 자기 축을 기준으로 반전됩니다
- **마지막 선택(포함)**
  - 선택된 모든 위젯이 마지막으로 선택한 위젯을 중심으로 반전되며, 마지막으로 선택한 위젯은 자기 축을 기준으로 반전됩니다
- **마지막 선택(제외)**
  - 기본 모드입니다
  - 선택된 모든 위젯이 마지막으로 선택한 위젯을 중심으로 반전되지만, 마지막으로 선택한 위젯은 영향을 받지 않으며 움직이지 않습니다
- **보이는 캔버스**
  - 선택된 모든 위젯이 현재 보이는 캔버스 영역을 기준으로 반전됩니다

##### 반전 방향 \{#flip-directions}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

반전의 구체적인 결과는 선택한 동작에 따라 달라집니다

- **Flip Horizontal**
  - 선택된 위젯을 X축을 따라 반전합니다.
- **Flip Vertical**
  - 선택된 위젯을 Y축을 따라 반전합니다

### 미리 정의된 포즈 세트 미러링 \{#mirroring-predefined-pose-sets}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### 선택한 위젯 미러링 \{#mirror-selected-widgets}

- 선택된 위젯 중 Pose Map에 정의가 있는 위젯은 모두 해당 Pose Map에 따라 미러링됩니다
- 위젯은 하나의 Pose Map에만 들어갈 수 있습니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### 포즈를 왼쪽에서 오른쪽으로 미러링 \{#mirror-pose-left-to-right}

- 이 작업은 Pose Map 편집기에서 현재 선택된 Pose Map을 대상으로 합니다
- 잘못된 위젯이 미러링되면 실행 취소하고 현재 Pose Map을 바꾸세요

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### 포즈를 오른쪽에서 왼쪽으로 미러링 \{#mirror-pose-right-to-left}

- 이 작업은 Pose Map 편집기에서 현재 선택된 Pose Map을 대상으로 합니다
- 잘못된 위젯이 미러링되면 실행 취소하고 현재 Pose Map을 바꾸세요

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Pose Map 정의하기 \{#define-pose-maps}

"Map" 버튼을 클릭해 Pose Map 편집기를 엽니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### Pose Map 편집기 \{#the-pose-map-editor}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

하나의 Picker Page에 Pose Map을 여러 개 정의할 수 있습니다. 예를 들어 몸 위젯용 맵과 얼굴 위젯용 맵을 따로 둘 수 있습니다

##### 새 Pose Map 만들기 \{#create-a-new-pose-map}

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### 맵 이름 \{#map-name}

새 맵을 처음 만들면 기본 이름이 붙지만, 원하는 이름으로 바꿀 수 있습니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### 앵커 위젯 \{#anchor-widget}

Pose Map의 모든 위젯은 앵커 위젯을 기준으로 미러링되고 변환됩니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### 가운데 위젯 \{#center-widgets}

모든 가운데 위젯은 앵커 위젯을 기준으로 가운데 정렬됩니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### 위젯 쌍 \{#widget-pairs}

쌍의 왼쪽 열과 오른쪽 열에 있는 위젯은 앵커 위젯을 기준으로 서로 미러링됩니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

맵을 설정한 뒤 포즈를 오른쪽에서 왼쪽으로 미러링한 결과입니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### 맵 재설정 \{#resetting-a-map}

맵을 비우려면 Map 재설정 버튼을 클릭하기만 하면 됩니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### 맵 간 전환 \{#switching-between-maps}

맵이 두 개 이상이면 드롭다운 메뉴를 클릭해 편집할 맵을 고를 수 있습니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### 위젯 이름 \{#widget-names}

Pose Map은 위젯 이름을 사용하므로, 위젯을 만들 때 붙는 기본 이름을 그대로 두지 말고 의미 있는 이름을 붙이는 것이 좋습니다.

현재 위젯 이름을 보려면 위젯을 선택하고 Outliner(캔버스 왼쪽 위 모서리의 "+")를 엽니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

처음에는 기본 이름이 보일 수 있습니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Outliner 항목을 더블클릭하면 위젯 이름을 바꿀 수 있습니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Pose Map 항목에 위젯 지정하기 \{#setting-a-widget-on-a-pose-map-item}

**두 가지 방법 중 하나를 사용할 수 있습니다**

풀다운 메뉴를 사용해 목록에서 항목을 선택합니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

맵 항목 오른쪽의 "Set Selected" 버튼을 사용합니다. 클릭하면 선택한 위젯의 이름이 필드에 입력됩니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

위젯 쌍은 왼쪽 열과 오른쪽 열 항목을 모두 설정해야 합니다

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />
