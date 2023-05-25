import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kyoto Framework',
  description: 'Just playing around',

  themeConfig: {
    logo: '/static/img/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kyoto-framework' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Kyoto',
        collapsed: false,
        items: [
          {"text": "Overview", "link": "/kyoto/"},
          {"text": "Quick start", "link": "/kyoto/quick-start"},
          {"text": "Routing", "link": "/kyoto/routing"},
          {"text": "Pages and components", "link": "/kyoto/pages-and-components"},
          {"text": "Context", "link": "/kyoto/context"},
          {"text": "Templates", "link": "/kyoto/templates"},
          {"text": "Actions", "link": "/kyoto/actions"},
          {"text": "Definitions index", "link": "/kyoto/definitions-index"},
        ]
      },
      {
        text: 'Zen',
        collapsed: true,
        items: [
          { "text": "Overview", "link": "/zen/"},
          { "text": "agg", "link": "/zen/agg/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/agg/definitions-index" }
          ]},
          { "text": "async", "link": "/zen/async/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/async/definitions-index" },
          ]},
          { "text": "atomicx", "link": "/zen/atomicx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/atomicx/definitions-index" },
          ]},
          { "text": "b64", "link": "/zen/b64/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/b64/definitions-index" },
          ]},
          { "text": "cache", "link": "/zen/cache/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/cache/definitions-index" },
          ]},
          { "text": "cast", "link": "/zen/cast/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/cast/definitions-index" },
          ]},
          { "text": "conv", "link": "/zen/conv/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/conv/definitions-index" },
          ]},
          { "text": "errorsx", "link": "/zen/errorsx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/errorsx/definitions-index" },
          ]},
          { "text": "fmtx", "link": "/zen/fmtx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/fmtx/definitions-index" },
          ]},
          { "text": "httpx", "link": "/zen/httpx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/httpx/definitions-index" },
          ]},
          { "text": "jsonx", "link": "/zen/jsonx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/jsonx/definitions-index" },
          ]},
          { "text": "logic", "link": "/zen/logic/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/logic/definitions-index" },
          ]},
          { "text": "mathx", "link": "/zen/mathx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/mathx/definitions-index" },
          ]},
          { "text": "regexpx", "link": "/zen/regexpx/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/regexpx/definitions-index" },
          ]},
          { "text": "slice", "link": "/zen/slice/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/slice/definitions-index" },
          ]},
          { "text": "templatex", "link": "/zen/templatex/", collapsed: true, items: [
            { "text": "Definitions index", "link": "/zen/templatex/definitions-index" },
          ]},
        ]
      }
    ]
  }
})
