import useBaseUrl from '@docusaurus/useBaseUrl';

# 1D Slider Widget

<img src={useBaseUrl('/img/quick-start/widget-1dslider/1D-Slider.png')} alt="1D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Creating a new 1D Slider Widget

You must be in **Edit Mode** to create a new **1D Slider Widget**

**Right click in an empty part of the picker Canvas** to bring up the popup menu, then click on the "1D Slider" menu item

### Purpose

- The 1D Slider allows you to slide a value that is between a min and max value.  This only has 1 degree of freedom, so the slider will affect only one transform axis

- The value applied to the transform is a local value.

- This value will be applied to all the targets that have been added to the widget, no matter if they are control rig controls or level actors.

### Appearance

You can set the color of the 1D Slider Widget

<img src={useBaseUrl('/img/quick-start/widget-1dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Targets

##### Adding Targets

Similar to Selection Control Targets, you can select any number of control rig controls and level actors, then right click on the 1D Slider widget to bring up the popup menu and select the ''Set with Selected" menu item.

<img src={useBaseUrl('/img/quick-start/widget-1dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Setting the Slider Values

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Initial Value**: This is the starting value of the slider.  It will visually change position on the slider as the min and max values are changed.
- **Min Value**: The smallest value the slider will reach
- **Max Value**: The largest value the slider will reach

##### Setting the direction of the slider

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-slider-direction.png')} alt="setting-slider-direction" style={{marginLeft: 0, zoom: '80%'}} />

- **Horizontal**: Makes the slider move side to side
- **Vertical**: Makes the slider move up and down

##### Setting which transform axis to affect

<img src={useBaseUrl('/img/quick-start/widget-1dslider/setting-transform-axis.png')} alt="setting-transform-axis" style={{marginLeft: 0, zoom: '80%'}} />

To pick the axis, just click in the Active Channel pulldown menu and select one of the nine transform items.
