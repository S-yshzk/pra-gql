import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Address } from "../models/Address";
import { Customer } from "../models/Customer";
import { Inventory } from "../models/Inventory";
import { Staff } from "../models/Staff";
import { StoreCount } from "../resolvers/outputs/StoreCount";

@TypeGraphQL.ObjectType("Store", {})
export class Store {
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

  customer?: Customer[];

  inventory?: Inventory[];

  staff_staff_store_idTostore?: Staff[];

  address?: Address;

  staff_store_manager_staff_idTostaff?: Staff;

  @TypeGraphQL.Field(_type => StoreCount, {
    nullable: true
  })
  _count?: StoreCount | null;
}
