import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentUpdateInput } from "../../../inputs/PaymentUpdateInput";
import { PaymentWhereUniqueInput } from "../../../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePaymentArgs {
  @TypeGraphQL.Field(_type => PaymentUpdateInput, {
    nullable: false
  })
  data!: PaymentUpdateInput;

  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;
}
