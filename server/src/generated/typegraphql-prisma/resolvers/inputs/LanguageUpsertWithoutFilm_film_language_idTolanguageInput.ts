import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutFilm_film_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutFilm_film_language_idTolanguageInput";
import { LanguageUpdateWithoutFilm_film_language_idTolanguageInput } from "../inputs/LanguageUpdateWithoutFilm_film_language_idTolanguageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutFilm_film_language_idTolanguageInput", {})
export class LanguageUpsertWithoutFilm_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutFilm_film_language_idTolanguageInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutFilm_film_language_idTolanguageInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutFilm_film_language_idTolanguageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutFilm_film_language_idTolanguageInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
