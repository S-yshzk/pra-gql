import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { City } from "../models/City";
import { Customer } from "../models/Customer";
import { Staff } from "../models/Staff";
import { Store } from "../models/Store";
import { AddressCount } from "../resolvers/outputs/AddressCount";

@TypeGraphQL.ObjectType("Address", {})
export class Address {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address2?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  district!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  city_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postal_code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  city?: City;

  customer?: Customer[];

  staff?: Staff[];

  store?: Store[];

  @TypeGraphQL.Field(_type => AddressCount, {
    nullable: true
  })
  _count?: AddressCount | null;
}
