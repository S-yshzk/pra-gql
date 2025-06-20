import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Film_actorListRelationFilter } from "../inputs/Film_actorListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActorWhereInput", {})
export class ActorWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  actor_id?: IntFilter | undefined;

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
