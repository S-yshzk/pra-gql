import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorWhereInput } from "../inputs/Film_actorWhereInput";

@TypeGraphQL.InputType("Film_actorListRelationFilter", {})
export class Film_actorListRelationFilter {
  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  every?: Film_actorWhereInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  some?: Film_actorWhereInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  none?: Film_actorWhereInput | undefined;
}
