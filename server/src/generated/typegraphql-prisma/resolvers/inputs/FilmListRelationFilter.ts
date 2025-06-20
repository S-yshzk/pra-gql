import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmListRelationFilter", {})
export class FilmListRelationFilter {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  every?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  some?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  none?: FilmWhereInput | undefined;
}
