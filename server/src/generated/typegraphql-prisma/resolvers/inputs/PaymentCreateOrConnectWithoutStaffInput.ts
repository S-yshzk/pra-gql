import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateWithoutStaffInput } from "../inputs/PaymentCreateWithoutStaffInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentCreateOrConnectWithoutStaffInput", {})
export class PaymentCreateOrConnectWithoutStaffInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentCreateWithoutStaffInput, {
    nullable: false
  })
  create!: PaymentCreateWithoutStaffInput;
}
