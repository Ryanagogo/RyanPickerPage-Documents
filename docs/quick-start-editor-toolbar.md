import useBaseUrl from '@docusaurus/useBaseUrl';

# Toolbar

**While in Edit Mode**, you will find the Toolbar in the Header part of the editor

<img src={useBaseUrl('/img/quick-start/editor-toolbar/editor-toolbar.png')} alt="editor-toolbar" style={{marginLeft: 0, zoom: ''}} />

These tools allow you to perform various actions on one or more selected Picker Widgets.

### The way it works:

- Select widgets
- Click on a Toolbar button to open the tool
- Change the value in the field or click a button
- The value change or button click affects all the selected widgets

### Image

<img src={useBaseUrl('/img/quick-start/editor-toolbar/image-tool.png')} alt="image-tool" style={{marginLeft: 0, zoom: ''}} />

**This tool affects Label and Image widgets, both of which can have an image.**

- Select label or Image widgets, then click on the dropdown to search for the image you want or add the image that you have selected in the content browser.  All the selected widgets will use that image

### Color

<img src={useBaseUrl('/img/quick-start/editor-toolbar/color-tool.png')} alt="color-tool" style={{marginLeft: 0, zoom: ''}} />

**This tool affects all widgets that have a BG color.  Will also affect widgets that have text.**

- Select widgets, then click on the BG or Font color and select the color you want from the Color Picker.  All the selected widgets will get those colors

### Label

<img src={useBaseUrl('/img/quick-start/editor-toolbar/label-tool.png')} alt="label-tool" style={{marginLeft: 0, zoom: ''}} />

**This tool affects widgets that have text.**

- Select widgets, then change the text in the Label Field or the Font Size Value.  All the selected widgets text will be updated

### Size

<img src={useBaseUrl('/img/quick-start/editor-toolbar/size-tool.png')} alt="size-tool" style={{marginLeft: 0, zoom: ''}} />

**This tool affect all widgets**

- Select widgets, then change the Width or Height values.  All the selected widgets will have their widths or heights changed

### Nudge

<img src={useBaseUrl('/img/quick-start/editor-toolbar/nudge-tool.png')} alt="nudge-tool" style={{marginLeft: 0, zoom: ''}} />

**This tool affects all selected widgets**

- Select Widgets, the change the nudge value.  When you click one of the arrow buttons, all the selected widgets will move the nudge value.

### Align

<img src={useBaseUrl('/img/quick-start/editor-toolbar/align-tool.png')} alt="align-tool" style={{marginLeft: 0, zoom: ''}} />

**This tool affects all selected widgets**

- Select Widgets, then click one of the align or distribute buttons.  All the selected widgets will have their edges aligned or moved to be evenly distributed.
- For the align features, the last selected widget is the anchor, so all the other selected widgets will align to the last selected widget.

### Mirror

<img src={useBaseUrl('/img/quick-start/editor-toolbar/mirror-tool.png')} alt="mirror-tool" style={{marginLeft: 0, zoom: ''}} />

#### This tool affects all selected widgets

- Select Widgets, then click one of the flip or mirror buttons.  All the selected widgets will be transformed to their mirrored positions

#### For the Mirror Flip, you can set the flip behavior.  

- **Self:** Each selected widget flips along its own axis
- **Last Selected (Include):** All selected widgets flip around the last selected widget.  The last selected also flips along its own axis
- **Last Selected (Exclude):** All selected widgets flip around the last selected widget.  The last selected widget is not affected, it does not move.
- **Visible Canvas:** All selected widgets flip on the visible canvas axis

#### For Mirror Pose to work, Pose Mirror Maps need to be created.

- **Pose Mirror Maps:** Allow you to define the anchor widget for the mirroring and allow you to set the center widgets and left/right widget pairs.  
- **Multiple Maps on a Page:** You could have more than one map, so you could have one for the body and one for the face.
