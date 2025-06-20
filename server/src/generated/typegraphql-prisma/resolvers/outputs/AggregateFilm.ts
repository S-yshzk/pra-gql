import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmAvgAggregate } from "../outputs/FilmAvgAggregate";
import { FilmCountAggregate } from "../outputs/FilmCountAggregate";
import { FilmMaxAggregate } from "../outputs/FilmMaxAggregate";
import { FilmMinAggregate } from "../outputs/FilmMinAggregate";
import { FilmSumAggregate } from "../outputs/FilmSumAggregate";

@TypeGraphQL.ObjectType("AggregateFilm", {})
export class AggregateFilm {
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
