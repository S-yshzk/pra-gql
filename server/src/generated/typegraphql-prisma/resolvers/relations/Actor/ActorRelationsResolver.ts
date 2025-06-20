import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Actor } from "../../../models/Actor";
import { Film_actor } from "../../../models/Film_actor";
import { ActorFilm_actorArgs } from "./args/ActorFilm_actorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Actor)
export class ActorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Film_actor], {
    nullable: false
  })
  async film_actor(@TypeGraphQL.Root() actor: Actor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ActorFilm_actorArgs): Promise<Film_actor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).actor.findUniqueOrThrow({
      where: {
        actor_id: actor.actor_id,
      },
    }).film_actor({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
