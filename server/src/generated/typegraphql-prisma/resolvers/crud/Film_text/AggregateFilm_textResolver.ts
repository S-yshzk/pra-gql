import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFilm_textArgs } from "./args/AggregateFilm_textArgs";
import { Film_text } from "../../../models/Film_text";
import { AggregateFilm_text } from "../../outputs/AggregateFilm_text";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film_text)
export class AggregateFilm_textResolver {
  @TypeGraphQL.Query(_returns => AggregateFilm_text, {
    nullable: false
  })
  async aggregateFilm_text(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFilm_textArgs): Promise<AggregateFilm_text> {
    return getPrismaFromContext(ctx).film_text.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
