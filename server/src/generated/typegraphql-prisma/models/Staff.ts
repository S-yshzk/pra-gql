import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Address } from "../models/Address";
import { Payment } from "../models/Payment";
import { Rental } from "../models/Rental";
import { Store } from "../models/Store";
import { StaffCount } from "../resolvers/outputs/StaffCount";

@TypeGraphQL.ObjectType("Staff", {})
export class Staff {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staff_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  picture?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  store_id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  payment?: Payment[];

  rental?: Rental[];

  address?: Address;

  store_staff_store_idTostore?: Store;

  store_store_manager_staff_idTostaff?: Store | null;

  @TypeGraphQL.Field(_type => StaffCount, {
    nullable: true
  })
  _count?: StaffCount | null;
}
