import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateWithoutStoreInput } from "../inputs/InventoryCreateWithoutStoreInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryCreateOrConnectWithoutStoreInput", {})
export class InventoryCreateOrConnectWithoutStoreInput {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryCreateWithoutStoreInput, {
    nullable: false
  })
  create!: InventoryCreateWithoutStoreInput;
}
