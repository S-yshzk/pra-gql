import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorRelationFilter } from "../inputs/ActorRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmRelationFilter } from "../inputs/FilmRelationFilter";
import { Film_actorWhereInput } from "../inputs/Film_actorWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { film_actorActor_idFilm_idCompoundUniqueInput } from "../inputs/film_actorActor_idFilm_idCompoundUniqueInput";

@TypeGraphQL.InputType("Film_actorWhereUniqueInput", {})
export class Film_actorWhereUniqueInput {
  @TypeGraphQL.Field(_type => film_actorActor_idFilm_idCompoundUniqueInput, {
    nullable: true
  })
  actor_id_film_id?: film_actorActor_idFilm_idCompoundUniqueInput | undefined;

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
