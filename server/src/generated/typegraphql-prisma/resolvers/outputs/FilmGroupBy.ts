import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmAvgAggregate } from "../outputs/FilmAvgAggregate";
import { FilmCountAggregate } from "../outputs/FilmCountAggregate";
import { FilmMaxAggregate } from "../outputs/FilmMaxAggregate";
import { FilmMinAggregate } from "../outputs/FilmMinAggregate";
import { FilmSumAggregate } from "../outputs/FilmSumAggregate";
import { film_rating } from "../../enums/film_rating";

@TypeGraphQL.ObjectType("FilmGroupBy", {})
export class FilmGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  film_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  release_year!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  language_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  original_language_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rental_duration!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  rental_rate!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  length!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  replacement_cost!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => film_rating, {
    nullable: true
  })
  rating!: "G" | "PG" | "PG_13" | "R" | "NC_17" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_features!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  @TypeGraphQL.Field(_type => FilmCountAggregate, {
    nullable: true
  })
  _count!: FilmCountAggregate | null;

  @TypeGraphQL.Field(_type => FilmAvgAggregate, {
    nullable: true
  })
  _avg!: FilmAvgAggregate | null;

  @TypeGraphQL.Field(_type => FilmSumAggregate, {
    nullable: true
  })
  _sum!: FilmSumAggregate | null;

  @TypeGraphQL.Field(_type => FilmMinAggregate, {
    nullable: true
  })
  _min!: FilmMinAggregate | null;

  @TypeGraphQL.Field(_type => FilmMaxAggregate, {
    nullable: true
  })
  _max!: FilmMaxAggregate | null;
}
