import * as TypeGraphQL from "type-graphql";

export enum PaymentScalarFieldEnum {
  payment_id = "payment_id",
  customer_id = "customer_id",
  staff_id = "staff_id",
  rental_id = "rental_id",
  amount = "amount",
  payment_date = "payment_date",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(PaymentScalarFieldEnum, {
  name: "PaymentScalarFieldEnum",
  description: undefined,
});
