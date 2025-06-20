import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Film } from "../../../models/Film";
import { Language } from "../../../models/Language";
import { LanguageFilm_film_language_idTolanguageArgs } from "./args/LanguageFilm_film_language_idTolanguageArgs";
import { LanguageFilm_film_original_language_idTolanguageArgs } from "./args/LanguageFilm_film_original_language_idTolanguageArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Language)
export class LanguageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Film], {
    nullable: false
  })
  async film_film_language_idTolanguage(@TypeGraphQL.Root() language: Language, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LanguageFilm_film_language_idTolanguageArgs): Promise<Film[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).language.findUniqueOrThrow({
      where: {
        language_id: language.language_id,
      },
    }).film_film_language_idTolanguage({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Film], {
    nullable: false
  })
  async film_film_original_language_idTolanguage(@TypeGraphQL.Root() language: Language, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LanguageFilm_film_original_language_idTolanguageArgs): Promise<Film[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).language.findUniqueOrThrow({
      where: {
        language_id: language.language_id,
      },
    }).film_film_original_language_idTolanguage({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
