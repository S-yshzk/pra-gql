import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  category_id = "category_id",
  name = "name",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
