import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FilmUpdateOneRequiredWithoutFilm_categoryNestedInput } from "../inputs/FilmUpdateOneRequiredWithoutFilm_categoryNestedInput";

@TypeGraphQL.InputType("Film_categoryUpdateWithoutCategoryInput", {})
export class Film_categoryUpdateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateOneRequiredWithoutFilm_categoryNestedInput, {
    nullable: true
  })
  film?: FilmUpdateOneRequiredWithoutFilm_categoryNestedInput | undefined;
}
