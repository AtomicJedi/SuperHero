
const entPoint = (async function (req, reply) {
	const query = '{ add(x: 2, y: 2) }'
	return reply.graphql(query)
})

module.exports = entPoint