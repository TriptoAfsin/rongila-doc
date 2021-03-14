module.exports = {
  title: 'Rongila CSS',
  tagline: 'Yet another class based css library',
  url: 'https://github.com/TriptoAfsin/rongila-css',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rongila2.png',
  organizationName: 'TriptoAfsin', // Usually your GitHub org/user name.
  projectName: 'Rongilla CSS', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Rongila CSS',
      logo: {
        alt: 'Rongila Logo',
        src: 'img/rongila2.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'about', label: 'About', position: 'left' 
        },
      //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/TriptoAfsin/rongila-css',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Find Rongila on',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/TriptoAfsin/rongila-css',
            },
          ],
        },
        {
          title: 'Sites Built With Rongila CSS',
          items: [
            {
              label: 'NoteBOT Web',
              href: 'https://notebot.netlify.app/#/',
            },
            {
              label: 'Triptex Portfolio',
              href: 'https://triptex.me/',
            },
            {
              label: 'Awesome Lib',
              href: 'https://triptoafsin.github.io/awesome-lib/#/',
            }
          ],
        }
        
      ],
      copyright: `<b>Copyright © ${new Date().getFullYear()} TriptoAfsin</b>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
