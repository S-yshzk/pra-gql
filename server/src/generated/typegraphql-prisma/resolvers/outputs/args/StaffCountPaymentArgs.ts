import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentWhereInput } from "../../inputs/PaymentWhereInput";

@TypeGraphQL.ArgsType()
export class StaffCountPaymentArgs {
  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  where?: PaymentWhereInput | undefined;
}
