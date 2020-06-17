const awsLambdaFastify = require('aws-lambda-fastify');
const { request } = require('http');
const fetch = require('node-fetch');

// Require the framework and instantiate it
const fastify = require('fastify')({ trustProxy: true });

fastify.get('/api', (req, reply) => {
  reply.send({
    message: 'Welcome, Netlify Functions with «aws-lambda-fastify»',
    routes: ['/links'],
  });
});

fastify.get('/api/location', async (req, reply) => {
  const url = process.env.NETLIFY_DEV
    ? 'http://www.geoplugin.net/json.gp'
    : `http://www.geoplugin.net/json.gp?ip=${req.ip}`;

  const result = await fetch(url);
  const res = await result.json();
  // console.log(result);
  // console.log(fetch)
  reply.send({ ip: req.ip, res });
});

fastify.register(require('./routes/links.router'), { prefix: '/api/links' });

const proxy = awsLambdaFastify(fastify);

module.exports.handler = proxy;
