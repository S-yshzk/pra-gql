import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateWithoutCustomerInput } from "../inputs/PaymentCreateWithoutCustomerInput";
import { PaymentUpdateWithoutCustomerInput } from "../inputs/PaymentUpdateWithoutCustomerInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpsertWithWhereUniqueWithoutCustomerInput", {})
export class PaymentUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: PaymentUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => PaymentCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: PaymentCreateWithoutCustomerInput;
}
