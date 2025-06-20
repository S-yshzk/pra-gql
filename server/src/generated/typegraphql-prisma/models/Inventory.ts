import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Film } from "../models/Film";
import { Rental } from "../models/Rental";
import { Store } from "../models/Store";
import { InventoryCount } from "../resolvers/outputs/InventoryCount";

@TypeGraphQL.ObjectType("Inventory", {})
export class Inventory {
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

  film?: Film;

  store?: Store;

  rental?: Rental[];

  @TypeGraphQL.Field(_type => InventoryCount, {
    nullable: true
  })
  _count?: InventoryCount | null;
}
