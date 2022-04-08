export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625028831700c77ae957d4ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sax1w21b',
                  apiId: '3220e063-06fb-44e9-9ce2-f4508cce908a'
                },
                {
                  buildHookId: '6250288339505978fa2ddeb3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c996mwk3',
                  apiId: '72993022-2f1a-4700-b0f5-7c4c6df25cb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ycl818/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c996mwk3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
