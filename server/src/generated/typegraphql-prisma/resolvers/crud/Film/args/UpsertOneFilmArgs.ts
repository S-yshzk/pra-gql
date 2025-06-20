import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmCreateInput } from "../../../inputs/FilmCreateInput";
import { FilmUpdateInput } from "../../../inputs/FilmUpdateInput";
import { FilmWhereUniqueInput } from "../../../inputs/FilmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFilmArgs {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmCreateInput, {
    nullable: false
  })
  create!: FilmCreateInput;

  @TypeGraphQL.Field(_type => FilmUpdateInput, {
    nullable: false
  })
  update!: FilmUpdateInput;
}
