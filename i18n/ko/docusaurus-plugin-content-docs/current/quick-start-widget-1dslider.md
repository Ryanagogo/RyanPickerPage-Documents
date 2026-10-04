import useBaseUrl from '@docusaurus/useBaseUrl';

# 1D 슬라이더 위젯 \{#1d-slider-widget}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### 새 1D 슬라이더 위젯 만들기 \{#creating-a-new-1d-slider-widget}

새 **1D 슬라이더 위젯**을 만들려면 **편집 모드**여야 합니다

**피커 캔버스의 빈 곳을 마우스 오른쪽 버튼으로 클릭**해 팝업 메뉴를 연 다음 "1D 슬라이더" 메뉴 항목을 클릭합니다

### 용도 \{#purpose}

- 1D 슬라이더로 최솟값과 최댓값 사이에서 값을 슬라이드할 수 있습니다. 자유도가 1개뿐이므로 슬라이더는 트랜스폼 축 하나에만 영향을 줍니다

- 트랜스폼에 적용되는 값은 로컬 값입니다.

- 이 값은 Control Rig 컨트롤이든 레벨 액터든 상관없이 위젯에 추가된 모든 대상에 적용됩니다.

### 모양 \{#appearance}

1D 슬라이더 위젯의 색상을 설정할 수 있습니다

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### 대상 \{#targets}

##### 대상 추가 \{#adding-targets}

선택 버튼의 대상과 마찬가지로, 원하는 수의 Control Rig 컨트롤과 레벨 액터를 선택한 뒤 1D 슬라이더 위젯을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 열고 "선택 항목으로 설정" 메뉴 항목을 선택합니다.

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### 슬라이더 값 설정 \{#setting-the-slider-values}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **초기값**: 슬라이더의 시작 값입니다. 최솟값과 최댓값을 바꾸면 슬라이더 위의 위치도 시각적으로 바뀝니다.
- **최솟값**: 슬라이더가 도달하는 가장 작은 값
- **최댓값**: 슬라이더가 도달하는 가장 큰 값

##### 슬라이더 방향 설정 \{#setting-the-direction-of-the-slider}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **가로**: 슬라이더가 좌우로 움직입니다
- **세로**: 슬라이더가 위아래로 움직입니다

##### 영향을 줄 트랜스폼 축 설정 \{#setting-which-transform-axis-to-affect}

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

축을 선택하려면 "활성 Channel" 풀다운 메뉴를 클릭하고 아홉 가지 트랜스폼 항목 중 하나를 선택합니다.
