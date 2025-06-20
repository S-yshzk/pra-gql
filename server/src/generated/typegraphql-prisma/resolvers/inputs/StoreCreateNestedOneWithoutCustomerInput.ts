import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutCustomerInput } from "../inputs/StoreCreateOrConnectWithoutCustomerInput";
import { StoreCreateWithoutCustomerInput } from "../inputs/StoreCreateWithoutCustomerInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateNestedOneWithoutCustomerInput", {})
export class StoreCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: StoreCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;
}
