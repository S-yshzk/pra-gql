import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffCreateWithoutStore_store_manager_staff_idTostaffInput";
import { StaffUpdateWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffUpdateWithoutStore_store_manager_staff_idTostaffInput";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffUpsertWithoutStore_store_manager_staff_idTostaffInput", {})
export class StaffUpsertWithoutStore_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutStore_store_manager_staff_idTostaffInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStore_store_manager_staff_idTostaffInput;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;
}
