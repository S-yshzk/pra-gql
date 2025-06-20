import * as TypeGraphQL from "type-graphql";

export enum StaffScalarFieldEnum {
  staff_id = "staff_id",
  first_name = "first_name",
  last_name = "last_name",
  address_id = "address_id",
  picture = "picture",
  email = "email",
  store_id = "store_id",
  active = "active",
  username = "username",
  password = "password",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(StaffScalarFieldEnum, {
  name: "StaffScalarFieldEnum",
  description: undefined,
});
