import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Address } from "../models/Address";
import { Country } from "../models/Country";
import { CityCount } from "../resolvers/outputs/CityCount";

@TypeGraphQL.ObjectType("City", {})
export class City {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  city_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  country_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  address?: Address[];

  country?: Country;

  @TypeGraphQL.Field(_type => CityCount, {
    nullable: true
  })
  _count?: CityCount | null;
}
