import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { Film_categoryUpdateManyWithoutFilmNestedInput } from "../inputs/Film_categoryUpdateManyWithoutFilmNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InventoryUpdateManyWithoutFilmNestedInput } from "../inputs/InventoryUpdateManyWithoutFilmNestedInput";
import { LanguageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput";
import { LanguageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput } from "../inputs/LanguageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput";
import { NullableEnumfilm_ratingFieldUpdateOperationsInput } from "../inputs/NullableEnumfilm_ratingFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FilmUpdateWithoutFilm_actorInput", {})
export class FilmUpdateWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  release_year?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rental_duration?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  rental_rate?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  length?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  replacement_cost?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumfilm_ratingFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: NullableEnumfilm_ratingFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  special_features?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput, {
    nullable: true
  })
  language_film_language_idTolanguage?: LanguageUpdateOneRequiredWithoutFilm_film_language_idTolanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput, {
    nullable: true
  })
  language_film_original_language_idTolanguage?: LanguageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryUpdateManyWithoutFilmNestedInput, {
    nullable: true
  })
  film_category?: Film_categoryUpdateManyWithoutFilmNestedInput | undefined;

  @TypeGraphQL.Field(_type => InventoryUpdateManyWithoutFilmNestedInput, {
    nullable: true
  })
  inventory?: InventoryUpdateManyWithoutFilmNestedInput | undefined;
}
