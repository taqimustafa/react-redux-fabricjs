const isProduction = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path = require('path');
const express = require('express');

const portNumber = 5550;
let app;

if (isProduction) {
  const gzipFiles = ['.js'];
  app = express();
  app.get(gzipFiles, (req, res) => {
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.use('/assets', express.static(`${__dirname}/assets`));
  app.get('*.js', (req, res) => {
    res.sendFile(path.join(__dirname, `dist/${req.url}`));
  });
  app.get('*.css', (req, res) => {
    res.sendFile(path.join(__dirname, `dist/${req.url}`));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
  });
}


app.listen(portNumber, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at http://localhost:${portNumber}`);
});
