require('source-map-support').install();
require('ts-node').register();

exports.onCreatePage = require('./src/libs/node/on-create-page').onCreatePage;

exports.onCreateNode = require('./src/libs/node/on-create-node').onCreateNode;
