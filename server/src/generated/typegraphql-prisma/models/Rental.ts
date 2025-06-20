import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Inventory } from "../models/Inventory";
import { Payment } from "../models/Payment";
import { Staff } from "../models/Staff";
import { RentalCount } from "../resolvers/outputs/RentalCount";

@TypeGraphQL.ObjectType("Rental", {})
export class Rental {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rental_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  rental_date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  inventory_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customer_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  return_date?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staff_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  payment?: Payment[];

  customer?: Customer;

  inventory?: Inventory;

  staff?: Staff;

  @TypeGraphQL.Field(_type => RentalCount, {
    nullable: true
  })
  _count?: RentalCount | null;
}
