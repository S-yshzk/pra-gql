import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorAvgOrderByAggregateInput } from "../inputs/Film_actorAvgOrderByAggregateInput";
import { Film_actorCountOrderByAggregateInput } from "../inputs/Film_actorCountOrderByAggregateInput";
import { Film_actorMaxOrderByAggregateInput } from "../inputs/Film_actorMaxOrderByAggregateInput";
import { Film_actorMinOrderByAggregateInput } from "../inputs/Film_actorMinOrderByAggregateInput";
import { Film_actorSumOrderByAggregateInput } from "../inputs/Film_actorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Film_actorOrderByWithAggregationInput", {})
export class Film_actorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Film_actorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Film_actorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Film_actorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Film_actorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Film_actorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Film_actorSumOrderByAggregateInput | undefined;
}
