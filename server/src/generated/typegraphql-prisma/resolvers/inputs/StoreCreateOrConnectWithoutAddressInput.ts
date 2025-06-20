import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutAddressInput } from "../inputs/StoreCreateWithoutAddressInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateOrConnectWithoutAddressInput", {})
export class StoreCreateOrConnectWithoutAddressInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutAddressInput, {
    nullable: false
  })
  create!: StoreCreateWithoutAddressInput;
}
