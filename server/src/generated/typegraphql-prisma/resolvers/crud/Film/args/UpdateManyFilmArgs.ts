import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmUpdateManyMutationInput } from "../../../inputs/FilmUpdateManyMutationInput";
import { FilmWhereInput } from "../../../inputs/FilmWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFilmArgs {
  @TypeGraphQL.Field(_type => FilmUpdateManyMutationInput, {
    nullable: false
  })
  data!: FilmUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;
}
