import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateWithoutStaffInput } from "../inputs/PaymentCreateWithoutStaffInput";
import { PaymentUpdateWithoutStaffInput } from "../inputs/PaymentUpdateWithoutStaffInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpsertWithWhereUniqueWithoutStaffInput", {})
export class PaymentUpsertWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentUpdateWithoutStaffInput, {
    nullable: false
  })
  update!: PaymentUpdateWithoutStaffInput;

  @TypeGraphQL.Field(_type => PaymentCreateWithoutStaffInput, {
    nullable: false
  })
  create!: PaymentCreateWithoutStaffInput;
}
