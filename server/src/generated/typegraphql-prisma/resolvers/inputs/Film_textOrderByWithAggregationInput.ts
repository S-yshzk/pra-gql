import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_textAvgOrderByAggregateInput } from "../inputs/Film_textAvgOrderByAggregateInput";
import { Film_textCountOrderByAggregateInput } from "../inputs/Film_textCountOrderByAggregateInput";
import { Film_textMaxOrderByAggregateInput } from "../inputs/Film_textMaxOrderByAggregateInput";
import { Film_textMinOrderByAggregateInput } from "../inputs/Film_textMinOrderByAggregateInput";
import { Film_textSumOrderByAggregateInput } from "../inputs/Film_textSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Film_textOrderByWithAggregationInput", {})
export class Film_textOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Film_textCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Film_textCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_textAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Film_textAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_textMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Film_textMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_textMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Film_textMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_textSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Film_textSumOrderByAggregateInput | undefined;
}
