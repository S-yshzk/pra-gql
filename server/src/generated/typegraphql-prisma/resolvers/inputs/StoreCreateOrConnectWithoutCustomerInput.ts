import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutCustomerInput } from "../inputs/StoreCreateWithoutCustomerInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateOrConnectWithoutCustomerInput", {})
export class StoreCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: StoreCreateWithoutCustomerInput;
}
