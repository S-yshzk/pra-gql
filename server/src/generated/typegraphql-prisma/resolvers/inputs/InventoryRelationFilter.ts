import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryWhereInput } from "../inputs/InventoryWhereInput";

@TypeGraphQL.InputType("InventoryRelationFilter", {})
export class InventoryRelationFilter {
  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  is?: InventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  isNot?: InventoryWhereInput | undefined;
}
