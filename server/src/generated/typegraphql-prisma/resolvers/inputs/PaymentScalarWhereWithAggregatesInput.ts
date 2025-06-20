import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PaymentScalarWhereWithAggregatesInput", {})
export class PaymentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PaymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PaymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PaymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PaymentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  payment_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  customer_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  staff_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  rental_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  amount?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  payment_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeNullableWithAggregatesFilter | undefined;
}
