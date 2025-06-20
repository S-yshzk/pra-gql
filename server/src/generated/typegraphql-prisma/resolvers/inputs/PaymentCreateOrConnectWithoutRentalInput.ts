import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateWithoutRentalInput } from "../inputs/PaymentCreateWithoutRentalInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentCreateOrConnectWithoutRentalInput", {})
export class PaymentCreateOrConnectWithoutRentalInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentCreateWithoutRentalInput, {
    nullable: false
  })
  create!: PaymentCreateWithoutRentalInput;
}
