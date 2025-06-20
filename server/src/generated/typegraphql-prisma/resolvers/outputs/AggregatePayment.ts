import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentAvgAggregate } from "../outputs/PaymentAvgAggregate";
import { PaymentCountAggregate } from "../outputs/PaymentCountAggregate";
import { PaymentMaxAggregate } from "../outputs/PaymentMaxAggregate";
import { PaymentMinAggregate } from "../outputs/PaymentMinAggregate";
import { PaymentSumAggregate } from "../outputs/PaymentSumAggregate";

@TypeGraphQL.ObjectType("AggregatePayment", {})
export class AggregatePayment {
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
