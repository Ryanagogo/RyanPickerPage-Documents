import useBaseUrl from '@docusaurus/useBaseUrl';

# 2D 슬라이더 위젯 \{#2d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### 새 2D 슬라이더 위젯 만들기 \{#creating-a-new-2d-slider-widget}

새 **2D 슬라이더 위젯**을 만들려면 **편집 모드**여야 합니다

**피커 캔버스의 빈 곳을 마우스 오른쪽 버튼으로 클릭**해 팝업 메뉴를 연 다음 "2D 슬라이더" 메뉴 항목을 클릭합니다

### 용도 \{#purpose}

- 2D 슬라이더로 최솟값과 최댓값 사이에서 값을 슬라이드할 수 있습니다. X와 Y의 자유도 2개가 있으므로 슬라이더는 서로 다른 두 트랜스폼 축에 영향을 줄 수 있습니다

- 트랜스폼에 적용되는 값은 로컬 값입니다.

- 이 값들은 Control Rig 컨트롤이든 레벨 액터든 상관없이 위젯에 추가된 모든 대상에 적용됩니다.

### 모양 \{#appearance}

2D 슬라이더 위젯의 색상을 설정할 수 있습니다

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### 대상 \{#targets}

##### 대상 추가 \{#adding-targets}

선택 버튼의 대상과 마찬가지로, 원하는 수의 Control Rig 컨트롤과 레벨 액터를 선택한 뒤 2D 슬라이더 위젯을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 열고 "선택 항목으로 설정" 메뉴 항목을 선택합니다.

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### X 및 Y 방향의 슬라이더 값 설정 \{#setting-the-slider-values-for-the-x-and-y-directions}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **초기값**: X 및 Y 방향에 대한 슬라이더의 시작 값입니다. 최솟값과 최댓값을 바꾸면 슬라이더 위의 위치도 시각적으로 바뀝니다.
- **최솟값**: X 및 Y 방향에서 슬라이더가 도달하는 가장 작은 값
- **최댓값**: X 및 Y 방향에서 슬라이더가 도달하는 가장 큰 값

##### 두 활성 채널이 사용할 트랜스폼 축 설정 \{#setting-which-transform-axis-that-both-active-channels-will-use}

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- 축을 선택하려면 "활성 Channel" 풀다운 메뉴 중 하나를 클릭하고 아홉 가지 트랜스폼 항목 중 하나를 선택합니다.
- "활성 Channel X"와 "활성 Channel Y"는 서로 다른 트랜스폼 축을 사용해야 합니다. 둘 다 같은 축을 사용할 수는 없습니다
