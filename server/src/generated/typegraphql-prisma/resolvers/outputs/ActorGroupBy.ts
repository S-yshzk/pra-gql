import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorAvgAggregate } from "../outputs/ActorAvgAggregate";
import { ActorCountAggregate } from "../outputs/ActorCountAggregate";
import { ActorMaxAggregate } from "../outputs/ActorMaxAggregate";
import { ActorMinAggregate } from "../outputs/ActorMinAggregate";
import { ActorSumAggregate } from "../outputs/ActorSumAggregate";

@TypeGraphQL.ObjectType("ActorGroupBy", {})
export class ActorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  actor_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

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
