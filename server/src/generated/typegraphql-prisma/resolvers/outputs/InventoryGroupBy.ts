import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryAvgAggregate } from "../outputs/InventoryAvgAggregate";
import { InventoryCountAggregate } from "../outputs/InventoryCountAggregate";
import { InventoryMaxAggregate } from "../outputs/InventoryMaxAggregate";
import { InventoryMinAggregate } from "../outputs/InventoryMinAggregate";
import { InventorySumAggregate } from "../outputs/InventorySumAggregate";

@TypeGraphQL.ObjectType("InventoryGroupBy", {})
export class InventoryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  inventory_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  film_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  store_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  @TypeGraphQL.Field(_type => InventoryCountAggregate, {
    nullable: true
  })
  _count!: InventoryCountAggregate | null;

  @TypeGraphQL.Field(_type => InventoryAvgAggregate, {
    nullable: true
  })
  _avg!: InventoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => InventorySumAggregate, {
    nullable: true
  })
  _sum!: InventorySumAggregate | null;

  @TypeGraphQL.Field(_type => InventoryMinAggregate, {
    nullable: true
  })
  _min!: InventoryMinAggregate | null;

  @TypeGraphQL.Field(_type => InventoryMaxAggregate, {
    nullable: true
  })
  _max!: InventoryMaxAggregate | null;
}
