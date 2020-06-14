const awsLambdaFastify = require('aws-lambda-fastify');

// Require the framework and instantiate it
const fastify = require('fastify')();

fastify.register(require('./routes'), { prefix: '/api' });

const proxy = awsLambdaFastify(fastify);

module.exports.handler = proxy;
