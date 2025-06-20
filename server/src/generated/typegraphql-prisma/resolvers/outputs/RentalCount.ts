import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCountPaymentArgs } from "./args/RentalCountPaymentArgs";

@TypeGraphQL.ObjectType("RentalCount", {})
export class RentalCount {
  payment!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "payment",
    nullable: false
  })
  getPayment(@TypeGraphQL.Root() root: RentalCount, @TypeGraphQL.Args() args: RentalCountPaymentArgs): number {
    return root.payment;
  }
}
