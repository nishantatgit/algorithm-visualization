// var currentUnixTimestamp = new Date().getTime();
// var fs = require('fs');
// var writeStream = fs.createWriteStream('./buildID', 'utf-8');
// writeStream.write(`${currentUnixTimestamp}`, 'utf-8');
module.exports = {
	target: 'web',
	entry: {
		bundle : './client/bubbleSort.js',
	},
	output: {
		path: `${__dirname}/public`,
	},
};
