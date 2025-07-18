import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyStaffInput } from "../inputs/PaymentCreateManyStaffInput";

@TypeGraphQL.InputType("PaymentCreateManyStaffInputEnvelope", {})
export class PaymentCreateManyStaffInputEnvelope {
  @TypeGraphQL.Field(_type => [PaymentCreateManyStaffInput], {
    nullable: false
  })
  data!: PaymentCreateManyStaffInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
