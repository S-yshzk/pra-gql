import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryWhereInput } from "../inputs/Film_categoryWhereInput";

@TypeGraphQL.InputType("Film_categoryListRelationFilter", {})
export class Film_categoryListRelationFilter {
  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  every?: Film_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  some?: Film_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  none?: Film_categoryWhereInput | undefined;
}
