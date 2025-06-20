import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorAvgAggregate } from "../outputs/ActorAvgAggregate";
import { ActorCountAggregate } from "../outputs/ActorCountAggregate";
import { ActorMaxAggregate } from "../outputs/ActorMaxAggregate";
import { ActorMinAggregate } from "../outputs/ActorMinAggregate";
import { ActorSumAggregate } from "../outputs/ActorSumAggregate";

@TypeGraphQL.ObjectType("AggregateActor", {})
export class AggregateActor {
  @TypeGraphQL.Field(_type => ActorCountAggregate, {
    nullable: true
  })
  _count!: ActorCountAggregate | null;

  @TypeGraphQL.Field(_type => ActorAvgAggregate, {
    nullable: true
  })
  _avg!: ActorAvgAggregate | null;

  @TypeGraphQL.Field(_type => ActorSumAggregate, {
    nullable: true
  })
  _sum!: ActorSumAggregate | null;

  @TypeGraphQL.Field(_type => ActorMinAggregate, {
    nullable: true
  })
  _min!: ActorMinAggregate | null;

  @TypeGraphQL.Field(_type => ActorMaxAggregate, {
    nullable: true
  })
  _max!: ActorMaxAggregate | null;
}
