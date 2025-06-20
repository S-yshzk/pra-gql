import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFilm_categoryArgs } from "./args/GroupByFilm_categoryArgs";
import { Film_category } from "../../../models/Film_category";
import { Film_categoryGroupBy } from "../../outputs/Film_categoryGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_category)
export class GroupByFilm_categoryResolver {
  @TypeGraphQL.Query(_returns => [Film_categoryGroupBy], {
    nullable: false
  })
  async groupByFilm_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFilm_categoryArgs): Promise<Film_categoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_category.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
