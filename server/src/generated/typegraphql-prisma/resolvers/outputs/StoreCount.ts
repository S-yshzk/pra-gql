import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCountCustomerArgs } from "./args/StoreCountCustomerArgs";
import { StoreCountInventoryArgs } from "./args/StoreCountInventoryArgs";
import { StoreCountStaff_staff_store_idTostoreArgs } from "./args/StoreCountStaff_staff_store_idTostoreArgs";

@TypeGraphQL.ObjectType("StoreCount", {})
export class StoreCount {
  customer!: number;
  inventory!: number;
  staff_staff_store_idTostore!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "customer",
    nullable: false
  })
  getCustomer(@TypeGraphQL.Root() root: StoreCount, @TypeGraphQL.Args() args: StoreCountCustomerArgs): number {
    return root.customer;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inventory",
    nullable: false
  })
  getInventory(@TypeGraphQL.Root() root: StoreCount, @TypeGraphQL.Args() args: StoreCountInventoryArgs): number {
    return root.inventory;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "staff_staff_store_idTostore",
    nullable: false
  })
  getStaff_staff_store_idTostore(@TypeGraphQL.Root() root: StoreCount, @TypeGraphQL.Args() args: StoreCountStaff_staff_store_idTostoreArgs): number {
    return root.staff_staff_store_idTostore;
  }
}
