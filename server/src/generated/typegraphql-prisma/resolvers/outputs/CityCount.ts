import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCountAddressArgs } from "./args/CityCountAddressArgs";

@TypeGraphQL.ObjectType("CityCount", {})
export class CityCount {
  address!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "address",
    nullable: false
  })
  getAddress(@TypeGraphQL.Root() root: CityCount, @TypeGraphQL.Args() args: CityCountAddressArgs): number {
    return root.address;
  }
}
