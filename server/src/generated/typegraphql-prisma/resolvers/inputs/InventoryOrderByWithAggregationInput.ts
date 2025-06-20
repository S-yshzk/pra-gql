import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryAvgOrderByAggregateInput } from "../inputs/InventoryAvgOrderByAggregateInput";
import { InventoryCountOrderByAggregateInput } from "../inputs/InventoryCountOrderByAggregateInput";
import { InventoryMaxOrderByAggregateInput } from "../inputs/InventoryMaxOrderByAggregateInput";
import { InventoryMinOrderByAggregateInput } from "../inputs/InventoryMinOrderByAggregateInput";
import { InventorySumOrderByAggregateInput } from "../inputs/InventorySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InventoryOrderByWithAggregationInput", {})
export class InventoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  inventory_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InventoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InventoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InventoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InventoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InventoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InventoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InventoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InventoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InventorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InventorySumOrderByAggregateInput | undefined;
}
