import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryAvgOrderByAggregateInput } from "../inputs/CountryAvgOrderByAggregateInput";
import { CountryCountOrderByAggregateInput } from "../inputs/CountryCountOrderByAggregateInput";
import { CountryMaxOrderByAggregateInput } from "../inputs/CountryMaxOrderByAggregateInput";
import { CountryMinOrderByAggregateInput } from "../inputs/CountryMinOrderByAggregateInput";
import { CountrySumOrderByAggregateInput } from "../inputs/CountrySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CountryOrderByWithAggregationInput", {})
export class CountryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CountryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CountryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CountryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CountryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CountryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountrySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CountrySumOrderByAggregateInput | undefined;
}
