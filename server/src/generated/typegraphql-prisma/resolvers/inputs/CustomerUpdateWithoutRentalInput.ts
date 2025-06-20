import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateOneRequiredWithoutCustomerNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutCustomerNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PaymentUpdateManyWithoutCustomerNestedInput } from "../inputs/PaymentUpdateManyWithoutCustomerNestedInput";
import { StoreUpdateOneRequiredWithoutCustomerNestedInput } from "../inputs/StoreUpdateOneRequiredWithoutCustomerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CustomerUpdateWithoutRentalInput", {})
export class CustomerUpdateWithoutRentalInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  create_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateOneRequiredWithoutCustomerNestedInput, {
    nullable: true
  })
  address?: AddressUpdateOneRequiredWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateOneRequiredWithoutCustomerNestedInput, {
    nullable: true
  })
  store?: StoreUpdateOneRequiredWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => PaymentUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  payment?: PaymentUpdateManyWithoutCustomerNestedInput | undefined;
}
