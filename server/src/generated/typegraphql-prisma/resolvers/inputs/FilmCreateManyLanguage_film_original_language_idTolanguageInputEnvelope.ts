import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateManyLanguage_film_original_language_idTolanguageInput } from "../inputs/FilmCreateManyLanguage_film_original_language_idTolanguageInput";

@TypeGraphQL.InputType("FilmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope", {})
export class FilmCreateManyLanguage_film_original_language_idTolanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [FilmCreateManyLanguage_film_original_language_idTolanguageInput], {
    nullable: false
  })
  data!: FilmCreateManyLanguage_film_original_language_idTolanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
