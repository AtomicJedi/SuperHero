const fastify = require('fastify')({logger: true});
const fastifyEnv = require('fastify-env');
const mainRouter = require('./routes/servRoutes')

const PORT = 4000;

async function start() {

  mainRouter(fastify)

  fastify.listen(PORT, '0.0.0.0', function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })
}
start()
    