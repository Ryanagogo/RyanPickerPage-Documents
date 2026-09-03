import useBaseUrl from '@docusaurus/useBaseUrl';

# Toggle Widget

### Creating a new Toggle Widget

You must be in **Edit Mode** to create a new **Toggle Widget**

**Right click in an empty part of the picker Canvas** to bring up the popup menu, then click on the "Toggle" menu item

### Toggle States

<img src={useBaseUrl('/img/quick-start/widget-toggle/toggle-states.png')} alt="toggle-states" style={{marginLeft: 0, zoom: '80%'}} />

Initially, the two states have the labels of State A and State B, and represent the values 0 and 1.

Clicking on the Toggle Widgets switches between these two states

Each state can have it's own label, color, list of widgets to turn on and python script.

<img src={useBaseUrl('/img/quick-start/widget-toggle/attribute-editor-toggle-values.png')} alt="attribute-editor-toggle-values" style={{marginLeft: 0, zoom: '67%'}} />

Toggling Widget Visibility

If you have some widgets you want to hide or show, based on a state, start by going into Edit Mode,

<img src={useBaseUrl('/img/quick-start/widget-toggle/example-widgets-to-toggle.png')} alt="example-widgets-to-toggle" style={{marginLeft: 0, zoom: '67%'}} />

Then, select the widgets you want to be shown when switching to State A

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-a-widgets.png')} alt="image-20260903130301929" style={{marginLeft: 0, zoom: '67%'}} />

Then right click on the toggle widget, to bring up the popup menu, and select "State A -> Set with Selected Widgets".  This will set the the selected widgets to State A's Target List

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-a-widget-targets.png')} alt="set-state-a-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

Next, select the widgets you want to show when in State B

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-state-b-widgets.png')} alt="select-state-b-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Then right click on the toggle widget, to bring up the popup menu, and click on the menu item "State B -> Set with Selected Widgets".  This will set the the selected widgets to State B's Target List.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-state-b-widget-targets.png')} alt="set-state-b-widget-targets" style={{marginLeft: 0, zoom: '67%'}} />

If you want to see how the Toggle is working, then go back to Live Mode.

- If in State A, then State A widgets are shown and State B widget are hidden.
- If in State B, then State A widgets are hidden and State B widgets are shown.

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-a.png')} alt="live-mode-state-a" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-mode-state-b.png')} alt="live-mode-state-b" style={{marginLeft: 0, zoom: '50%'}} />

Toggling Control Rig States

In your control rig, if you have a Bool animation channel, you can use the Toggle widget to drive that channel.  This is common in Ik/Fk setups.

You can see this if you have the Mannequin Control Rig in a shot.  Just select the Main control, the hexagon at the bottom of the character.

<img src={useBaseUrl('/img/quick-start/widget-toggle/select-rig-main-control.png')} alt="select-rig-main-control" style={{marginLeft: 0, zoom: '67%'}} />

Then look in the Sequencer or Anim Details panel to see the Bools for Ik/Fk switching

<img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-sequencer.png')} alt="bools-in-sequencer" style={{marginLeft: 0, zoom: '67%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/bools-in-anim-details.png')} alt="bools-in-anim-details" style={{zoom: '80%'}} />

To connect to the Toggle Widget, make sure you are in Edit Mode

Select the Main Control, then right click on the Toggle widget, to bring up the popup menu, and select "Set Parent Control"

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-toggle-parent-control.png')} alt="image-20260903133159708" style={{marginLeft: 0, zoom: '67%'}} />

Then with the Toggle widget selected, open the attribute editor and look for the Anim Channel section and make sure "Use Bool" is checked on.

<img src={useBaseUrl('/img/quick-start/widget-toggle/set-use-bool.png')} alt="set-use-bool" style={{marginLeft: 0, zoom: '80%'}} />

Then click in the "Channel" and select which Animation Channel you want to use

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-anim-channel.png')} alt="pick-anim-channel" style={{marginLeft: 0, zoom: '80%'}} />

Then if needed, you can also check which state you want as the "True" State

<img src={useBaseUrl('/img/quick-start/widget-toggle/pick-true-state.png')} alt="pick-true-state" style={{marginLeft: 0, zoom: '80%'}} />

When you go back to Live Mode, you can then Click on the Toggle Widget to both change the Rig State and Widget Visibility States (In this example, the left Ik/Fk leg rig states).

<img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-a-fk.png')} alt="live-state-a-fk" style={{marginLeft: 0, zoom: '50%'}} /><img src={useBaseUrl('/img/quick-start/widget-toggle/live-state-b-ik.png')} alt="live-state-b-ik" style={{zoom: '50%'}} />

