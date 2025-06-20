import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FilmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput } from "../inputs/FilmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LanguageUpdateWithoutFilm_film_original_language_idTolanguageInput", {})
export class LanguageUpdateWithoutFilm_film_original_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput, {
    nullable: true
  })
  film_film_language_idTolanguage?: FilmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput | undefined;
}
