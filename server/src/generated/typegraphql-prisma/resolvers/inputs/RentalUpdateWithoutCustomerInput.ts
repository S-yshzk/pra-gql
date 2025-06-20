import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneRequiredWithoutRentalNestedInput } from "../inputs/InventoryUpdateOneRequiredWithoutRentalNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PaymentUpdateManyWithoutRentalNestedInput } from "../inputs/PaymentUpdateManyWithoutRentalNestedInput";
import { StaffUpdateOneRequiredWithoutRentalNestedInput } from "../inputs/StaffUpdateOneRequiredWithoutRentalNestedInput";

@TypeGraphQL.InputType("RentalUpdateWithoutCustomerInput", {})
export class RentalUpdateWithoutCustomerInput {
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

  @TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutRentalNestedInput, {
    nullable: true
  })
  inventory?: InventoryUpdateOneRequiredWithoutRentalNestedInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateOneRequiredWithoutRentalNestedInput, {
    nullable: true
  })
  staff?: StaffUpdateOneRequiredWithoutRentalNestedInput | undefined;
}
