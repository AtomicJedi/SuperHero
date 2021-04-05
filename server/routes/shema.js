
module.exports.shemaReqests = [
    {
        method: 'GET',
        url: '/',
        schema: {
          querystring: {
            name: { type: 'string' },
            excitement: { type: 'integer' }
          },
          response: {
            200: {
              type: 'object',
              properties: {
                hello: { type: 'string' }
              }
            }
          }
        },
        handler: function (request, reply) {
          reply.send({ hello: '...bitch o0' })
        }
		}
]
