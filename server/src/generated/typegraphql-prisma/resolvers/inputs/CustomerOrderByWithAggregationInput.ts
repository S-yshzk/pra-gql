import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAvgOrderByAggregateInput } from "../inputs/CustomerAvgOrderByAggregateInput";
import { CustomerCountOrderByAggregateInput } from "../inputs/CustomerCountOrderByAggregateInput";
import { CustomerMaxOrderByAggregateInput } from "../inputs/CustomerMaxOrderByAggregateInput";
import { CustomerMinOrderByAggregateInput } from "../inputs/CustomerMinOrderByAggregateInput";
import { CustomerSumOrderByAggregateInput } from "../inputs/CustomerSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerOrderByWithAggregationInput", {})
export class CustomerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_update?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustomerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CustomerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustomerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustomerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CustomerSumOrderByAggregateInput | undefined;
}
