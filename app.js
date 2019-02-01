/* var amphora = require('amphora'),
  port = process.env.PORT || 3000;

return amphora()
  .then(function (server) {
    server.listen(port);
  });
*/

var app = require('express')(),
  amphora = require('amphora'),
  amphoraHtml = require('amphora-html'),
  port = process.env.PORT || 3000,
  env;

// add project-specific settings to your app
app.set('strict routing', true);
app.set('trust proxy', 1);

// add custom settings to your templating engine
// env.addGlobal('projectName', process.env.PROJECT_NAME);

return amphora({
  app: app,
  storage: require('amphora-storage-postgres'),
  renderers: {
    default: 'html',
    html: amphoraHtml
  }
}).then(function (server) {
  server.listen(port);
});

