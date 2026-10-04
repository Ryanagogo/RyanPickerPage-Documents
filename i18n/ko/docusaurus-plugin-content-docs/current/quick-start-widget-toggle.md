import useBaseUrl from '@docusaurus/useBaseUrl';

# 토글 위젯 \{#toggle-widget}

### 새 토글 위젯 만들기 \{#creating-a-new-toggle-widget}

새 **토글 위젯**을 만들려면 **편집 모드**여야 합니다

**피커 캔버스의 빈 곳을 마우스 오른쪽 버튼으로 클릭**해 팝업 메뉴를 연 다음 "토글" 메뉴 항목을 클릭합니다

### 토글 상태 \{#toggle-states}

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

처음에는 두 상태에 상태 A와 상태 B라는 라벨이 붙어 있으며, 각각 값 0과 1을 나타냅니다.

토글 위젯을 클릭하면 이 두 상태가 전환됩니다

각 상태에는 자체 라벨, 색상, 표시할 위젯 목록, Python 스크립트를 지정할 수 있습니다.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

위젯 표시 전환

상태에 따라 숨기거나 보여 주고 싶은 위젯이 있다면 먼저 편집 모드로 들어갑니다.

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

그런 다음 상태 A로 전환할 때 보여 줄 위젯을 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

이어서 토글 위젯을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 열고 "상태 A -> 선택한 Widget(으)로 설정"을 선택합니다. 선택한 위젯이 상태 A의 대상 목록으로 설정됩니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

다음으로 상태 B일 때 보여 줄 위젯을 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

이어서 토글 위젯을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 열고 "상태 B -> 선택한 Widget(으)로 설정" 메뉴 항목을 클릭합니다. 선택한 위젯이 상태 B의 대상 목록으로 설정됩니다.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

토글이 어떻게 동작하는지 보려면 라이브 모드로 돌아갑니다.

- 상태 A에서는 상태 A 위젯이 표시되고 상태 B 위젯은 숨겨집니다.
- 상태 B에서는 상태 A 위젯이 숨겨지고 상태 B 위젯이 표시됩니다.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Control Rig 상태 전환

Control Rig에 Bool 애니메이션 채널이 있다면 토글 위젯으로 그 채널을 조작할 수 있습니다. 이는 IK/FK 셋업에서 흔히 쓰입니다.

샷에 Mannequin Control Rig가 있다면 확인할 수 있습니다. 캐릭터 발밑에 있는 육각형 모양의 Main 컨트롤을 선택하세요.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

그런 다음 Sequencer나 Anim Details 패널에서 IK/FK 전환용 Bool을 확인합니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

토글 위젯에 연결하려면 편집 모드인지 확인합니다

Main 컨트롤을 선택한 다음 토글 위젯을 마우스 오른쪽 버튼으로 클릭해 팝업 메뉴를 열고 "Set Parent Control"을 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

이어서 토글 위젯을 선택한 상태로 속성 편집기를 열고, 애니메이션 채널 섹션에서 "불리언 사용"이 체크되어 있는지 확인합니다.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

그런 다음 "채널"을 클릭하고 사용할 애니메이션 채널을 선택합니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

필요하다면 어느 상태를 "참 상태"로 할지도 지정할 수 있습니다

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

라이브 모드로 돌아가면 토글 위젯을 클릭해 리그 상태와 위젯 표시 상태를 함께 바꿀 수 있습니다(이 예에서는 왼쪽 다리의 IK/FK 리그 상태).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />
