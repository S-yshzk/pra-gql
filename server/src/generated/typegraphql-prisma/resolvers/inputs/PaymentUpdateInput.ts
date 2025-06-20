import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateOneRequiredWithoutPaymentNestedInput } from "../inputs/CustomerUpdateOneRequiredWithoutPaymentNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { RentalUpdateOneWithoutPaymentNestedInput } from "../inputs/RentalUpdateOneWithoutPaymentNestedInput";
import { StaffUpdateOneRequiredWithoutPaymentNestedInput } from "../inputs/StaffUpdateOneRequiredWithoutPaymentNestedInput";

@TypeGraphQL.InputType("PaymentUpdateInput", {})
export class PaymentUpdateInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  payment_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutPaymentNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneRequiredWithoutPaymentNestedInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpdateOneWithoutPaymentNestedInput, {
    nullable: true
  })
  rental?: RentalUpdateOneWithoutPaymentNestedInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateOneRequiredWithoutPaymentNestedInput, {
    nullable: true
  })
  staff?: StaffUpdateOneRequiredWithoutPaymentNestedInput | undefined;
}
