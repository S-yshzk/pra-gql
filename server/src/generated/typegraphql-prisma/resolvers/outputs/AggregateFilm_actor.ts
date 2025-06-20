import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorAvgAggregate } from "../outputs/Film_actorAvgAggregate";
import { Film_actorCountAggregate } from "../outputs/Film_actorCountAggregate";
import { Film_actorMaxAggregate } from "../outputs/Film_actorMaxAggregate";
import { Film_actorMinAggregate } from "../outputs/Film_actorMinAggregate";
import { Film_actorSumAggregate } from "../outputs/Film_actorSumAggregate";

@TypeGraphQL.ObjectType("AggregateFilm_actor", {})
export class AggregateFilm_actor {
  @TypeGraphQL.Field(_type => Film_actorCountAggregate, {
    nullable: true
  })
  _count!: Film_actorCountAggregate | null;

  @TypeGraphQL.Field(_type => Film_actorAvgAggregate, {
    nullable: true
  })
  _avg!: Film_actorAvgAggregate | null;

  @TypeGraphQL.Field(_type => Film_actorSumAggregate, {
    nullable: true
  })
  _sum!: Film_actorSumAggregate | null;

  @TypeGraphQL.Field(_type => Film_actorMinAggregate, {
    nullable: true
  })
  _min!: Film_actorMinAggregate | null;

  @TypeGraphQL.Field(_type => Film_actorMaxAggregate, {
    nullable: true
  })
  _max!: Film_actorMaxAggregate | null;
}
