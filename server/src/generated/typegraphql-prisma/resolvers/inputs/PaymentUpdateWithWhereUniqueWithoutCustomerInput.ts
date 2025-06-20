import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentUpdateWithoutCustomerInput } from "../inputs/PaymentUpdateWithoutCustomerInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpdateWithWhereUniqueWithoutCustomerInput", {})
export class PaymentUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: PaymentUpdateWithoutCustomerInput;
}
