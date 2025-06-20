import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutPaymentInput } from "../inputs/CustomerCreateNestedOneWithoutPaymentInput";
import { RentalCreateNestedOneWithoutPaymentInput } from "../inputs/RentalCreateNestedOneWithoutPaymentInput";

@TypeGraphQL.InputType("PaymentCreateWithoutStaffInput", {})
export class PaymentCreateWithoutStaffInput {
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

  @TypeGraphQL.Field(_type => RentalCreateNestedOneWithoutPaymentInput, {
    nullable: true
  })
  rental?: RentalCreateNestedOneWithoutPaymentInput | undefined;
}
