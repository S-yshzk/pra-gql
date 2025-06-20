import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorWhereInput } from "../inputs/ActorWhereInput";

@TypeGraphQL.InputType("ActorRelationFilter", {})
export class ActorRelationFilter {
  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  is?: ActorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  isNot?: ActorWhereInput | undefined;
}
