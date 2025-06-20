import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateOneRequiredWithoutStoreNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutStoreNestedInput";
import { CustomerUpdateManyWithoutStoreNestedInput } from "../inputs/CustomerUpdateManyWithoutStoreNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateManyWithoutStoreNestedInput } from "../inputs/InventoryUpdateManyWithoutStoreNestedInput";
import { StaffUpdateManyWithoutStore_staff_store_idTostoreNestedInput } from "../inputs/StaffUpdateManyWithoutStore_staff_store_idTostoreNestedInput";

@TypeGraphQL.InputType("StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput", {})
export class StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutStoreNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateManyWithoutStoreNestedInput | undefined;

  @TypeGraphQL.Field(_type => InventoryUpdateManyWithoutStoreNestedInput, {
    nullable: true
  })
  inventory?: InventoryUpdateManyWithoutStoreNestedInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateManyWithoutStore_staff_store_idTostoreNestedInput, {
    nullable: true
  })
  staff_staff_store_idTostore?: StaffUpdateManyWithoutStore_staff_store_idTostoreNestedInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateOneRequiredWithoutStoreNestedInput, {
    nullable: true
  })
  address?: AddressUpdateOneRequiredWithoutStoreNestedInput | undefined;
}
