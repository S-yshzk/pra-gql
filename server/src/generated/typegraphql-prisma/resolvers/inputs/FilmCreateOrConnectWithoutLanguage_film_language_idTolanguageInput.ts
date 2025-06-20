import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutLanguage_film_language_idTolanguageInput } from "../inputs/FilmCreateWithoutLanguage_film_language_idTolanguageInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput", {})
export class FilmCreateOrConnectWithoutLanguage_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutLanguage_film_language_idTolanguageInput, {
    nullable: false
  })
  create!: FilmCreateWithoutLanguage_film_language_idTolanguageInput;
}
