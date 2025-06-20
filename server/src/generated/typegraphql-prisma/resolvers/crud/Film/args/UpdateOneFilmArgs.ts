import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmUpdateInput } from "../../../inputs/FilmUpdateInput";
import { FilmWhereUniqueInput } from "../../../inputs/FilmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFilmArgs {
  @TypeGraphQL.Field(_type => FilmUpdateInput, {
    nullable: false
  })
  data!: FilmUpdateInput;

  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;
}
