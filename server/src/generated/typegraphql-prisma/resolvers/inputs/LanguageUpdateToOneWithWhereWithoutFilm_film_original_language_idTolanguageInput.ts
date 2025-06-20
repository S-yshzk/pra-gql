import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutFilm_film_original_language_idTolanguageInput } from "../inputs/LanguageUpdateWithoutFilm_film_original_language_idTolanguageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutFilm_film_original_language_idTolanguageInput", {})
export class LanguageUpdateToOneWithWhereWithoutFilm_film_original_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutFilm_film_original_language_idTolanguageInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutFilm_film_original_language_idTolanguageInput;
}
