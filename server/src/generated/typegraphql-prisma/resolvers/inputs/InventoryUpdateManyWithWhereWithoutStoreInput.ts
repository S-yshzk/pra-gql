import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryScalarWhereInput } from "../inputs/InventoryScalarWhereInput";
import { InventoryUpdateManyMutationInput } from "../inputs/InventoryUpdateManyMutationInput";

@TypeGraphQL.InputType("InventoryUpdateManyWithWhereWithoutStoreInput", {})
export class InventoryUpdateManyWithWhereWithoutStoreInput {
  @TypeGraphQL.Field(_type => InventoryScalarWhereInput, {
    nullable: false
  })
  where!: InventoryScalarWhereInput;

  @TypeGraphQL.Field(_type => InventoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: InventoryUpdateManyMutationInput;
}
