import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryAvgAggregate } from "../outputs/CountryAvgAggregate";
import { CountryCountAggregate } from "../outputs/CountryCountAggregate";
import { CountryMaxAggregate } from "../outputs/CountryMaxAggregate";
import { CountryMinAggregate } from "../outputs/CountryMinAggregate";
import { CountrySumAggregate } from "../outputs/CountrySumAggregate";

@TypeGraphQL.ObjectType("CountryGroupBy", {})
export class CountryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  country_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

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
