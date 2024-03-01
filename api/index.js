import { typeDefs } from "./../src/graphql/typeDefs.generated.js";
import { resolvers } from "./../src/graphql/resolvers.generated.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { ApolloArmor } from '@escape.tech/graphql-armor';

const armor = new ApolloArmor({
	maxDepth: {
		n: 6,
	},
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
	...armor.protect()
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);