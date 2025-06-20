import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FilmUpdateOneRequiredWithoutFilm_categoryNestedInput } from "../inputs/FilmUpdateOneRequiredWithoutFilm_categoryNestedInput";

@TypeGraphQL.InputType("Film_categoryUpdateInput", {})
export class Film_categoryUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateOneRequiredWithoutFilm_categoryNestedInput, {
    nullable: true
  })
  film?: FilmUpdateOneRequiredWithoutFilm_categoryNestedInput | undefined;
}
