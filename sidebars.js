// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Widget Types',
      items: [
        'widget-select-button',
        'widget-1d-slider',
        'widget-2d-slider',
        'widget-toggle',
        'widget-label',
        'widget-image',
      ],
    },
    {
      type: 'category',
      label: 'Editing & Selection',
      items: ['editing-tools', 'mirror-pose', 'bookmarks'],
    },
    {
      type: 'category',
      label: 'Integration',
      items: ['control-rig-and-targets', 'attribute-editor-and-outliner'],
    },
    {
      type: 'category',
      label: 'Data & Configuration',
      items: ['save-load-and-files', 'editor-settings'],
    },
    {
      type: 'category',
      label: 'Scripting',
      items: ['blueprint-api', 'python-scripting'],
    },
  ],
};

export default sidebars;
