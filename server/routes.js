/**
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {*} opts
 * @param {*} done
 */
module.exports = function(fastify, opts, done) {
  fastify.get('/', (req, reply) => {
    reply.send({ message: 'With Fastify' });
  });
  done();
};
