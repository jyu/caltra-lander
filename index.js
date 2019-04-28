const express = require('express');

const app = express();
app.use(express.static(__dirname));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 5000, function() {
  var port = server.address().port;
  console.log('App now running on port', port);
});
