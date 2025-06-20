import * as TypeGraphQL from "type-graphql";

export enum CustomerScalarFieldEnum {
  customer_id = "customer_id",
  store_id = "store_id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  address_id = "address_id",
  active = "active",
  create_date = "create_date",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
  name: "CustomerScalarFieldEnum",
  description: undefined,
});
