import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentOrderByWithRelationInput } from "../../../inputs/PaymentOrderByWithRelationInput";
import { PaymentWhereInput } from "../../../inputs/PaymentWhereInput";
import { PaymentWhereUniqueInput } from "../../../inputs/PaymentWhereUniqueInput";
import { PaymentScalarFieldEnum } from "../../../../enums/PaymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class StaffPaymentArgs {
  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  where?: PaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PaymentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PaymentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentWhereUniqueInput, {
    nullable: true
  })
  cursor?: PaymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"payment_id" | "customer_id" | "staff_id" | "rental_id" | "amount" | "payment_date" | "last_update"> | undefined;
}
