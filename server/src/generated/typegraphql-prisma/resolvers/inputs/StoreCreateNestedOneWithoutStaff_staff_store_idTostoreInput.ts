import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput";
import { StoreCreateWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreCreateWithoutStaff_staff_store_idTostoreInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateNestedOneWithoutStaff_staff_store_idTostoreInput", {})
export class StoreCreateNestedOneWithoutStaff_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_staff_store_idTostoreInput, {
    nullable: true
  })
  create?: StoreCreateWithoutStaff_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;
}
