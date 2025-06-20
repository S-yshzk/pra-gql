import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryWhereInput } from "../inputs/InventoryWhereInput";

@TypeGraphQL.InputType("InventoryListRelationFilter", {})
export class InventoryListRelationFilter {
  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  every?: InventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  some?: InventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  none?: InventoryWhereInput | undefined;
}
