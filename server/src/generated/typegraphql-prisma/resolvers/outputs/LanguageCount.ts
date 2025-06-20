import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCountFilm_film_language_idTolanguageArgs } from "./args/LanguageCountFilm_film_language_idTolanguageArgs";
import { LanguageCountFilm_film_original_language_idTolanguageArgs } from "./args/LanguageCountFilm_film_original_language_idTolanguageArgs";

@TypeGraphQL.ObjectType("LanguageCount", {})
export class LanguageCount {
  film_film_language_idTolanguage!: number;
  film_film_original_language_idTolanguage!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "film_film_language_idTolanguage",
    nullable: false
  })
  getFilm_film_language_idTolanguage(@TypeGraphQL.Root() root: LanguageCount, @TypeGraphQL.Args() args: LanguageCountFilm_film_language_idTolanguageArgs): number {
    return root.film_film_language_idTolanguage;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "film_film_original_language_idTolanguage",
    nullable: false
  })
  getFilm_film_original_language_idTolanguage(@TypeGraphQL.Root() root: LanguageCount, @TypeGraphQL.Args() args: LanguageCountFilm_film_original_language_idTolanguageArgs): number {
    return root.film_film_original_language_idTolanguage;
  }
}
