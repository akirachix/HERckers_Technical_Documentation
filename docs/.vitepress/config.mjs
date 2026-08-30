export default {
  base:'/HERckers_Technical_Documentation/',
  title: 'PROBE',             
  description: 'Connect suitable batteries to their next useful life.',         

  themeConfig: {
    nav: [],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Architecture', link: '/architecture' },
           {
            text: 'Backend',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/backend/overview' },
              { text: 'Setup & Configuration', link: '/backend/setup' },
              { text: 'Authentication', link: '/backend/authentication' },
              { text: 'API Reference', link: '/backend/api-reference' },
              { text: 'Database', link: '/backend/database' },
              { text: 'Testing', link: '/backend/testing' },
              { text: 'Deployment', link: '/backend/deployment' },
              { text: 'Code Standards', link: '/backend/code-standards' }
            ]
          },
          { text: 'Frontend Web', link: '/frontend-web' },
          { text: 'Hardware and IoT', link: '/hardware' },
          { text: 'Frontend Mobile', link: '/mobile' },
          { text: 'Security', link: '/security' },
          { text: 'Integration', link: '/integration' },
          { text: 'Deployment', link: '/deployment' },
          { text: 'QA', link: '/qa' },
          



         
          { text: 'Glossary', link: '/glossary' },
        ]
      }
    ]

    
  }
}