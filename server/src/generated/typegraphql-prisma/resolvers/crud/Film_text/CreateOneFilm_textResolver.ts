import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFilm_textArgs } from "./args/CreateOneFilm_textArgs";
import { Film_text } from "../../../models/Film_text";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_text)
export class CreateOneFilm_textResolver {
  @TypeGraphQL.Mutation(_returns => Film_text, {
    nullable: false
  })
  async createOneFilm_text(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFilm_textArgs): Promise<Film_text> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_text.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
