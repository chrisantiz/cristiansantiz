require('source-map-support').install();
require('ts-node').register();

exports.onCreatePage = require('./src/libs/node/on-create-page').onCreatePage;

exports.onCreateNode = require('./src/libs/node/on-create-node').onCreateNode;

exports.createPages = require('./src/libs/node/create-pages').createPages;
