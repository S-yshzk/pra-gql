import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmWhereUniqueInput } from "../../../inputs/FilmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFilmArgs {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;
}
