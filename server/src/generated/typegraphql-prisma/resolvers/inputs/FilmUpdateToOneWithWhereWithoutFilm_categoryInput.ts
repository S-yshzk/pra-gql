import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmUpdateWithoutFilm_categoryInput } from "../inputs/FilmUpdateWithoutFilm_categoryInput";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmUpdateToOneWithWhereWithoutFilm_categoryInput", {})
export class FilmUpdateToOneWithWhereWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateWithoutFilm_categoryInput, {
    nullable: false
  })
  data!: FilmUpdateWithoutFilm_categoryInput;
}
