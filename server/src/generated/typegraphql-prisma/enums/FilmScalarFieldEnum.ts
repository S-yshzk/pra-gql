import * as TypeGraphQL from "type-graphql";

export enum FilmScalarFieldEnum {
  film_id = "film_id",
  title = "title",
  description = "description",
  release_year = "release_year",
  language_id = "language_id",
  original_language_id = "original_language_id",
  rental_duration = "rental_duration",
  rental_rate = "rental_rate",
  length = "length",
  replacement_cost = "replacement_cost",
  rating = "rating",
  special_features = "special_features",
  last_update = "last_update"
}
TypeGraphQL.registerEnumType(FilmScalarFieldEnum, {
  name: "FilmScalarFieldEnum",
  description: undefined,
});
