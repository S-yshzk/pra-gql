import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFilm_categoryOrThrowArgs } from "./args/FindFirstFilm_categoryOrThrowArgs";
import { Film_category } from "../../../models/Film_category";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_category)
export class FindFirstFilm_categoryOrThrowResolver {
  @TypeGraphQL.Query(_returns => Film_category, {
    nullable: true
  })
  async findFirstFilm_categoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFilm_categoryOrThrowArgs): Promise<Film_category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_category.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
