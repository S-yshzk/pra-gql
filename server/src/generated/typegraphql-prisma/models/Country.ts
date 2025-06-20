import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { City } from "../models/City";
import { CountryCount } from "../resolvers/outputs/CountryCount";

@TypeGraphQL.ObjectType("Country", {})
export class Country {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  country_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  city?: City[];

  @TypeGraphQL.Field(_type => CountryCount, {
    nullable: true
  })
  _count?: CountryCount | null;
}
