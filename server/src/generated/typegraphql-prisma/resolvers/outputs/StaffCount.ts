import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCountPaymentArgs } from "./args/StaffCountPaymentArgs";
import { StaffCountRentalArgs } from "./args/StaffCountRentalArgs";

@TypeGraphQL.ObjectType("StaffCount", {})
export class StaffCount {
  payment!: number;
  rental!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "payment",
    nullable: false
  })
  getPayment(@TypeGraphQL.Root() root: StaffCount, @TypeGraphQL.Args() args: StaffCountPaymentArgs): number {
    return root.payment;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rental",
    nullable: false
  })
  getRental(@TypeGraphQL.Root() root: StaffCount, @TypeGraphQL.Args() args: StaffCountRentalArgs): number {
    return root.rental;
  }
}
