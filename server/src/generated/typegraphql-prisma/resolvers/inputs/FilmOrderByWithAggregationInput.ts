import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmAvgOrderByAggregateInput } from "../inputs/FilmAvgOrderByAggregateInput";
import { FilmCountOrderByAggregateInput } from "../inputs/FilmCountOrderByAggregateInput";
import { FilmMaxOrderByAggregateInput } from "../inputs/FilmMaxOrderByAggregateInput";
import { FilmMinOrderByAggregateInput } from "../inputs/FilmMinOrderByAggregateInput";
import { FilmSumOrderByAggregateInput } from "../inputs/FilmSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FilmOrderByWithAggregationInput", {})
export class FilmOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  release_year?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  original_language_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_duration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  length?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  replacement_cost?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rating?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  special_features?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FilmCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FilmCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FilmAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FilmAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FilmMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FilmMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FilmMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FilmMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FilmSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FilmSumOrderByAggregateInput | undefined;
}
