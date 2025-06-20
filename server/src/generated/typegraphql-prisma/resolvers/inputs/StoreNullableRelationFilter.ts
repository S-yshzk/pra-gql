import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreNullableRelationFilter", {})
export class StoreNullableRelationFilter {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  is?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  isNot?: StoreWhereInput | undefined;
}
