import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorRelationFilter } from "../inputs/ActorRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmRelationFilter } from "../inputs/FilmRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Film_actorWhereInput", {})
export class Film_actorWhereInput {
  @TypeGraphQL.Field(_type => [Film_actorWhereInput], {
    nullable: true
  })
  AND?: Film_actorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereInput], {
    nullable: true
  })
  OR?: Film_actorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereInput], {
    nullable: true
  })
  NOT?: Film_actorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  actor_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  film_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ActorRelationFilter, {
    nullable: true
  })
  actor?: ActorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FilmRelationFilter, {
    nullable: true
  })
  film?: FilmRelationFilter | undefined;
}
