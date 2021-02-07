import { Resolver, Query, FieldResolver, Arg, Root, ResolverInterface } from "type-graphql"
import {Movie} from "./movie-type"
import {Actor} from "./actor-type"
import {getMovieById, getActorsOfMovie} from "./db"

@Resolver(of => Movie)
export class MovieResolver implements ResolverInterface<Movie> {
    @Query(returns => Movie, { nullable: true })
    public async movie(@Arg("id") id: string): Promise<Movie | undefined> {
        return (await getMovieById(id))
    }

    @FieldResolver()
    public async topActor(@Root() movie: Movie): Promise<Actor> {
        return (await getActorsOfMovie(movie.id))[0]
    }

    @FieldResolver()
    public async actors(@Root() movie: Movie): Promise<Array<Actor>> {
        return (await getActorsOfMovie(movie.id))
    }
}
