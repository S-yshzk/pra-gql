import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Film_categoryUpdateWithoutFilmInput", {})
export class Film_categoryUpdateWithoutFilmInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput | undefined;
}
