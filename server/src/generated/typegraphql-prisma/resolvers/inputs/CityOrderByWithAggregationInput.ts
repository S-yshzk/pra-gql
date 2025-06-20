import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityAvgOrderByAggregateInput } from "../inputs/CityAvgOrderByAggregateInput";
import { CityCountOrderByAggregateInput } from "../inputs/CityCountOrderByAggregateInput";
import { CityMaxOrderByAggregateInput } from "../inputs/CityMaxOrderByAggregateInput";
import { CityMinOrderByAggregateInput } from "../inputs/CityMinOrderByAggregateInput";
import { CitySumOrderByAggregateInput } from "../inputs/CitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CityOrderByWithAggregationInput", {})
export class CityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CitySumOrderByAggregateInput | undefined;
}
