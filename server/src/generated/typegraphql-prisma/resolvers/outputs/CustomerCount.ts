import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCountPaymentArgs } from "./args/CustomerCountPaymentArgs";
import { CustomerCountRentalArgs } from "./args/CustomerCountRentalArgs";

@TypeGraphQL.ObjectType("CustomerCount", {})
export class CustomerCount {
  payment!: number;
  rental!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "payment",
    nullable: false
  })
  getPayment(@TypeGraphQL.Root() root: CustomerCount, @TypeGraphQL.Args() args: CustomerCountPaymentArgs): number {
    return root.payment;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rental",
    nullable: false
  })
  getRental(@TypeGraphQL.Root() root: CustomerCount, @TypeGraphQL.Args() args: CustomerCountRentalArgs): number {
    return root.rental;
  }
}
