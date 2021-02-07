import { Resolver, Query, FieldResolver, Arg, Root, ResolverInterface } from "type-graphql"
import {Actor} from "./actor-type"
import {Movie} from "./movie-type"
import {getActorById, getMoviesOfActor} from "./db"

@Resolver(of => Actor)
export class ActorResolver implements ResolverInterface<Actor> {
    @Query(returns => Actor, { nullable: true })
    public async actor(@Arg("id") id: string): Promise<Actor | undefined> {
        return (await getActorById(id))
    }

    @FieldResolver()
    public async topMovie(@Root() actor: Actor): Promise<Movie> {
        return (await  getMoviesOfActor(actor.id))[0]
    }

    @FieldResolver()
    public async movies(@Root() actor: Actor): Promise<Array<Movie>> {
        return (await getMoviesOfActor(actor.id))
    }
}
