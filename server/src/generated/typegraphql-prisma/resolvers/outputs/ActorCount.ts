import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorCountFilm_actorArgs } from "./args/ActorCountFilm_actorArgs";

@TypeGraphQL.ObjectType("ActorCount", {})
export class ActorCount {
  film_actor!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "film_actor",
    nullable: false
  })
  getFilm_actor(@TypeGraphQL.Root() root: ActorCount, @TypeGraphQL.Args() args: ActorCountFilm_actorArgs): number {
    return root.film_actor;
  }
}
