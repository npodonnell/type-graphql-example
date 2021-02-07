import { Field, ObjectType, Int, Float } from "type-graphql"
import {Movie} from "./movie-type"

@ObjectType({ description: "Actor" })
export class Actor {
    @Field(type => String)
    id: string

    @Field(type => String)
    name: string

    @Field(type => Date)
    dateOfBirth: Date

    @Field(type => Date, { nullable: true })
    dateOfDeath?: Date

    @Field(type => String)
    bio: string

    @Field(type => Movie)
    topMovie: Movie

    @Field(type => [Movie])
    movies: Movie[]
}