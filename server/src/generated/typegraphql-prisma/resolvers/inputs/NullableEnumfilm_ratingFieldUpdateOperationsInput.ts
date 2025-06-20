import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { film_rating } from "../../enums/film_rating";

@TypeGraphQL.InputType("NullableEnumfilm_ratingFieldUpdateOperationsInput", {})
export class NullableEnumfilm_ratingFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => film_rating, {
    nullable: true
  })
  set?: "G" | "PG" | "PG_13" | "R" | "NC_17" | undefined;
}
