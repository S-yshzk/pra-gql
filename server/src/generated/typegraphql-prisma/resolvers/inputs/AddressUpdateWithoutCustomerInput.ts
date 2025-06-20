import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityUpdateOneRequiredWithoutAddressNestedInput } from "../inputs/CityUpdateOneRequiredWithoutAddressNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StaffUpdateManyWithoutAddressNestedInput } from "../inputs/StaffUpdateManyWithoutAddressNestedInput";
import { StoreUpdateManyWithoutAddressNestedInput } from "../inputs/StoreUpdateManyWithoutAddressNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AddressUpdateWithoutCustomerInput", {})
export class AddressUpdateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address2?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  district?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  postal_code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateOneRequiredWithoutAddressNestedInput, {
    nullable: true
  })
  city?: CityUpdateOneRequiredWithoutAddressNestedInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateManyWithoutAddressNestedInput, {
    nullable: true
  })
  staff?: StaffUpdateManyWithoutAddressNestedInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateManyWithoutAddressNestedInput, {
    nullable: true
  })
  store?: StoreUpdateManyWithoutAddressNestedInput | undefined;
}
