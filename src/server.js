import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
import * as dotenv from 'dotenv'

dotenv.config()

new ApolloServer({ schema, context: createContext }).listen( { port: process.env.GRAPHQL_SERVER_PORT || 4000 },
  () =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-sdl-first#using-the-graphql-api`,
  ),
)
