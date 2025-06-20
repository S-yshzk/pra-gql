import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PaymentUpdateManyWithoutCustomerNestedInput } from "../inputs/PaymentUpdateManyWithoutCustomerNestedInput";
import { RentalUpdateManyWithoutCustomerNestedInput } from "../inputs/RentalUpdateManyWithoutCustomerNestedInput";
import { StoreUpdateOneRequiredWithoutCustomerNestedInput } from "../inputs/StoreUpdateOneRequiredWithoutCustomerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CustomerUpdateWithoutAddressInput", {})
export class CustomerUpdateWithoutAddressInput {
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

  @TypeGraphQL.Field(_type => StoreUpdateOneRequiredWithoutCustomerNestedInput, {
    nullable: true
  })
  store?: StoreUpdateOneRequiredWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => PaymentUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  payment?: PaymentUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  rental?: RentalUpdateManyWithoutCustomerNestedInput | undefined;
}
