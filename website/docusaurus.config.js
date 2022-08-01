// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const vsLightTheme = require("prism-react-renderer/themes/vsLight");
const vsDarkTheme = require("prism-react-renderer/themes/vsDark");

// edit default full white background
// @ts-ignore
vsLightTheme.plain.backgroundColor = "var(--ifm-code-background)";
// fix red attribute names
// @ts-ignore
vsLightTheme.styles.find(it => it.types.includes("attr-name")).style.color =
  "var(--prism-color);";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TypeGraphQL Prisma",
  tagline:
    "Prisma generator to emit TypeGraphQL type classes and CRUD resolvers from your Prisma schema",
  url: "https://prisma.typegraphql.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MichalLytek", // Usually your GitHub org/user name.
  projectName: "typegraphql-prisma", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "TypeGraphQL Prisma",
        logo: {
          alt: "TypeGraphQL Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "examples",
            position: "left",
            label: "Examples",
          },
          {
            href: "https://github.com/MichalLytek/typegraphql-prisma",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
              {
                label: "Examples",
                to: "/docs/examples",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/typegraphql",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/typegraphql",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/MichalLytek/typegraphql-prisma",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Michał Lytek`,
      },
      prism: {
        theme: vsLightTheme,
        darkTheme: vsDarkTheme,
      },
      algolia: {
        appId: "G4ZB1BCPHE",
        apiKey: "02a8d497c435602dcd39b67e73d7e53a",
        indexName: "typegraphql_prisma",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {
          // facetFilters: ["type:content"],
        },
        // Set debug to true if you want to inspect the modal
        debug: false,
      },
    }),
};

module.exports = config;
