import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumfilm_ratingNullableFilter } from "../inputs/NestedEnumfilm_ratingNullableFilter";
import { film_rating } from "../../enums/film_rating";

@TypeGraphQL.InputType("Enumfilm_ratingNullableFilter", {})
export class Enumfilm_ratingNullableFilter {
  @TypeGraphQL.Field(_type => film_rating, {
    nullable: true
  })
  equals?: "G" | "PG" | "PG_13" | "R" | "NC_17" | undefined;

  @TypeGraphQL.Field(_type => [film_rating], {
    nullable: true
  })
  in?: Array<"G" | "PG" | "PG_13" | "R" | "NC_17"> | undefined;

  @TypeGraphQL.Field(_type => [film_rating], {
    nullable: true
  })
  notIn?: Array<"G" | "PG" | "PG_13" | "R" | "NC_17"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumfilm_ratingNullableFilter, {
    nullable: true
  })
  not?: NestedEnumfilm_ratingNullableFilter | undefined;
}
