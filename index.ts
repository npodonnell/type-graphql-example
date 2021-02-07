import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import * as path from "path"
import { buildSchema } from "type-graphql"
import { ActorResolver} from "./actor-resolver"
import { MovieResolver} from "./movie-resolver"

const PORT = 4000

async function bootstrap(): Promise<string> {
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
        resolvers: [ActorResolver, MovieResolver],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    })

    // Create GraphQL server
    const server = new ApolloServer({
        schema,
        // enable GraphQL Playground
        playground: true,
    })

    // Start the server
    const { url } = await server.listen(PORT)
    return url
}

bootstrap()
    .then((url: string) => console.log(`Server is running, GraphQL Playground available at ${url}`))
    .catch(console.error)
