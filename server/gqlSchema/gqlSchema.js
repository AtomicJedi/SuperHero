const {gql} = require('apollo-server')
const cryptoRandomString = require('crypto-random-string')

const typeDefs = gql`
    type Hero {
        id: ID!
        email: String!
        verifyCode: String!
    }

    input HeroInput {
        id: ID!
        email: String!
    }

    type Query {
        getUser: [Hero]!
    }

    type Mutation {
        mailChange(email: String!): Hero!
    }
`

const createHero = (hero) => {
	const id = cryptoRandomString(15);
	const description = "this cap"
	return {
		id, hero, description
	}
}

const resolvers = {
	Query: {
		getHero: (hero) => 'this cap',
	},
	Mutation: {
		addHero: (_, { hero }, { dataSources }) => {
			console.log(dataSources)
			const newhero = createHero(hero) //this cap
			// users.push(user)
			// console.log(users)
			// return users[0]
		}
	}
}
module.exports.typeDefs = typeDefs
module.exports.resolvers = resolvers