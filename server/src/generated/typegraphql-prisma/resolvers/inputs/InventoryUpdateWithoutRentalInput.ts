import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FilmUpdateOneRequiredWithoutInventoryNestedInput } from "../inputs/FilmUpdateOneRequiredWithoutInventoryNestedInput";
import { StoreUpdateOneRequiredWithoutInventoryNestedInput } from "../inputs/StoreUpdateOneRequiredWithoutInventoryNestedInput";

@TypeGraphQL.InputType("InventoryUpdateWithoutRentalInput", {})
export class InventoryUpdateWithoutRentalInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateOneRequiredWithoutInventoryNestedInput, {
    nullable: true
  })
  film?: FilmUpdateOneRequiredWithoutInventoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateOneRequiredWithoutInventoryNestedInput, {
    nullable: true
  })
  store?: StoreUpdateOneRequiredWithoutInventoryNestedInput | undefined;
}
