import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryUpdateWithoutStoreInput } from "../inputs/InventoryUpdateWithoutStoreInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpdateWithWhereUniqueWithoutStoreInput", {})
export class InventoryUpdateWithWhereUniqueWithoutStoreInput {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryUpdateWithoutStoreInput, {
    nullable: false
  })
  data!: InventoryUpdateWithoutStoreInput;
}
