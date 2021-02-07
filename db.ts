import { plainToClass } from "class-transformer"
import {Actor} from "./actor-type"
import {Movie} from "./movie-type"

/**
 * Actors.
 */

const patrickSwayze: Actor = plainToClass(Actor, {
    id: "a523",
    name: "Patrick Swayze",
    dateOfBirth: new Date("1952-08-18"),
    dateOfDeath: new Date("2009-09-14"),
    bio: "Patrick Wayne Swayze was born on August 18, 1952, in Houston, Texas, the second " +
        "child of Patsy Swayze (née Karnes; 1927–2013), a choreographer, dance instructor, " +
        "and dancer, and Jesse Wayne Swayze (1925–1982), an engineering draftsman. " +
        "He had an older sister, Vickie (1949–1994), two younger brothers, actor Don " +
        "(born 1958) and Sean (born 1962), and one younger sister, Bambi."
})

const jakeGyllenhaal: Actor = plainToClass(Actor, {
    id: "a327",
    name: "Jake Gyllenhaal",
    dateOfBirth: new Date("1980-12-19"),
    bio: "Jacob Benjamin Gyllenhaal was born on December 19, 1980, in Los Angeles, " +
        "California, to film producer and screenwriter Naomi Foner (née Achs) and " +
        "film director Stephen Gyllenhaal. Actress Maggie Gyllenhaal, his older " +
        "sister, appeared with him in the film Donnie Darko. Gyllenhaal's father, who " +
        "was raised as a Swedenborgian, is of Swedish and English descent and is a " +
        "descendant of the Swedish noble Gyllenhaal family."
})

/**
 * Movies.
 */

const donnieDarko: Movie = plainToClass(Movie, {
    id: "m839",
    title: "Donnie Darko",
    description: "On October 2, 1988, in the small town of Middlesex, Virginia, " +
        "troubled teenager Donald J. \"Donnie\" Darko, led by a mysterious voice, " +
        "sleepwalks out of his home. Once outside, he meets a figure in a monstrous " +
        "rabbit costume who introduces himself as Frank and tells Donnie that the " +
        "world will end in 28 days, 6 hours, 42 minutes and 12 seconds.",
    year: 2001,
    actors: []
})

type ActorsByIdMapEntry = Record<string, Actor>
type MoviesByIdMapEntry = Record<string, Movie>

const actorsById: ActorsByIdMapEntry = {
    [patrickSwayze.id]: patrickSwayze,
    [jakeGyllenhaal.id]: jakeGyllenhaal
}

const moviesById: MoviesByIdMapEntry = {
    [donnieDarko.id]: donnieDarko
}

function getActorById(id: string): Actor {
    console.log("getActorById called")
    return actorsById[id]
}

function getMovieById(id: string) {
    console.log("getMovieById called")
    return moviesById[id]
}

function getMoviesOfActor(actorId: string): Array<Movie> {
    console.log("getMoviesOfActor called")
    if (actorId === patrickSwayze.id) {
        return [donnieDarko]
    } else if (actorId === jakeGyllenhaal.id) {
        return [donnieDarko]
    } else {
        return []
    }
}

function getActorsOfMovie(movieId: string): Array<Actor> {
    console.log("getActorsOfMovie called")
    if (movieId === donnieDarko.id) {
        return [
            patrickSwayze,
            jakeGyllenhaal
        ]
    } else {
        return []
    }
}

export {
    getActorById,
    getMovieById,
    getMoviesOfActor,
    getActorsOfMovie
}
