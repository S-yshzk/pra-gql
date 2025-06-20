import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentOrderByWithAggregationInput } from "../../../inputs/PaymentOrderByWithAggregationInput";
import { PaymentScalarWhereWithAggregatesInput } from "../../../inputs/PaymentScalarWhereWithAggregatesInput";
import { PaymentWhereInput } from "../../../inputs/PaymentWhereInput";
import { PaymentScalarFieldEnum } from "../../../../enums/PaymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPaymentArgs {
  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  where?: PaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PaymentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PaymentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"payment_id" | "customer_id" | "staff_id" | "rental_id" | "amount" | "payment_date" | "last_update">;

  @TypeGraphQL.Field(_type => PaymentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PaymentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
