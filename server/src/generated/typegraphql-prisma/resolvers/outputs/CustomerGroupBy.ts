import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";

@TypeGraphQL.ObjectType("CustomerGroupBy", {})
export class CustomerGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  store_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update!: Date | null;

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
