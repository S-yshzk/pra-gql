import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneFilm_categoryArgs } from "./args/DeleteOneFilm_categoryArgs";
import { Film_category } from "../../../models/Film_category";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_category)
export class DeleteOneFilm_categoryResolver {
  @TypeGraphQL.Mutation(_returns => Film_category, {
    nullable: true
  })
  async deleteOneFilm_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFilm_categoryArgs): Promise<Film_category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_category.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
