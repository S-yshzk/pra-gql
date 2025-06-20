import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutPaymentInput } from "../inputs/CustomerCreateNestedOneWithoutPaymentInput";
import { StaffCreateNestedOneWithoutPaymentInput } from "../inputs/StaffCreateNestedOneWithoutPaymentInput";

@TypeGraphQL.InputType("PaymentCreateWithoutRentalInput", {})
export class PaymentCreateWithoutRentalInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  amount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  payment_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutPaymentInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutPaymentInput;

  @TypeGraphQL.Field(_type => StaffCreateNestedOneWithoutPaymentInput, {
    nullable: false
  })
  staff!: StaffCreateNestedOneWithoutPaymentInput;
}
