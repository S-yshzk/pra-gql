import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StaffAvgOrderByAggregateInput } from "../inputs/StaffAvgOrderByAggregateInput";
import { StaffCountOrderByAggregateInput } from "../inputs/StaffCountOrderByAggregateInput";
import { StaffMaxOrderByAggregateInput } from "../inputs/StaffMaxOrderByAggregateInput";
import { StaffMinOrderByAggregateInput } from "../inputs/StaffMinOrderByAggregateInput";
import { StaffSumOrderByAggregateInput } from "../inputs/StaffSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StaffOrderByWithAggregationInput", {})
export class StaffOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

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
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  picture?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StaffCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StaffCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StaffAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StaffMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StaffMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StaffSumOrderByAggregateInput | undefined;
}
