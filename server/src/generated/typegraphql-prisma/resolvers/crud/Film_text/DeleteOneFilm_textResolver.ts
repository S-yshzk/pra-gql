import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneFilm_textArgs } from "./args/DeleteOneFilm_textArgs";
import { Film_text } from "../../../models/Film_text";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_text)
export class DeleteOneFilm_textResolver {
  @TypeGraphQL.Mutation(_returns => Film_text, {
    nullable: true
  })
  async deleteOneFilm_text(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFilm_textArgs): Promise<Film_text | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_text.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
