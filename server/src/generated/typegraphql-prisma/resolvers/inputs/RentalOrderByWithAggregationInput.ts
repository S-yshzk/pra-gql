import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalAvgOrderByAggregateInput } from "../inputs/RentalAvgOrderByAggregateInput";
import { RentalCountOrderByAggregateInput } from "../inputs/RentalCountOrderByAggregateInput";
import { RentalMaxOrderByAggregateInput } from "../inputs/RentalMaxOrderByAggregateInput";
import { RentalMinOrderByAggregateInput } from "../inputs/RentalMinOrderByAggregateInput";
import { RentalSumOrderByAggregateInput } from "../inputs/RentalSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RentalOrderByWithAggregationInput", {})
export class RentalOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  inventory_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  return_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RentalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RentalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RentalAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RentalAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RentalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RentalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RentalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RentalMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RentalSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RentalSumOrderByAggregateInput | undefined;
}
