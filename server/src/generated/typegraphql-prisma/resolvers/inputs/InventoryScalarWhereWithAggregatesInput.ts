import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("InventoryScalarWhereWithAggregatesInput", {})
export class InventoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [InventoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: InventoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: InventoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: InventoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  inventory_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  film_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  store_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
