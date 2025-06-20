import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmCreateInput } from "../../../inputs/FilmCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFilmArgs {
  @TypeGraphQL.Field(_type => FilmCreateInput, {
    nullable: false
  })
  data!: FilmCreateInput;
}
