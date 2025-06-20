import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";

@TypeGraphQL.ObjectType("AggregateCustomer", {})
export class AggregateCustomer {
  @TypeGraphQL.Field(_type => CustomerCountAggregate, {
    nullable: true
  })
  _count!: CustomerCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerAvgAggregate, {
    nullable: true
  })
  _avg!: CustomerAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomerSumAggregate, {
    nullable: true
  })
  _sum!: CustomerSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMinAggregate, {
    nullable: true
  })
  _min!: CustomerMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMaxAggregate, {
    nullable: true
  })
  _max!: CustomerMaxAggregate | null;
}
