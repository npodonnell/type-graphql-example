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

Get all recipes:
```graphql
{
    recipes {
        description
        title
        ratings
        creationDate
        averageRating
    }
}
```

Get only "Recipe 2":
```graphql
{
  recipe(title: "Recipe 2") {
    description
    title
    ratings
    creationDate
    averageRating
  }
}
```

Add a new recipe:
```graphql
mutation {
  addRecipe(recipe: {
    title: "Banana bread"
    description: "Delicious"
  }) {
    description
    title
    ratings
    creationDate
    averageRating
  }
}
```

Now open a new tab and fetch the banana bread recipe:

```graphql
{
    recipe(title: "Banana bread") {
        description
        title
        ratings
        creationDate
        averageRating
    }
}
```

🍌🍞