import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutFilm_film_language_idTolanguageInput } from "../inputs/LanguageCreateOrConnectWithoutFilm_film_language_idTolanguageInput";
import { LanguageCreateWithoutFilm_film_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutFilm_film_language_idTolanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutFilm_film_language_idTolanguageInput", {})
export class LanguageCreateNestedOneWithoutFilm_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutFilm_film_language_idTolanguageInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutFilm_film_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutFilm_film_language_idTolanguageInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutFilm_film_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
