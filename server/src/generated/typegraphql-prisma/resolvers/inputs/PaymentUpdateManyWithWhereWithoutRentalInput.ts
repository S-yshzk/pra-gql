import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentScalarWhereInput } from "../inputs/PaymentScalarWhereInput";
import { PaymentUpdateManyMutationInput } from "../inputs/PaymentUpdateManyMutationInput";

@TypeGraphQL.InputType("PaymentUpdateManyWithWhereWithoutRentalInput", {})
export class PaymentUpdateManyWithWhereWithoutRentalInput {
  @TypeGraphQL.Field(_type => PaymentScalarWhereInput, {
    nullable: false
  })
  where!: PaymentScalarWhereInput;

  @TypeGraphQL.Field(_type => PaymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PaymentUpdateManyMutationInput;
}
