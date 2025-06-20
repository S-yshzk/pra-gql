import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateWithoutStore_staff_store_idTostoreInput";
import { StaffUpdateWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffUpdateWithoutStore_staff_store_idTostoreInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput", {})
export class StaffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutStore_staff_store_idTostoreInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutStore_staff_store_idTostoreInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutStore_staff_store_idTostoreInput, {
    nullable: false
  })
  create!: StaffCreateWithoutStore_staff_store_idTostoreInput;
}
