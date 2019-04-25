export const environment = {
  appName: 'Gestoro',
  production: false,
  projects: [
    { id: 0, name: 'Learn Angular' },
    { id: 1, name: 'Develop My Dream app' },
    { id: 2, name: 'Travel around the world' },
    { id: 3, name: 'Clean my room' }
  ],
  enviromentLabel: 'PRO',
  projectsApi: {
    url: 'https://api-base.herokuapp.com/api/pub/projects',
    delay: 500
  }
};
