import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityAvgAggregate } from "../outputs/CityAvgAggregate";
import { CityCountAggregate } from "../outputs/CityCountAggregate";
import { CityMaxAggregate } from "../outputs/CityMaxAggregate";
import { CityMinAggregate } from "../outputs/CityMinAggregate";
import { CitySumAggregate } from "../outputs/CitySumAggregate";

@TypeGraphQL.ObjectType("CityGroupBy", {})
export class CityGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  city_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  country_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  @TypeGraphQL.Field(_type => CityCountAggregate, {
    nullable: true
  })
  _count!: CityCountAggregate | null;

  @TypeGraphQL.Field(_type => CityAvgAggregate, {
    nullable: true
  })
  _avg!: CityAvgAggregate | null;

  @TypeGraphQL.Field(_type => CitySumAggregate, {
    nullable: true
  })
  _sum!: CitySumAggregate | null;

  @TypeGraphQL.Field(_type => CityMinAggregate, {
    nullable: true
  })
  _min!: CityMinAggregate | null;

  @TypeGraphQL.Field(_type => CityMaxAggregate, {
    nullable: true
  })
  _max!: CityMaxAggregate | null;
}
