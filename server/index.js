const awsLambdaFastify = require('aws-lambda-fastify');

// Require the framework and instantiate it
const fastify = require('fastify')();

fastify.get('/api', (req, reply) => {
  reply.send({
    message: 'Welcome, Netlify Functions with «aws-lambda-fastify»',
    routes: ['/links'],
  });
});

fastify.register(require('./routes/links.router'), { prefix: '/api/links' });

const proxy = awsLambdaFastify(fastify);

module.exports.handler = proxy;
