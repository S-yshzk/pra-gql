import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorWhereInput } from "../inputs/ActorWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Film_actorListRelationFilter } from "../inputs/Film_actorListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActorWhereUniqueInput", {})
export class ActorWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  actor_id?: number | undefined;

  @TypeGraphQL.Field(_type => [ActorWhereInput], {
    nullable: true
  })
  AND?: ActorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorWhereInput], {
    nullable: true
  })
  OR?: ActorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorWhereInput], {
    nullable: true
  })
  NOT?: ActorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Film_actorListRelationFilter, {
    nullable: true
  })
  film_actor?: Film_actorListRelationFilter | undefined;
}
