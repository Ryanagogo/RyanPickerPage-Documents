import useBaseUrl from '@docusaurus/useBaseUrl';

# Selection Button

### Creating a new Selection Button

You must be in **Edit Mode** to create a new **Selection Button**

<img src={useBaseUrl('/img/quick-start/widget-selection-button/go-into-edit-mode.png')} alt="go-into-edit-mode" style={{marginLeft: 0, zoom: ''}} />

**Right click in an empty part of the picker Canvas** to bring up the popup menu, then click on the "Selection Button" menu item

<img src={useBaseUrl('/img/quick-start/widget-selection-button/create-selection-button.png')} alt="create-selection-button" style={{marginLeft: 0, zoom: '67%'}} />

### Selection Button Targets

##### Setting Targets in the selection list

There are two basic ways to set and add targets to the selection list

- **Before creating the Selection Button**: select the controls or actors that you want the button to select, then create a new Selection Button
- **After creating the Selection Button**: select the controls or actors, then right click on the button to bring up the popup menu, then one of the Target actions

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-with-selected.png')} alt="set-with-selected" style={{marginLeft: 0, zoom: '67%'}} />

- **"Set with Selected"** will replace any existing targets in the list with the ones currently selected
- **"Add Selected"** will add currently selected targets to the list of Targets

##### Removing Specific Targets from the selection list

- To remove specific targets, select the controls or actors you want to remove, then right click on the selection button to bring up the popup menu, then click on the "Remove Selected" menu item.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/remove-selected.png')} alt="remove-selected" style={{marginLeft: 0, zoom: '80%'}} />

##### Clearing the selection list

- To clear all the targets in the selection list, right click on the selection button to bring up the popup menu, then click on the "Clear" menu item.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/clear.png')} alt="clear" style={{marginLeft: 0, zoom: '80%'}} />

##### Seeing the current Targets in the selection list

There are three basic ways to see what targets are in target lists.

-  **Hover the mouse over the Selection Button** to bring up the ToolTip.  It will show all the Targets.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/tool-tip.png')} alt="tool-tip" style={{marginLeft: 0, zoom: '80%'}} />

-  **Right click on the Selection Button** to bring up the popup menu, then click on the "List Current" menu item.  A list of the targets will be printed in the Output Log

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-current.png')} alt="list-current" style={{marginLeft: 0, zoom: '80%'}} />

-  **Select the Selection Button**, then open the Attribute Editor and look at the Lists in the Control Rig and Targets Categories

<img src={useBaseUrl('/img/quick-start/widget-selection-button/list-in-attribute-editor.png')} alt="list-in-attribute-editor" style={{marginLeft: 0, zoom: '67%'}} />

##### Selecting the Targets in the selection list

There are two basic ways to select the targets

- **In Live Mode**, just clicking on the Button will select all the Targets
- **In Edit Mode**, right click on the Button to bring up the popup menu, then select the "Select Current" menu item.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-current.png')} alt="select-current" style={{marginLeft: 0, zoom: '80%'}} />

##### Selecting other Widgets

There are cases where you want the ability to select other widgets, such as if you set up picker buttons for all the finger joints, and you want to have one button that selects a column or row knuckles.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-other-widgets.png')} alt="select-other-widgets" style={{marginLeft: 0, zoom: '50%'}} />

First, make sure you are in Edit Mode, then select all the Target Widgets

<img src={useBaseUrl('/img/quick-start/widget-selection-button/select-target-widgets.png')} alt="select-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

Second, right click on the Selection Button to bring up the Popup Menu and select "Other Widgets -> "

<img src={useBaseUrl('/img/quick-start/widget-selection-button/set-target-widgets.png')} alt="set-target-widgets" style={{marginLeft: 0, zoom: '67%'}} />

After you are back in Live Mode, when you click on the Select Button, it will select the Target Widgets and all the Targets in those widgets.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/live-select-other-widgets.png')} alt="live-select-other-widgets" style={{marginLeft: 0, zoom: '67%'}} />

### From the Attribute Editor

To see the values in the Attribute Editor, you need to select one widget

##### Python Script

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script.png')} alt="python-script" style={{marginLeft: 0, zoom: '80%'}} />

You can paste any python script in the Script Source field.  If the script is long, the field will expand.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-example.png')} alt="python-script-example" style={{marginLeft: 0, zoom: '80%'}} />

This field is not very good for editing scripts, and you don't want to put scripts that are too long.  If your script is long, and you want to use a proper script editor, you can just import your script and run it.

<img src={useBaseUrl('/img/quick-start/widget-selection-button/python-script-import.png')} alt="python-script-import" style={{marginLeft: 0, zoom: '80%'}} />

##### Selection Button Appearance

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-appearance.png')} alt="selection-button-appearance" style={{marginLeft: 0, zoom: '80%'}} />

- **Use Label**
  - Shows or Hides the Label
- **Color**
  - Set the Color of the Button
- **Font**
  - Set the font color and Font size

##### Selection Button Text

<img src={useBaseUrl('/img/quick-start/widget-selection-button/selection-button-text.png')} alt="selection-button-text" style={{marginLeft: 0, zoom: '80%'}} />

- **Label**

  - Set the Text in the Label

- **Text Styles**

  - For longer text, you can use the following to help format the text

    - Justification

    - Word Wrap

    - Margin

    - Clip



