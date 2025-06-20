import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFilmArgs } from "./args/AggregateFilmArgs";
import { Film } from "../../../models/Film";
import { AggregateFilm } from "../../outputs/AggregateFilm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film)
export class AggregateFilmResolver {
  @TypeGraphQL.Query(_returns => AggregateFilm, {
    nullable: false
  })
  async aggregateFilm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFilmArgs): Promise<AggregateFilm> {
    return getPrismaFromContext(ctx).film.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
