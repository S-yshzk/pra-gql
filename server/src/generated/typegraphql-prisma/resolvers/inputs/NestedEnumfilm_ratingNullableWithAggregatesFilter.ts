import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumfilm_ratingNullableFilter } from "../inputs/NestedEnumfilm_ratingNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { film_rating } from "../../enums/film_rating";

@TypeGraphQL.InputType("NestedEnumfilm_ratingNullableWithAggregatesFilter", {})
export class NestedEnumfilm_ratingNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumfilm_ratingNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumfilm_ratingNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumfilm_ratingNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumfilm_ratingNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumfilm_ratingNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumfilm_ratingNullableFilter | undefined;
}
