// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ryan Picker Page',
  tagline: 'Documentation for the Ryan Picker Page Unreal Engine plugin',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ryanagogo.github.io',
  baseUrl: '/RyanPickerPage-Documents/',

  organizationName: 'Ryanagogo',
  projectName: 'RyanPickerPage-Documents',

  onBrokenLinks: 'throw',

  trailingSlash: false,

  // Same cultures as the plugin's Config/Localization/RyanPickerPage.ini (CulturesToGenerate).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'es-419', 'fr', 'it', 'pl', 'pt-BR', 'ru', 'tr', 'ar', 'ja', 'ko', 'zh-Hans'],
    localeConfigs: {
      en: {label: 'English'},
      de: {label: 'Deutsch'},
      es: {label: 'Español (España)'},
      'es-419': {label: 'Español (Latinoamérica)', htmlLang: 'es-419'},
      fr: {label: 'Français'},
      it: {label: 'Italiano'},
      pl: {label: 'Polski'},
      'pt-BR': {label: 'Português (Brasil)'},
      ru: {label: 'Русский'},
      tr: {label: 'Türkçe'},
      ar: {label: 'العربية', direction: 'rtl'},
      ja: {label: '日本語'},
      ko: {label: '한국어'},
      'zh-Hans': {label: '简体中文', htmlLang: 'zh-Hans'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Picker Page',
        logo: {
          alt: 'Picker Page Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Ryanagogo/RyanPickerPage-Documents',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ryanagogo/RyanPickerPage-Documents',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ryan Roberts. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;