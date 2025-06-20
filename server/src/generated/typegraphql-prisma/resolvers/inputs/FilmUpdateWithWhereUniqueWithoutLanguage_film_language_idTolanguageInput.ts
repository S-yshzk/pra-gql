import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmUpdateWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmUpdateWithoutLanguage_film_language_idTolanguageInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput", {})
export class FilmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmUpdateWithoutLanguage_film_language_idTolanguageInput, {
    nullable: false
  })
  data!: FilmUpdateWithoutLanguage_film_language_idTolanguageInput;
}
