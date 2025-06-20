import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFilm_actorArgs } from "./args/FindUniqueFilm_actorArgs";
import { Film_actor } from "../../../models/Film_actor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_actor)
export class FindUniqueFilm_actorResolver {
  @TypeGraphQL.Query(_returns => Film_actor, {
    nullable: true
  })
  async film_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFilm_actorArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
