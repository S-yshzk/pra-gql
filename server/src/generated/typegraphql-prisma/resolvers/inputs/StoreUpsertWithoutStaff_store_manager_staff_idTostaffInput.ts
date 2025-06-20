import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpsertWithoutStaff_store_manager_staff_idTostaffInput", {})
export class StoreUpsertWithoutStaff_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  update!: StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  create!: StoreCreateWithoutStaff_store_manager_staff_idTostaffInput;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
