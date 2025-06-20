import * as TypeGraphQL from "type-graphql";

export enum AddressScalarFieldEnum {
  address_id = "address_id",
  address = "address",
  address2 = "address2",
  district = "district",
  city_id = "city_id",
  postal_code = "postal_code",
  phone = "phone",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(AddressScalarFieldEnum, {
  name: "AddressScalarFieldEnum",
  description: undefined,
});
