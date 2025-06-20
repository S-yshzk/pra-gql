import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RentalUpdateManyWithoutInventoryNestedInput } from "../inputs/RentalUpdateManyWithoutInventoryNestedInput";
import { StoreUpdateOneRequiredWithoutInventoryNestedInput } from "../inputs/StoreUpdateOneRequiredWithoutInventoryNestedInput";

@TypeGraphQL.InputType("InventoryUpdateWithoutFilmInput", {})
export class InventoryUpdateWithoutFilmInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateOneRequiredWithoutInventoryNestedInput, {
    nullable: true
  })
  store?: StoreUpdateOneRequiredWithoutInventoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpdateManyWithoutInventoryNestedInput, {
    nullable: true
  })
  rental?: RentalUpdateManyWithoutInventoryNestedInput | undefined;
}
