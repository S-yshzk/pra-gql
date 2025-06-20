import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentUpdateWithoutRentalInput } from "../inputs/PaymentUpdateWithoutRentalInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpdateWithWhereUniqueWithoutRentalInput", {})
export class PaymentUpdateWithWhereUniqueWithoutRentalInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentUpdateWithoutRentalInput, {
    nullable: false
  })
  data!: PaymentUpdateWithoutRentalInput;
}
