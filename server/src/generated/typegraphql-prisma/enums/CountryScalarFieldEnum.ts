import * as TypeGraphQL from "type-graphql";

export enum CountryScalarFieldEnum {
  country_id = "country_id",
  country = "country",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(CountryScalarFieldEnum, {
  name: "CountryScalarFieldEnum",
  description: undefined,
});
