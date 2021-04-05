const fastify = require('fastify')()
const routes = require('./shema');
const swagger = require('fastify-swagger')

const letsRoute = (fastify) => {
	fastify.register(swagger, require('./swagDoc'));
	const arr = routes.shemaReqests;
	arr.forEach(elem => {
		fastify.route(elem)
	});
}

module.exports = letsRoute;