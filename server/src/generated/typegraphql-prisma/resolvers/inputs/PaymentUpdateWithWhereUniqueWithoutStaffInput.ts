import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentUpdateWithoutStaffInput } from "../inputs/PaymentUpdateWithoutStaffInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpdateWithWhereUniqueWithoutStaffInput", {})
export class PaymentUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: PaymentUpdateWithoutStaffInput;
}
