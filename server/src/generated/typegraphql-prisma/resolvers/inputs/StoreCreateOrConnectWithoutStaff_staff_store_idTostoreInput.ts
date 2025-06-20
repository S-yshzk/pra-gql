import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreCreateWithoutStaff_staff_store_idTostoreInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput", {})
export class StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_staff_store_idTostoreInput, {
    nullable: false
  })
  create!: StoreCreateWithoutStaff_staff_store_idTostoreInput;
}
