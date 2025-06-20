import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyCustomerInput } from "../inputs/PaymentCreateManyCustomerInput";

@TypeGraphQL.InputType("PaymentCreateManyCustomerInputEnvelope", {})
export class PaymentCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [PaymentCreateManyCustomerInput], {
    nullable: false
  })
  data!: PaymentCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
