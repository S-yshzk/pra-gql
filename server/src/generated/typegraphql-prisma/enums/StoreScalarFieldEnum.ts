import * as TypeGraphQL from "type-graphql";

export enum StoreScalarFieldEnum {
  store_id = "store_id",
  manager_staff_id = "manager_staff_id",
  address_id = "address_id",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(StoreScalarFieldEnum, {
  name: "StoreScalarFieldEnum",
  description: undefined,
});
