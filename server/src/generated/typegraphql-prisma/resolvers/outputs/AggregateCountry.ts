import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryAvgAggregate } from "../outputs/CountryAvgAggregate";
import { CountryCountAggregate } from "../outputs/CountryCountAggregate";
import { CountryMaxAggregate } from "../outputs/CountryMaxAggregate";
import { CountryMinAggregate } from "../outputs/CountryMinAggregate";
import { CountrySumAggregate } from "../outputs/CountrySumAggregate";

@TypeGraphQL.ObjectType("AggregateCountry", {})
export class AggregateCountry {
  @TypeGraphQL.Field(_type => CountryCountAggregate, {
    nullable: true
  })
  _count!: CountryCountAggregate | null;

  @TypeGraphQL.Field(_type => CountryAvgAggregate, {
    nullable: true
  })
  _avg!: CountryAvgAggregate | null;

  @TypeGraphQL.Field(_type => CountrySumAggregate, {
    nullable: true
  })
  _sum!: CountrySumAggregate | null;

  @TypeGraphQL.Field(_type => CountryMinAggregate, {
    nullable: true
  })
  _min!: CountryMinAggregate | null;

  @TypeGraphQL.Field(_type => CountryMaxAggregate, {
    nullable: true
  })
  _max!: CountryMaxAggregate | null;
}
