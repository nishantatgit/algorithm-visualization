var express = require('express');



let app = express();
app.use(express.static('./public'));

app.use('/', (req, res) => {
	res.send('/public/index.html');
});

app.listen('7007', (req, res) => {
	console.log('server listening on port ', 7007);
});
