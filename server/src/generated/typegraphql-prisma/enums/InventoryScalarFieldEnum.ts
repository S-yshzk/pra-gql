import * as TypeGraphQL from "type-graphql";

export enum InventoryScalarFieldEnum {
  inventory_id = "inventory_id",
  film_id = "film_id",
  store_id = "store_id",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(InventoryScalarFieldEnum, {
  name: "InventoryScalarFieldEnum",
  description: undefined,
});
