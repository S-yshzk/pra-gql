import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedManyWithoutStoreInput } from "../inputs/CustomerCreateNestedManyWithoutStoreInput";
import { InventoryCreateNestedManyWithoutStoreInput } from "../inputs/InventoryCreateNestedManyWithoutStoreInput";
import { StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput";
import { StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput";

@TypeGraphQL.InputType("StoreCreateWithoutAddressInput", {})
export class StoreCreateWithoutAddressInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutStoreInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedManyWithoutStoreInput | undefined;

  @TypeGraphQL.Field(_type => InventoryCreateNestedManyWithoutStoreInput, {
    nullable: true
  })
  inventory?: InventoryCreateNestedManyWithoutStoreInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput, {
    nullable: true
  })
  staff_staff_store_idTostore?: StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  staff_store_manager_staff_idTostaff!: StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput;
}
