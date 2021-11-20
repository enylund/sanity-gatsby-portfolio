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
                  buildHookId: '619952b854e726bf79a68438',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-um3fde6q',
                  apiId: '9459a216-a303-436a-a226-4945273bf1d8'
                },
                {
                  buildHookId: '619952b889c9309594fa679d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8wt83r6g',
                  apiId: 'cac9b749-41e7-4386-b4fa-2cf6cccbe9d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enylund/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8wt83r6g.netlify.app',
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
