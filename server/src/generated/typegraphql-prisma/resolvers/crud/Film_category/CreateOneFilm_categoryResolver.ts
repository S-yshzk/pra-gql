import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFilm_categoryArgs } from "./args/CreateOneFilm_categoryArgs";
import { Film_category } from "../../../models/Film_category";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_category)
export class CreateOneFilm_categoryResolver {
  @TypeGraphQL.Mutation(_returns => Film_category, {
    nullable: false
  })
  async createOneFilm_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFilm_categoryArgs): Promise<Film_category> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_category.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
