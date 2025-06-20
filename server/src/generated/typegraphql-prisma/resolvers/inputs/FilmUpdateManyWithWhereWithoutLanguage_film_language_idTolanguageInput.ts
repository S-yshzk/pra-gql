import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmScalarWhereInput } from "../inputs/FilmScalarWhereInput";
import { FilmUpdateManyMutationInput } from "../inputs/FilmUpdateManyMutationInput";

@TypeGraphQL.InputType("FilmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput", {})
export class FilmUpdateManyWithWhereWithoutLanguage_film_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => FilmScalarWhereInput, {
    nullable: false
  })
  where!: FilmScalarWhereInput;

  @TypeGraphQL.Field(_type => FilmUpdateManyMutationInput, {
    nullable: false
  })
  data!: FilmUpdateManyMutationInput;
}
