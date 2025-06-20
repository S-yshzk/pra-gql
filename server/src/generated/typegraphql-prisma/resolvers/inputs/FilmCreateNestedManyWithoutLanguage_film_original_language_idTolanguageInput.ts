import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope } from "../inputs/FilmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope";
import { FilmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput } from "../inputs/FilmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput";
import { FilmCreateWithoutLanguage_film_original_language_idTolanguageInput } from "../inputs/FilmCreateWithoutLanguage_film_original_language_idTolanguageInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput", {})
export class FilmCreateNestedManyWithoutLanguage_film_original_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => [FilmCreateWithoutLanguage_film_original_language_idTolanguageInput], {
    nullable: true
  })
  create?: FilmCreateWithoutLanguage_film_original_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput], {
    nullable: true
  })
  connectOrCreate?: FilmCreateOrConnectWithoutLanguage_film_original_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => FilmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope, {
    nullable: true
  })
  createMany?: FilmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereUniqueInput], {
    nullable: true
  })
  connect?: FilmWhereUniqueInput[] | undefined;
}
