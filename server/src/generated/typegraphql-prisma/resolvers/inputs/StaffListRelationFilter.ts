import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffListRelationFilter", {})
export class StaffListRelationFilter {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  every?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  some?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  none?: StaffWhereInput | undefined;
}
