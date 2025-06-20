import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentAvgAggregate } from "../outputs/PaymentAvgAggregate";
import { PaymentCountAggregate } from "../outputs/PaymentCountAggregate";
import { PaymentMaxAggregate } from "../outputs/PaymentMaxAggregate";
import { PaymentMinAggregate } from "../outputs/PaymentMinAggregate";
import { PaymentSumAggregate } from "../outputs/PaymentSumAggregate";

@TypeGraphQL.ObjectType("PaymentGroupBy", {})
export class PaymentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  payment_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staff_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rental_id!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  amount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  payment_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update!: Date | null;

  @TypeGraphQL.Field(_type => PaymentCountAggregate, {
    nullable: true
  })
  _count!: PaymentCountAggregate | null;

  @TypeGraphQL.Field(_type => PaymentAvgAggregate, {
    nullable: true
  })
  _avg!: PaymentAvgAggregate | null;

  @TypeGraphQL.Field(_type => PaymentSumAggregate, {
    nullable: true
  })
  _sum!: PaymentSumAggregate | null;

  @TypeGraphQL.Field(_type => PaymentMinAggregate, {
    nullable: true
  })
  _min!: PaymentMinAggregate | null;

  @TypeGraphQL.Field(_type => PaymentMaxAggregate, {
    nullable: true
  })
  _max!: PaymentMaxAggregate | null;
}
