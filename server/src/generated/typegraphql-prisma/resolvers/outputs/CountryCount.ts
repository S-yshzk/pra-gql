import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCountCityArgs } from "./args/CountryCountCityArgs";

@TypeGraphQL.ObjectType("CountryCount", {})
export class CountryCount {
  city!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "city",
    nullable: false
  })
  getCity(@TypeGraphQL.Root() root: CountryCount, @TypeGraphQL.Args() args: CountryCountCityArgs): number {
    return root.city;
  }
}
