/* Use express app */
var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();
var api = new ParseServer({
  databaseURI: 'mongodb://127.0.0.1:27017',
  cloud: './cloud/main.js',
  appId: 'bait',
  fileKey: '',
  masterKey: 'city',
  serverURL: 'http://localhost:1337/parse'
});

app.use('/parse', api);

var port = 1337;
app.listen(port, function() {
	console.log('bc parse-server runnin on port ' + port);
})
