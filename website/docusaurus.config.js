const vsLightTheme = require("prism-react-renderer/themes/vsLight");
const vsDarkTheme = require("prism-react-renderer/themes/vsDark");

// edit default full white background
vsLightTheme.plain.backgroundColor = "rgba(0, 0, 0, 0.05)";
// fix red attribute names
vsLightTheme.styles.find(it => it.types.includes("attr-name")).style.color =
  "rgb(0, 0, 0)";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "TypeGraphQL Prisma",
  tagline:
    "Prisma generator to emit TypeGraphQL type classes and CRUD resolvers from your Prisma schema",
  url: "https://prisma.typegraphql.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MichalLytek",
  projectName: "typegraphql-prisma",
  themeConfig: {
    prism: {
      theme: vsLightTheme,
      darkTheme: vsDarkTheme,
    },
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
