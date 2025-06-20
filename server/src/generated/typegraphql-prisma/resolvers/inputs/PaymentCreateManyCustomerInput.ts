import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PaymentCreateManyCustomerInput", {})
export class PaymentCreateManyCustomerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  payment_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staff_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rental_id?: number | undefined;

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
}
