const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

// Create app
const app = express();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('./'));

app.listen(port, function () {
  console.log('Express server is up and running on port ' + port);
});
