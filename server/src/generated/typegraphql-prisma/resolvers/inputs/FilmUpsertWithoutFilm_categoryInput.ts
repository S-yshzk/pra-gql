import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutFilm_categoryInput } from "../inputs/FilmCreateWithoutFilm_categoryInput";
import { FilmUpdateWithoutFilm_categoryInput } from "../inputs/FilmUpdateWithoutFilm_categoryInput";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmUpsertWithoutFilm_categoryInput", {})
export class FilmUpsertWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => FilmUpdateWithoutFilm_categoryInput, {
    nullable: false
  })
  update!: FilmUpdateWithoutFilm_categoryInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutFilm_categoryInput, {
    nullable: false
  })
  create!: FilmCreateWithoutFilm_categoryInput;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;
}
