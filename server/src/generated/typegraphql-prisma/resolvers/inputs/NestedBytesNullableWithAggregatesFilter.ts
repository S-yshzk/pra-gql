import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBytesNullableFilter } from "../inputs/NestedBytesNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("NestedBytesNullableWithAggregatesFilter", {})
export class NestedBytesNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedBytesNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBytesNullableFilter, {
    nullable: true
  })
  _min?: NestedBytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBytesNullableFilter, {
    nullable: true
  })
  _max?: NestedBytesNullableFilter | undefined;
}
