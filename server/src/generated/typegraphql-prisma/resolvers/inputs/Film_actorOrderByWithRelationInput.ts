import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorOrderByWithRelationInput } from "../inputs/ActorOrderByWithRelationInput";
import { FilmOrderByWithRelationInput } from "../inputs/FilmOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Film_actorOrderByWithRelationInput", {})
export class Film_actorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActorOrderByWithRelationInput, {
    nullable: true
  })
  actor?: ActorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => FilmOrderByWithRelationInput, {
    nullable: true
  })
  film?: FilmOrderByWithRelationInput | undefined;
}
