import useBaseUrl from '@docusaurus/useBaseUrl';

# Mirroring

### Mirror Widgets Tool

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-widgets-tool.png')} alt="mirror-widgets-tool" style={{marginLeft: 0, zoom: '80%'}} />

**You need to be in Edit Mode to find this tool.**  

It is designed to help you mirror widgets in your layout, so it can help you create layouts for bipeds or other characters where you need left and right symmetry.

## The Tool is divided into Two Parts

### Flipping Selected

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-flip-part-of-tool.png')} alt="mirror-flip-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

##### Flip Modes

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-modes.png')} alt="flip-modes" style={{marginLeft: 0, zoom: '80%'}} />

- **Self**
  - Selected widgets will each flip along their own axis
- **Last Selected (Incl)**
  - All selected widgets will flip around the last selected widget, with the last selected widget flipping along it's own axis
- **Last Selected (Excl)**
  - This is the Default mode
  - All selected widgets will flip around the last selected widget, but the last selected widget is not affected and does not move
- **Canvas**
  - All selected widgets flip along the current visible canvas area

##### Flip Directions

<img src={useBaseUrl('/img/quick-start/technique-mirroring/flip-buttons.png')} alt="flip-buttons" style={{marginLeft: '0px'}} />

The specific results of the flip will depend on what behavior is selected

- **Flip Horizontal**
  - Flips selected widgets along the X axis.
- **Flip Vertical**
  - Flips selected widgets along the Y axis

### Mirroring Predefined Pose sets

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-pose-part-of-tool.png')} alt="mirror-pose-part-of-tool" style={{marginLeft: 0, zoom: '80%'}} />

#### Mirror Selected Widgets

- All selected widgets, which have a definition in a pose map, will be mirrored according to its pose map
- A widget can only be in one pose map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-selected-button.png')} alt="mirror-selected-button" style={{marginLeft: '0px', zoom: '80%'}} />

#### Mirror Pose Left to Right

- This operation works on whatever the current pose map is selected in the Pose Map Editor
- If the wrong widgets are mirrored, then undo and change the current pose map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-left-to-right.png')} alt="mirror-left-to-right" style={{marginLeft: '0px', zoom: '80%'}} />

#### Mirror Pose Right to Left

- This operation works on whatever the current pose map is selected in the Pose Map Editor
- If the wrong widgets are mirrored, then undo and change the current pose map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/mirror-right-to-left.png')} alt="mirror-right-to-left" style={{marginLeft: '0px', zoom: '80%'}} />

#### Define Pose Maps

Click on the Map button to open the Pose Map Editor

<img src={useBaseUrl('/img/quick-start/technique-mirroring/open-mirror-pose-map-editor.png')} alt="open-mirror-pose-map-editor" style={{marginLeft: 0, zoom: '80%'}} />

##### The Pose Map Editor

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-editor.png')} alt="pose-map-editor" style={{marginLeft: 0, zoom: '67%'}} />

On a single Picker Page, you can define more than one pose map.  For instance, you could have one map for the Body Widgets and one map for the Face Widgets

##### Create a New Pose Map

<img src={useBaseUrl('/img/quick-start/technique-mirroring/create-new-pose-map.png')} alt="create-new-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Map Name

When you first create a new map, it will have a default name, but you can rename it to anything you like

<img src={useBaseUrl('/img/quick-start/technique-mirroring/change-pose-map-name.png')} alt="change-pose-map-name" style={{marginLeft: 0, zoom: '80%'}} />

##### Anchor Widget

All the widgets in the pose map will mirror and transform relative to the anchor widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-anchor.png')} alt="pose-map-anchor" style={{marginLeft: 0, zoom: '50%'}} />

##### Center Widgets

All center widgets will be center aligned relative to the anchor widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-center.png')} alt="pose-map-center" style={{marginLeft: 0, zoom: '50%'}} />

##### Widget Pairs

Widgets in the left and right pair columns will mirror each other, relative to the anchor widget

<img src={useBaseUrl('/img/quick-start/technique-mirroring/pose-map-left-right.png')} alt="pose-map-left-right" style={{marginLeft: 0, zoom: '50%'}} />

After setting the map, this is the result of mirroring the pose right to left

<img src={useBaseUrl('/img/quick-start/technique-mirroring/result-of-mirror-pose.png')} alt="result-of-mirror-pose" style={{marginLeft: 0, zoom: '50%'}} />

##### Resetting a Map

If you want to clear the map, just click the Reset Map button

<img src={useBaseUrl('/img/quick-start/technique-mirroring/reset-map.png')} alt="reset-map" style={{marginLeft: 0, zoom: '80%'}} />

##### Switching Between Maps

Once you have more than one map, you can click on the drop down menu and pick which map you want to edit

<img src={useBaseUrl('/img/quick-start/technique-mirroring/switch-pose-map.png')} alt="switch-pose-map" style={{marginLeft: 0, zoom: '80%'}} />

### Widget Names

Pose Maps use widget names, so you'll want to name your widgets to be something that makes sense, not just use the default widgets when a widget is created.

To see the current widget name, select a widget and open the Outliner (The "+" in the upper left corner of the canvas)

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-open-outliner.png')} alt="widget-name-open-outliner" style={{marginLeft: 0, zoom: '67%'}} />

At first, you'll might see a default name

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-default-name.png')} alt="widget-name-default-name" style={{marginLeft: 0, zoom: '67%'}} />

Double clicking on the outliner item will allow you change the widget name

<img src={useBaseUrl('/img/quick-start/technique-mirroring/widget-name-double-click-item.png')} alt="widget-name-double-click-item" style={{marginLeft: 0, zoom: '67%'}} />

#### Setting a widget on a pose map item

**you can use one of two different ways**

Use the pulldown menu and select the item from the list

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-pulldown.png')} alt="setting-pose-map-item-with-pulldown" style={{marginLeft: '0px', zoom: '80%'}} />

Use the Set Selected button on the right side of the map item.  When you click it, the name of the selected widget will be put in the field

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-pose-map-item-with-use-selected-widget.png')} alt="setting-pose-map-item-with-use-selected-widget" style={{marginLeft: 0, zoom: '67%'}} />

For widget pairs, you will need to set a left and right column items

<img src={useBaseUrl('/img/quick-start/technique-mirroring/setting-both-widget-pairs.png')} alt="setting-both-widget-pairs" style={{marginLeft: 0, zoom: '80%'}} />

