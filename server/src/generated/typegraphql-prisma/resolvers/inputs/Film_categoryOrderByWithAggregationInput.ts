import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryAvgOrderByAggregateInput } from "../inputs/Film_categoryAvgOrderByAggregateInput";
import { Film_categoryCountOrderByAggregateInput } from "../inputs/Film_categoryCountOrderByAggregateInput";
import { Film_categoryMaxOrderByAggregateInput } from "../inputs/Film_categoryMaxOrderByAggregateInput";
import { Film_categoryMinOrderByAggregateInput } from "../inputs/Film_categoryMinOrderByAggregateInput";
import { Film_categorySumOrderByAggregateInput } from "../inputs/Film_categorySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Film_categoryOrderByWithAggregationInput", {})
export class Film_categoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Film_categoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Film_categoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Film_categoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Film_categoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Film_categoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_categorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Film_categorySumOrderByAggregateInput | undefined;
}
