import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFilm_categoryArgs } from "./args/AggregateFilm_categoryArgs";
import { Film_category } from "../../../models/Film_category";
import { AggregateFilm_category } from "../../outputs/AggregateFilm_category";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_category)
export class AggregateFilm_categoryResolver {
  @TypeGraphQL.Query(_returns => AggregateFilm_category, {
    nullable: false
  })
  async aggregateFilm_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFilm_categoryArgs): Promise<AggregateFilm_category> {
    return getPrismaFromContext(ctx).film_category.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
