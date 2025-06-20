import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreAvgAggregate } from "../outputs/StoreAvgAggregate";
import { StoreCountAggregate } from "../outputs/StoreCountAggregate";
import { StoreMaxAggregate } from "../outputs/StoreMaxAggregate";
import { StoreMinAggregate } from "../outputs/StoreMinAggregate";
import { StoreSumAggregate } from "../outputs/StoreSumAggregate";

@TypeGraphQL.ObjectType("StoreGroupBy", {})
export class StoreGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  store_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  manager_staff_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  @TypeGraphQL.Field(_type => StoreCountAggregate, {
    nullable: true
  })
  _count!: StoreCountAggregate | null;

  @TypeGraphQL.Field(_type => StoreAvgAggregate, {
    nullable: true
  })
  _avg!: StoreAvgAggregate | null;

  @TypeGraphQL.Field(_type => StoreSumAggregate, {
    nullable: true
  })
  _sum!: StoreSumAggregate | null;

  @TypeGraphQL.Field(_type => StoreMinAggregate, {
    nullable: true
  })
  _min!: StoreMinAggregate | null;

  @TypeGraphQL.Field(_type => StoreMaxAggregate, {
    nullable: true
  })
  _max!: StoreMaxAggregate | null;
}
