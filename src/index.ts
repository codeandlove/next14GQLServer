import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.generated.js";
import { resolvers } from "./graphql/resolvers.generated.js";

import { ApolloArmor } from '@escape.tech/graphql-armor';

const armor = new ApolloArmor({
  maxDepth: {
    n: 6,
  },
});

const index = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  ...armor.protect()
});

const { url } = await startStandaloneServer(index, {
  listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
