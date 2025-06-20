import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateWithoutCustomerInput } from "../inputs/PaymentCreateWithoutCustomerInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentCreateOrConnectWithoutCustomerInput", {})
export class PaymentCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: PaymentCreateWithoutCustomerInput;
}
