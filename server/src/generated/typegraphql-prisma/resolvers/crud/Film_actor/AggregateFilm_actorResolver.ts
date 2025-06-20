import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFilm_actorArgs } from "./args/AggregateFilm_actorArgs";
import { Film_actor } from "../../../models/Film_actor";
import { AggregateFilm_actor } from "../../outputs/AggregateFilm_actor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_actor)
export class AggregateFilm_actorResolver {
  @TypeGraphQL.Query(_returns => AggregateFilm_actor, {
    nullable: false
  })
  async aggregateFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFilm_actorArgs): Promise<AggregateFilm_actor> {
    return getPrismaFromContext(ctx).film_actor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
