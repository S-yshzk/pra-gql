import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Film } from "../../../models/Film";
import { Film_category } from "../../../models/Film_category";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_category)
export class Film_categoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: false
  })
  async category(@TypeGraphQL.Root() film_category: Film_category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_category.findUniqueOrThrow({
      where: {
        film_id_category_id: {
          film_id: film_category.film_id,
          category_id: film_category.category_id,
        },
      },
    }).category({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Film, {
    nullable: false
  })
  async film(@TypeGraphQL.Root() film_category: Film_category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Film> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_category.findUniqueOrThrow({
      where: {
        film_id_category_id: {
          film_id: film_category.film_id,
          category_id: film_category.category_id,
        },
      },
    }).film({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
