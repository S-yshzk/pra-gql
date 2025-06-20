import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateManyLanguage_film_language_idTolanguageInputEnvelope } from "../inputs/FilmCreateManyLanguage_film_language_idTolanguageInputEnvelope";
import { FilmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput";
import { FilmCreateWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmCreateWithoutLanguage_film_language_idTolanguageInput";
import { FilmScalarWhereInput } from "../inputs/FilmScalarWhereInput";
import { FilmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput";
import { FilmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput";
import { FilmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput", {})
export class FilmUpdateManyWithoutLanguage_film_language_idTolanguageNestedInput {
  @TypeGraphQL.Field(_type => [FilmCreateWithoutLanguage_film_language_idTolanguageInput], {
    nullable: true
  })
  create?: FilmCreateWithoutLanguage_film_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput], {
    nullable: true
  })
  connectOrCreate?: FilmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput], {
    nullable: true
  })
  upsert?: FilmUpsertWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => FilmCreateManyLanguage_film_language_idTolanguageInputEnvelope, {
    nullable: true
  })
  createMany?: FilmCreateManyLanguage_film_language_idTolanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereUniqueInput], {
    nullable: true
  })
  set?: FilmWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FilmWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereUniqueInput], {
    nullable: true
  })
  delete?: FilmWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereUniqueInput], {
    nullable: true
  })
  connect?: FilmWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput], {
    nullable: true
  })
  update?: FilmUpdateWithWhereUniqueWithoutLanguage_film_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput], {
    nullable: true
  })
  updateMany?: FilmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FilmScalarWhereInput[] | undefined;
}
