import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput } from "../inputs/LanguageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput";
import { LanguageCreateWithoutFilm_film_original_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutFilm_film_original_language_idTolanguageInput";
import { LanguageUpdateToOneWithWhereWithoutFilm_film_original_language_idTolanguageInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutFilm_film_original_language_idTolanguageInput";
import { LanguageUpsertWithoutFilm_film_original_language_idTolanguageInput } from "../inputs/LanguageUpsertWithoutFilm_film_original_language_idTolanguageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput", {})
export class LanguageUpdateOneWithoutFilm_film_original_language_idTolanguageNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutFilm_film_original_language_idTolanguageInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutFilm_film_original_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutFilm_film_original_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutFilm_film_original_language_idTolanguageInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutFilm_film_original_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  disconnect?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  delete?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutFilm_film_original_language_idTolanguageInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutFilm_film_original_language_idTolanguageInput | undefined;
}
