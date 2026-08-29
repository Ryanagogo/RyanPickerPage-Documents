# Widget Basics

### Create Widgets

- You need to be in Edit Mode to create new widgets
- Right click on an empty part of the Canvas area to open the popup menu, which contains the items to create various types of picker widgets
- When you create a new widget, it will be positioned where the mouse pointer was when you right clicked.
- When you create widgets, an undo item will be added to the undo stack, so you can undo and redo the widget creation

### Delete Widgets

- You need to be in Edit Mode to delete widgets
- You can delete all selected widgets by hitting the "Delete" keyboard key
- You can delete a single widget by right clicking on the widget to bring up the widget popup menu.  At the bottom of the widget you will find the menu item to delete that widget.
- When you delete widgets, an undo item will be added to the undo stack, so you can undo and redo the widget deletions.

### Select Widgets

- You can select widgets in both Live and Edit Mode
- You can select widgets by clicking on them or drawing a box around them
- In Live Mode, some widgets are not selectable:
  - Label Widgets
  - Image Widgets
- In Edit Mode, all widgets are selectable
  - In the Outliner, you can lock widgets so they are not selectable.  This is useful when you have multiple widgets stacked on top of each other.
- The Order in which widgets are selected is remembered.  Selection order is used by certain features in Edit Mode

### Transform Widgets

- You need to be in Edit Mode to Transform widgets
- **Translating**
  - With one or more widgets selected, position the mouse over one of the selected widgets so the mouse cursor changes to the move cursor.  You can then click and drag the mouse, causing all the selected widgets to move with the mouse.
- **Rotating**
  - When the mouse is over the widget and the cursor is the move cursor, holding down the Alt key will change the cursor to the rotate cursor.  You can then click and drag, causing all the selected widgets to rotate smoothly around the last selected widget.  
  - If you hold down both the Alt and Shift keys, the rotation will happen in 15 degree steps
- When you transform widgets, an undo item will be added to the undo stack, so you can undo and redo the transformations.

### Resize Widgets

- You need to be in Edit Mode to Transform widgets
- Moving mouse mouse pointer over one of the edges or corners of a widget will cause the mouse cursor to change to the edge or corner resize cursor.  You can then click and drag to resize the widget.
- Resizing only works on one widget
- When you resize widgets, an undo item will be added to the undo stack, so you can undo and redo the resizing.

### Cut, Copy and Paste

- You need to be in Edit Mode to Cut, Copy and Paste widgets
- You can use standard Ctrl + x, Ctrl + c and Ctrl + v hotkeys to Cut, Copy and Paste selected widgets
- For a single widget, if you can right click on a widget to bring up popup menu.  You should find the Cut and Copy menu items
- Using Ctrl + V will paste the widgets at the location of the mouse
- If you right click on an empty part of the Canvas, in the popup menu you will find two paste options
  - **Paste**
    - Will paste widgets at the location of the mouse
  - **Paste in Place**
    - Will paste widgets at the same place they were Copied or Cut

### Widget Popup Menu

- You need to be in Edit Mode to see the widget popup menus
- When you right click on a widget, a popup menu will open
  - The first items will show you the widget name and type, along with cut and copy options
  - The last item will be an item to delete the widget
  - The other menu items will be specific to the type of widget clicked on

### Attribute Editor

- You need to be in Edit Mode to see Attribute Editor
- The Attribute Editor only shows attributes when one widget is selected.  If multiple widgets are selected, then nothing will show. (This behavior will be changed in a future release)
- The first items will tell you the name and type of the widget, along with the ability to lock the widget, so it can't be selected
  - The other items will be specific to the type of widget selected

### Outliner

- You need to be in Edit Mode to see Outliner
- The Outliner shows you all the widgets in the picker page, and will show you the widgets grouped by Display Layer, by Widget Type, or by Group (This is specific to Toggle Widget Groups)
- If a widget is selected on the Canvas, then the widget item in the Outliner will also be selected, and vise-versa.
- If you double click a widget item in the Outliner, you can rename the widget
- In the Display Layer view, there are checkboxes so you can lock or unlock widgets.  Locked widgets can't be selected in Edit Mode.  This is useful when you multiple widgets stacked on top of each other.
- If you select a widget in the Outliner, you can use the "f" hotkey to focus the view on the widget.  This can be useful if you are having trouble finding a specific widget.
