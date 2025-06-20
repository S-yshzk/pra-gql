import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentAvgOrderByAggregateInput } from "../inputs/PaymentAvgOrderByAggregateInput";
import { PaymentCountOrderByAggregateInput } from "../inputs/PaymentCountOrderByAggregateInput";
import { PaymentMaxOrderByAggregateInput } from "../inputs/PaymentMaxOrderByAggregateInput";
import { PaymentMinOrderByAggregateInput } from "../inputs/PaymentMinOrderByAggregateInput";
import { PaymentSumOrderByAggregateInput } from "../inputs/PaymentSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PaymentOrderByWithAggregationInput", {})
export class PaymentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rental_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_update?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PaymentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PaymentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PaymentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PaymentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PaymentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PaymentSumOrderByAggregateInput | undefined;
}
