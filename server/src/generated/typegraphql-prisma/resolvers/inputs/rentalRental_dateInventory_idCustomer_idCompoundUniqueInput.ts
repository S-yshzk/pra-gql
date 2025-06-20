import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("rentalRental_dateInventory_idCustomer_idCompoundUniqueInput", {})
export class rentalRental_dateInventory_idCustomer_idCompoundUniqueInput {
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
}
