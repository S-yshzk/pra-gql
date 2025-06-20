import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmCreateWithoutLanguage_film_language_idTolanguageInput";
import { FilmUpdateWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmUpdateWithoutLanguage_film_language_idTolanguageInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput", {})
export class FilmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmUpdateWithoutLanguage_film_language_idTolanguageInput, {
    nullable: false
  })
  update!: FilmUpdateWithoutLanguage_film_language_idTolanguageInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutLanguage_film_language_idTolanguageInput, {
    nullable: false
  })
  create!: FilmCreateWithoutLanguage_film_language_idTolanguageInput;
}
