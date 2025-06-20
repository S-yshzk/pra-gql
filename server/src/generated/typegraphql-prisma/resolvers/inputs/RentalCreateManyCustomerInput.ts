import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RentalCreateManyCustomerInput", {})
export class RentalCreateManyCustomerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rental_id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  rental_date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  inventory_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  return_date?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staff_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;
}
