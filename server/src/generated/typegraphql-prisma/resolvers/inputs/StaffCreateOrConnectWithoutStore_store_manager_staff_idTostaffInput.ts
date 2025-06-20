import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffCreateWithoutStore_store_manager_staff_idTostaffInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput", {})
export class StaffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStore_store_manager_staff_idTostaffInput;
}
