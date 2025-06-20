import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmWhereInput } from "../../inputs/FilmWhereInput";

@TypeGraphQL.ArgsType()
export class LanguageCountFilm_film_language_idTolanguageArgs {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;
}
