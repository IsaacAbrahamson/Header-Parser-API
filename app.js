var express = require('express');
var app = express();
var http = require('http');
var parser = require('ua-parser-js');

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
	var agent = parser(req.headers['user-agent']);
	var browser = agent.browser.name;
    var os = agent.os.name + ' ' + agent.os.version;

	res.json({
		device: agent.device.type || "computer",	
		os: os,		
		browser: browser
	});
});

app.listen(PORT);
console.log('listening on port 3000...');    