import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateOneRequiredWithoutStoreNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutStoreNestedInput";
import { CustomerUpdateManyWithoutStoreNestedInput } from "../inputs/CustomerUpdateManyWithoutStoreNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateManyWithoutStoreNestedInput } from "../inputs/InventoryUpdateManyWithoutStoreNestedInput";
import { StaffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput } from "../inputs/StaffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput";

@TypeGraphQL.InputType("StoreUpdateWithoutStaff_staff_store_idTostoreInput", {})
export class StoreUpdateWithoutStaff_staff_store_idTostoreInput {
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

  @TypeGraphQL.Field(_type => AddressUpdateOneRequiredWithoutStoreNestedInput, {
    nullable: true
  })
  address?: AddressUpdateOneRequiredWithoutStoreNestedInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput, {
    nullable: true
  })
  staff_store_manager_staff_idTostaff?: StaffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput | undefined;
}
