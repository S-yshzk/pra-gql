import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentWhereUniqueInput } from "../../../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePaymentOrThrowArgs {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;
}
