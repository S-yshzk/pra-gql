import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentUpdateManyMutationInput } from "../../../inputs/PaymentUpdateManyMutationInput";
import { PaymentWhereInput } from "../../../inputs/PaymentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPaymentArgs {
  @TypeGraphQL.Field(_type => PaymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PaymentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  where?: PaymentWhereInput | undefined;
}
