import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCountCustomerArgs } from "./args/AddressCountCustomerArgs";
import { AddressCountStaffArgs } from "./args/AddressCountStaffArgs";
import { AddressCountStoreArgs } from "./args/AddressCountStoreArgs";

@TypeGraphQL.ObjectType("AddressCount", {})
export class AddressCount {
  customer!: number;
  staff!: number;
  store!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "customer",
    nullable: false
  })
  getCustomer(@TypeGraphQL.Root() root: AddressCount, @TypeGraphQL.Args() args: AddressCountCustomerArgs): number {
    return root.customer;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "staff",
    nullable: false
  })
  getStaff(@TypeGraphQL.Root() root: AddressCount, @TypeGraphQL.Args() args: AddressCountStaffArgs): number {
    return root.staff;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "store",
    nullable: false
  })
  getStore(@TypeGraphQL.Root() root: AddressCount, @TypeGraphQL.Args() args: AddressCountStoreArgs): number {
    return root.store;
  }
}
