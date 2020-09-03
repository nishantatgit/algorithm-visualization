var  express = require('express');
var html = require('./public/html');
var fs = require('fs');
var readStream = fs.createReadStream('./buildID','utf-8');
var buildID;
readStream.on('data', function(chunk){
  buildID = chunk;
});
let app = express();
app.use(express.static('./public'));

app.use('/',(req,res) => {
  let Html = html(null,`animations-${buildID}`);
  res.send(Html);
});

app.listen('7007', (req,res) => {
  console.log('server listening on port ', 7007);
});

