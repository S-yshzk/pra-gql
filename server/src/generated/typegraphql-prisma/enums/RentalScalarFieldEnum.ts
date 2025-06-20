import * as TypeGraphQL from "type-graphql";

export enum RentalScalarFieldEnum {
  rental_id = "rental_id",
  rental_date = "rental_date",
  inventory_id = "inventory_id",
  customer_id = "customer_id",
  return_date = "return_date",
  staff_id = "staff_id",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(RentalScalarFieldEnum, {
  name: "RentalScalarFieldEnum",
  description: undefined,
});
