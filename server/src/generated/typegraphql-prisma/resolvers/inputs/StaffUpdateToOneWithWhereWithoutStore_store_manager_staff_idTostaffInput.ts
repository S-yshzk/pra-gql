import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffUpdateWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffUpdateWithoutStore_store_manager_staff_idTostaffInput";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffUpdateToOneWithWhereWithoutStore_store_manager_staff_idTostaffInput", {})
export class StaffUpdateToOneWithWhereWithoutStore_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  data!: StaffUpdateWithoutStore_store_manager_staff_idTostaffInput;
}
