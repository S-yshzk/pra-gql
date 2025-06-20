import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateWithoutStoreInput } from "../inputs/InventoryCreateWithoutStoreInput";
import { InventoryUpdateWithoutStoreInput } from "../inputs/InventoryUpdateWithoutStoreInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpsertWithWhereUniqueWithoutStoreInput", {})
export class InventoryUpsertWithWhereUniqueWithoutStoreInput {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryUpdateWithoutStoreInput, {
    nullable: false
  })
  update!: InventoryUpdateWithoutStoreInput;

  @TypeGraphQL.Field(_type => InventoryCreateWithoutStoreInput, {
    nullable: false
  })
  create!: InventoryCreateWithoutStoreInput;
}
