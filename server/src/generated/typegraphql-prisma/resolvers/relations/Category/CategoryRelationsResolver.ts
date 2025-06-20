import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Film_category } from "../../../models/Film_category";
import { CategoryFilm_categoryArgs } from "./args/CategoryFilm_categoryArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Film_category], {
    nullable: false
  })
  async film_category(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CategoryFilm_categoryArgs): Promise<Film_category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findUniqueOrThrow({
      where: {
        category_id: category.category_id,
      },
    }).film_category({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
