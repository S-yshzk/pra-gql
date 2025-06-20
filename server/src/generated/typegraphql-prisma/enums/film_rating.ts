import * as TypeGraphQL from "type-graphql";

export enum film_rating {
  G = "G",
  PG = "PG",
  PG_13 = "PG_13",
  R = "R",
  NC_17 = "NC_17"
}
TypeGraphQL.registerEnumType(film_rating, {
  name: "film_rating",
  description: undefined,
});
