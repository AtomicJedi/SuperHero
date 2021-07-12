import FormDialog from "../client/src/modalCreateHero/modalCreateHero";
import {log} from "async";

const fastify = require('fastify')({logger: true});
const {PORT} = require('server/config/config.JS');
const mainRouter = require('./routes/servRoutes')
const mercurius = require('mercurius')
const {typeDefs, resolvers} = require('./gqlSchema/gqlSchema')
const entPoint = require('./entPoint')

(async () => {

  mainRouter(fastify)
  console.log(PORT)
  fastify.listen(PORT, '0.0.0.0', function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })

  fastify.register(mercurius, {
    typeDefs,
    resolvers
  })
  fastify.get('/', entPoint)

})()
