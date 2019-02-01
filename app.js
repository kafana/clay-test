var amphora = require('amphora'),
  port = process.env.PORT || 3000;

return amphora()
  .then(function (server) {
    server.listen(port);
  });
