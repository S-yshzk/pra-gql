import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreListRelationFilter", {})
export class StoreListRelationFilter {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  every?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  some?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  none?: StoreWhereInput | undefined;
}
