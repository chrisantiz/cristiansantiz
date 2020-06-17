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

  try {
    const result = await fetch(url);

    if (!result.ok) {
      throw result;
    }

    const res = await result.json();

    reply.send({
      requestIp: res.geoplugin_request,
      country: {
        name: res.geoplugin_countryName,
        code: res.geoplugin_countryCode,
        city: res.geoplugin_city,
        region: res.geoplugin_region,
        timezone: res.geoplugin_timezone,
        currencyCode: res.geoplugin_currencyCode,
        currencyConverter: res.geoplugin_currencyConverter,
      },
      continent: {
        name: res.geoplugin_continentName,
        code: res.geoplugin_continentCode,
      },
      latitude: res.geoplugin_latitude,
      longitude: res.geoplugin_longitude,
    });
  } catch (error) {
    reply.send(error);
  }
});

fastify.register(require('./routes/links.router'), { prefix: '/api/links' });

const proxy = awsLambdaFastify(fastify);

module.exports.handler = proxy;
