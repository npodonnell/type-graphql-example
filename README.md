# TypeGraphQL Example

[Simple Usage](https://github.com/MichalLytek/type-graphql/tree/master/examples/simple-usage) example from 
[TypeGraphQL](https://typegraphql.com/) examples folder.

N. P. O'Donnell, 2021


## Motivation

I had some issues getting this example to run directly within the TypeGraphQL repository. After some trial-and-error
modifying code, and googling, I managed to get it working.

## Usage

Install:
```bash
npm i
```

Run the example:
```bash
npm start
```

Then navigate to the GraphQL playground at http://localhost:4000/

### Example Queries

The example features an IMDB-like database of actors and movies.

### Actors

Get Patrick Swayze, together with title and year of his movies:
```graphql
{
    actor(id: "a523") {
        id
        name
        dateOfBirth
        dateOfDeath
        bio
        movies {
            title
            year
        }
    }
}
```

Get Jake Gyllenhaal, together with title and year of his movies:
```graphql
{
    actor(id: "a327") {
        id
        name
        dateOfBirth
        dateOfDeath
        bio
        movies {
            title
            year
        }
    }
}
```

### Movies

Get Donnie Darko, together with actors' names:
```graphql
{
    movie(id: "m839") {
        id
        title
        description
        year
        actors {
            name
        }
    }
}
```