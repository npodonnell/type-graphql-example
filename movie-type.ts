import { Field, ObjectType, Int, Float } from "type-graphql"
import {Actor} from "./actor-type"

@ObjectType({ description: "Movie" })
export class Movie {
    @Field(type => String)
    id: string

    @Field(type => String)
    title: string

    @Field(type => String)
    description: string

    @Field(type => Int)
    year: number

    @Field(type => Actor)
    topActor: Actor

    @Field(type => [Actor])
    actors: Actor[]
}