import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput", {})
export class StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  create!: StoreCreateWithoutStaff_store_manager_staff_idTostaffInput;
}
