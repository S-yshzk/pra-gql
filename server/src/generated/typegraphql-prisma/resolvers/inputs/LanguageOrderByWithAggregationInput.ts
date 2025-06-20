import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageAvgOrderByAggregateInput } from "../inputs/LanguageAvgOrderByAggregateInput";
import { LanguageCountOrderByAggregateInput } from "../inputs/LanguageCountOrderByAggregateInput";
import { LanguageMaxOrderByAggregateInput } from "../inputs/LanguageMaxOrderByAggregateInput";
import { LanguageMinOrderByAggregateInput } from "../inputs/LanguageMinOrderByAggregateInput";
import { LanguageSumOrderByAggregateInput } from "../inputs/LanguageSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LanguageOrderByWithAggregationInput", {})
export class LanguageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LanguageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LanguageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LanguageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LanguageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LanguageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LanguageSumOrderByAggregateInput | undefined;
}
