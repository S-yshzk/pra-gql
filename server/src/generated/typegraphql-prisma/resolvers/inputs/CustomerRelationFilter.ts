import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerRelationFilter", {})
export class CustomerRelationFilter {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  is?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  isNot?: CustomerWhereInput | undefined;
}
