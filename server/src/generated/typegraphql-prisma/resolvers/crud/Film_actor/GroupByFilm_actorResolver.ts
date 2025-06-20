import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFilm_actorArgs } from "./args/GroupByFilm_actorArgs";
import { Film_actor } from "../../../models/Film_actor";
import { Film_actorGroupBy } from "../../outputs/Film_actorGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_actor)
export class GroupByFilm_actorResolver {
  @TypeGraphQL.Query(_returns => [Film_actorGroupBy], {
    nullable: false
  })
  async groupByFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFilm_actorArgs): Promise<Film_actorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
