import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateOneRequiredWithoutRentalNestedInput } from "../inputs/CustomerUpdateOneRequiredWithoutRentalNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneRequiredWithoutRentalNestedInput } from "../inputs/InventoryUpdateOneRequiredWithoutRentalNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PaymentUpdateManyWithoutRentalNestedInput } from "../inputs/PaymentUpdateManyWithoutRentalNestedInput";

@TypeGraphQL.InputType("RentalUpdateWithoutStaffInput", {})
export class RentalUpdateWithoutStaffInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  rental_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  return_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PaymentUpdateManyWithoutRentalNestedInput, {
    nullable: true
  })
  payment?: PaymentUpdateManyWithoutRentalNestedInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutRentalNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneRequiredWithoutRentalNestedInput | undefined;

  @TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutRentalNestedInput, {
    nullable: true
  })
  inventory?: InventoryUpdateOneRequiredWithoutRentalNestedInput | undefined;
}
