import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneFilm_actorArgs } from "./args/UpsertOneFilm_actorArgs";
import { Film_actor } from "../../../models/Film_actor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_actor)
export class UpsertOneFilm_actorResolver {
  @TypeGraphQL.Mutation(_returns => Film_actor, {
    nullable: false
  })
  async upsertOneFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFilm_actorArgs): Promise<Film_actor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
