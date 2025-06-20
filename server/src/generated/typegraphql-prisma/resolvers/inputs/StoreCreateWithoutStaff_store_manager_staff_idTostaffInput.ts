import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedOneWithoutStoreInput } from "../inputs/AddressCreateNestedOneWithoutStoreInput";
import { CustomerCreateNestedManyWithoutStoreInput } from "../inputs/CustomerCreateNestedManyWithoutStoreInput";
import { InventoryCreateNestedManyWithoutStoreInput } from "../inputs/InventoryCreateNestedManyWithoutStoreInput";
import { StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput";

@TypeGraphQL.InputType("StoreCreateWithoutStaff_store_manager_staff_idTostaffInput", {})
export class StoreCreateWithoutStaff_store_manager_staff_idTostaffInput {
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

  @TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutStoreInput, {
    nullable: false
  })
  address!: AddressCreateNestedOneWithoutStoreInput;
}
