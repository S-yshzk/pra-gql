import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateWithoutStore_staff_store_idTostoreInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput", {})
export class StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStore_staff_store_idTostoreInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStore_staff_store_idTostoreInput;
}
