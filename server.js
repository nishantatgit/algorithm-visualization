var  express = require('express');
var html = require('./public/html');

let app = express();
app.use(express.static('./public'));

app.use('/',(req,res) => {
  let Html = html();
  res.send(Html);
});

app.listen('7007', (req,res) => {
  console.log('server listening on port ', 7007);
});

