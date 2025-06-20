import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorAvgOrderByAggregateInput } from "../inputs/ActorAvgOrderByAggregateInput";
import { ActorCountOrderByAggregateInput } from "../inputs/ActorCountOrderByAggregateInput";
import { ActorMaxOrderByAggregateInput } from "../inputs/ActorMaxOrderByAggregateInput";
import { ActorMinOrderByAggregateInput } from "../inputs/ActorMinOrderByAggregateInput";
import { ActorSumOrderByAggregateInput } from "../inputs/ActorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActorOrderByWithAggregationInput", {})
export class ActorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ActorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ActorSumOrderByAggregateInput | undefined;
}
