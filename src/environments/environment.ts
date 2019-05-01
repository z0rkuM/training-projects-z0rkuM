export const environment = {
  appName: 'Gestoro',
  production: false,
  projects: [
    { id: 0, name: 'Learn Angular', effort: 2 },
    { id: 1, name: 'Develop My Dream app', effort: 2 },
    { id: 2, name: 'Travel around the world', effort: 3 },
    { id: 3, name: 'Clean my room', effort: 5 }
  ],
  enviromentLabel: 'DEV',
  projectsImpl: 'RESTAPI', //RESTAPI or MEM
  projectsApi: {
    url: 'https://api-base.herokuapp.com/api/pub/projects',
    delay: 500
  }
};
