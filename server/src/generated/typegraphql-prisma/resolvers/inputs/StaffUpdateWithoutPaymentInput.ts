import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateOneRequiredWithoutStaffNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutStaffNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RentalUpdateManyWithoutStaffNestedInput } from "../inputs/RentalUpdateManyWithoutStaffNestedInput";
import { StoreUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput } from "../inputs/StoreUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput";
import { StoreUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput } from "../inputs/StoreUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("StaffUpdateWithoutPaymentInput", {})
export class StaffUpdateWithoutPaymentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  picture?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpdateManyWithoutStaffNestedInput, {
    nullable: true
  })
  rental?: RentalUpdateManyWithoutStaffNestedInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateOneRequiredWithoutStaffNestedInput, {
    nullable: true
  })
  address?: AddressUpdateOneRequiredWithoutStaffNestedInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput, {
    nullable: true
  })
  store_staff_store_idTostore?: StoreUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput, {
    nullable: true
  })
  store_store_manager_staff_idTostaff?: StoreUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput | undefined;
}
