import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressAvgAggregate } from "../outputs/AddressAvgAggregate";
import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
import { AddressSumAggregate } from "../outputs/AddressSumAggregate";

@TypeGraphQL.ObjectType("AddressGroupBy", {})
export class AddressGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  district!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  city_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postal_code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  @TypeGraphQL.Field(_type => AddressCountAggregate, {
    nullable: true
  })
  _count!: AddressCountAggregate | null;

  @TypeGraphQL.Field(_type => AddressAvgAggregate, {
    nullable: true
  })
  _avg!: AddressAvgAggregate | null;

  @TypeGraphQL.Field(_type => AddressSumAggregate, {
    nullable: true
  })
  _sum!: AddressSumAggregate | null;

  @TypeGraphQL.Field(_type => AddressMinAggregate, {
    nullable: true
  })
  _min!: AddressMinAggregate | null;

  @TypeGraphQL.Field(_type => AddressMaxAggregate, {
    nullable: true
  })
  _max!: AddressMaxAggregate | null;
}
