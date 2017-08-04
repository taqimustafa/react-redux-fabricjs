var isProduction = process.env.NODE_ENV === 'production';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var app, portNumber = 4000;

if(isProduction){
	var path = require('path');
	var express = require('express');
	var gzipFiles = [".js"];
	app = express();
	app.get(gzipFiles, function(req, res) {
		res.set('Content-Encoding', 'gzip');
		next();
	});
	app.use('/assets', express.static(__dirname + '/assets'));
	app.get('*.js', function(req, res) {
		res.sendFile(path.join(__dirname, 'dist/'+req.url));
	});
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}
else{
	app = new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true,
		historyApiFallback: true
	});
}


app.listen(portNumber, function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('Listening at http://localhost:'+portNumber);
})
