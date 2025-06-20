import * as TypeGraphQL from "type-graphql";

export enum CityScalarFieldEnum {
  city_id = "city_id",
  city = "city",
  country_id = "country_id",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(CityScalarFieldEnum, {
  name: "CityScalarFieldEnum",
  description: undefined,
});
