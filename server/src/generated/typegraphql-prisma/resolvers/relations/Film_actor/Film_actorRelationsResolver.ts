import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Actor } from "../../../models/Actor";
import { Film } from "../../../models/Film";
import { Film_actor } from "../../../models/Film_actor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_actor)
export class Film_actorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Actor, {
    nullable: false
  })
  async actor(@TypeGraphQL.Root() film_actor: Film_actor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Actor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findUniqueOrThrow({
      where: {
        actor_id_film_id: {
          actor_id: film_actor.actor_id,
          film_id: film_actor.film_id,
        },
      },
    }).actor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Film, {
    nullable: false
  })
  async film(@TypeGraphQL.Root() film_actor: Film_actor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Film> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findUniqueOrThrow({
      where: {
        actor_id_film_id: {
          actor_id: film_actor.actor_id,
          film_id: film_actor.film_id,
        },
      },
    }).film({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
