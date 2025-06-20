import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmRelationFilter", {})
export class FilmRelationFilter {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  is?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  isNot?: FilmWhereInput | undefined;
}
