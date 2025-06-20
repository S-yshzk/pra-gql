import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreAvgOrderByAggregateInput } from "../inputs/StoreAvgOrderByAggregateInput";
import { StoreCountOrderByAggregateInput } from "../inputs/StoreCountOrderByAggregateInput";
import { StoreMaxOrderByAggregateInput } from "../inputs/StoreMaxOrderByAggregateInput";
import { StoreMinOrderByAggregateInput } from "../inputs/StoreMinOrderByAggregateInput";
import { StoreSumOrderByAggregateInput } from "../inputs/StoreSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StoreOrderByWithAggregationInput", {})
export class StoreOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  manager_staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StoreCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StoreCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoreAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StoreAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoreMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StoreMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoreMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StoreMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoreSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StoreSumOrderByAggregateInput | undefined;
}
