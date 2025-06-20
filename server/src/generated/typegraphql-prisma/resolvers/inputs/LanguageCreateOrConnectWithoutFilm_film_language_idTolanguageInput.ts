import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutFilm_film_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutFilm_film_language_idTolanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutFilm_film_language_idTolanguageInput", {})
export class LanguageCreateOrConnectWithoutFilm_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutFilm_film_language_idTolanguageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutFilm_film_language_idTolanguageInput;
}
