import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentCreateInput } from "../../../inputs/PaymentCreateInput";
import { PaymentUpdateInput } from "../../../inputs/PaymentUpdateInput";
import { PaymentWhereUniqueInput } from "../../../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePaymentArgs {
  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentCreateInput, {
    nullable: false
  })
  create!: PaymentCreateInput;

  @TypeGraphQL.Field(_type => PaymentUpdateInput, {
    nullable: false
  })
  update!: PaymentUpdateInput;
}
