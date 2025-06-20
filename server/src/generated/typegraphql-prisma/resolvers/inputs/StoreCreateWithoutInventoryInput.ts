import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedOneWithoutStoreInput } from "../inputs/AddressCreateNestedOneWithoutStoreInput";
import { CustomerCreateNestedManyWithoutStoreInput } from "../inputs/CustomerCreateNestedManyWithoutStoreInput";
import { StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput";
import { StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput";

@TypeGraphQL.InputType("StoreCreateWithoutInventoryInput", {})
export class StoreCreateWithoutInventoryInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutStoreInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedManyWithoutStoreInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput, {
    nullable: true
  })
  staff_staff_store_idTostore?: StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutStoreInput, {
    nullable: false
  })
  address!: AddressCreateNestedOneWithoutStoreInput;

  @TypeGraphQL.Field(_type => StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  staff_store_manager_staff_idTostaff!: StaffCreateNestedOneWithoutStore_store_manager_staff_idTostaffInput;
}
