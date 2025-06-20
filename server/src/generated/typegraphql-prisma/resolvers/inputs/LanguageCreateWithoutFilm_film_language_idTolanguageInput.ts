import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput } from "../inputs/FilmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput";

@TypeGraphQL.InputType("LanguageCreateWithoutFilm_film_language_idTolanguageInput", {})
export class LanguageCreateWithoutFilm_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => FilmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput, {
    nullable: true
  })
  film_film_original_language_idTolanguage?: FilmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput | undefined;
}
