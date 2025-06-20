import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Address } from "../models/Address";
import { Payment } from "../models/Payment";
import { Rental } from "../models/Rental";
import { Store } from "../models/Store";
import { CustomerCount } from "../resolvers/outputs/CustomerCount";

@TypeGraphQL.ObjectType("Customer", {})
export class Customer {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  store_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | null;

  address?: Address;

  store?: Store;

  payment?: Payment[];

  rental?: Rental[];

  @TypeGraphQL.Field(_type => CustomerCount, {
    nullable: true
  })
  _count?: CustomerCount | null;
}
