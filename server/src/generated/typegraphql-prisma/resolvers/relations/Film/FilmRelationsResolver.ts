import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Film } from "../../../models/Film";
import { Film_actor } from "../../../models/Film_actor";
import { Film_category } from "../../../models/Film_category";
import { Inventory } from "../../../models/Inventory";
import { Language } from "../../../models/Language";
import { FilmFilm_actorArgs } from "./args/FilmFilm_actorArgs";
import { FilmFilm_categoryArgs } from "./args/FilmFilm_categoryArgs";
import { FilmInventoryArgs } from "./args/FilmInventoryArgs";
import { FilmLanguage_film_original_language_idTolanguageArgs } from "./args/FilmLanguage_film_original_language_idTolanguageArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Film)
export class FilmRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Language, {
    nullable: false
  })
  async language_film_language_idTolanguage(@TypeGraphQL.Root() film: Film, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Language> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film.findUniqueOrThrow({
      where: {
        film_id: film.film_id,
      },
    }).language_film_language_idTolanguage({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Language, {
    nullable: true
  })
  async language_film_original_language_idTolanguage(@TypeGraphQL.Root() film: Film, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FilmLanguage_film_original_language_idTolanguageArgs): Promise<Language | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film.findUniqueOrThrow({
      where: {
        film_id: film.film_id,
      },
    }).language_film_original_language_idTolanguage({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Film_actor], {
    nullable: false
  })
  async film_actor(@TypeGraphQL.Root() film: Film, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FilmFilm_actorArgs): Promise<Film_actor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film.findUniqueOrThrow({
      where: {
        film_id: film.film_id,
      },
    }).film_actor({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Film_category], {
    nullable: false
  })
  async film_category(@TypeGraphQL.Root() film: Film, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FilmFilm_categoryArgs): Promise<Film_category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film.findUniqueOrThrow({
      where: {
        film_id: film.film_id,
      },
    }).film_category({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Inventory], {
    nullable: false
  })
  async inventory(@TypeGraphQL.Root() film: Film, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FilmInventoryArgs): Promise<Inventory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film.findUniqueOrThrow({
      where: {
        film_id: film.film_id,
      },
    }).inventory({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
