import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentCreateInput } from "../../../inputs/PaymentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePaymentArgs {
  @TypeGraphQL.Field(_type => PaymentCreateInput, {
    nullable: false
  })
  data!: PaymentCreateInput;
}
