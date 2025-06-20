import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyRentalInput } from "../inputs/PaymentCreateManyRentalInput";

@TypeGraphQL.InputType("PaymentCreateManyRentalInputEnvelope", {})
export class PaymentCreateManyRentalInputEnvelope {
  @TypeGraphQL.Field(_type => [PaymentCreateManyRentalInput], {
    nullable: false
  })
  data!: PaymentCreateManyRentalInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
