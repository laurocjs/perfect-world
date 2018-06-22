
var express = require('express'),
	fs = require("fs"),
    app = express();


app.use(express.static('client'));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});