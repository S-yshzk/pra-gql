import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedOneWithoutStaffInput } from "../inputs/AddressCreateNestedOneWithoutStaffInput";
import { PaymentCreateNestedManyWithoutStaffInput } from "../inputs/PaymentCreateNestedManyWithoutStaffInput";
import { RentalCreateNestedManyWithoutStaffInput } from "../inputs/RentalCreateNestedManyWithoutStaffInput";
import { StoreCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput";

@TypeGraphQL.InputType("StaffCreateWithoutStore_staff_store_idTostoreInput", {})
export class StaffCreateWithoutStore_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  picture?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateNestedManyWithoutStaffInput, {
    nullable: true
  })
  payment?: PaymentCreateNestedManyWithoutStaffInput | undefined;

  @TypeGraphQL.Field(_type => RentalCreateNestedManyWithoutStaffInput, {
    nullable: true
  })
  rental?: RentalCreateNestedManyWithoutStaffInput | undefined;

  @TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutStaffInput, {
    nullable: false
  })
  address!: AddressCreateNestedOneWithoutStaffInput;

  @TypeGraphQL.Field(_type => StoreCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  store_store_manager_staff_idTostaff?: StoreCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput | undefined;
}
