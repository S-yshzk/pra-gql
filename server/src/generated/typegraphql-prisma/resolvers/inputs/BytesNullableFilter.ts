import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBytesNullableFilter } from "../inputs/NestedBytesNullableFilter";

@TypeGraphQL.InputType("BytesNullableFilter", {})
export class BytesNullableFilter {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  equals?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [GraphQLScalars.ByteResolver], {
    nullable: true
  })
  in?: Buffer[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLScalars.ByteResolver], {
    nullable: true
  })
  notIn?: Buffer[] | undefined;

  @TypeGraphQL.Field(_type => NestedBytesNullableFilter, {
    nullable: true
  })
  not?: NestedBytesNullableFilter | undefined;
}
