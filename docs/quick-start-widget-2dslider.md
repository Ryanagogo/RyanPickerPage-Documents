import useBaseUrl from '@docusaurus/useBaseUrl';

# 2D Slider Widget

<img src={useBaseUrl('/img/quick-start/widget-2dslider/2D-Slider.png')} alt="2D-Slider" style={{marginLeft: 0, zoom: '67%'}} />

### Creating a new 2D Slider Widget

You must be in **Edit Mode** to create a new **2D Slider Widget**

**Right click in an empty part of the picker Canvas** to bring up the popup menu, then click on the "2D Slider" menu item

### Purpose

- The 2D Slider allows you to slide a value that is between a min and max value.  It has 2 degrees of freedom, on the X and Y, so the slider can affect two different transform axis'

- The values applied to the transform are a local values.

- The values will be applied to all the targets that have been added to the widget, no matter if they are control rig controls or level actors.

### Appearance

You can set the color of the 2D Slider Widget

<img src={useBaseUrl('/img/quick-start/widget-2dslider/appearance.png')} alt="appearance" style={{marginLeft: 0, zoom: '80%'}} />

### Targets

##### Adding Targets

Similar to Selection Control Targets, you can select any number of control rig controls and level actors, then right click on the 1D Slider widget to bring up the popup menu and select the ''Set with Selected" menu item.

<img src={useBaseUrl('/img/quick-start/widget-2dslider/adding-targets.png')} alt="adding-targets" style={{marginLeft: 0, zoom: '67%'}} />

##### Setting the Slider Values for the X and Y directions

<img src={useBaseUrl('/img/quick-start/widget-2dslider/setting-slider-values.png')} alt="setting-slider-values" style={{marginLeft: 0, zoom: '80%'}} />

- **Initial Value**: These are the starting values of the slider for the X and Y directions.  It will visually change position on the slider as the min and max values are changed.
- **Min Value**: The smallest values the slider will reach for the X and Y directions
- **Max Value**: The largest values the slider will reach for the X and Y directions

##### Setting which transform axis' that both Active Channels will use

<img src={useBaseUrl('/img/quick-start/widget-2dslider/picking-channel-axis.png')} alt="picking-channel-axis" style={{marginLeft: 0, zoom: '80%'}} />

- To pick an axis, just click in one of the Active Channel pulldown menus and select one of the nine transform items.
- Active Channel X and Active Channel Y must use different transform axis'.  They can't both use the same axis