import { Recipe } from "./recipe-type"
import { InputType, Field } from "type-graphql"

@InputType()
export class RecipeInput implements Partial<Recipe> {
    @Field(() => String)
    title: string

    @Field({ nullable: true })
    description?: string
}
