import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreCreateWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput", {})
export class StoreCreateNestedOneWithoutStaff_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  create?: StoreCreateWithoutStaff_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;
}
