import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("PaymentScalarWhereInput", {})
export class PaymentScalarWhereInput {
  @TypeGraphQL.Field(_type => [PaymentScalarWhereInput], {
    nullable: true
  })
  AND?: PaymentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereInput], {
    nullable: true
  })
  OR?: PaymentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereInput], {
    nullable: true
  })
  NOT?: PaymentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  payment_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staff_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  rental_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  amount?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  payment_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  last_update?: DateTimeNullableFilter | undefined;
}
