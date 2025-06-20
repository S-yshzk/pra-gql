import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmUpdateWithoutFilm_actorInput } from "../inputs/FilmUpdateWithoutFilm_actorInput";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmUpdateToOneWithWhereWithoutFilm_actorInput", {})
export class FilmUpdateToOneWithWhereWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateWithoutFilm_actorInput, {
    nullable: false
  })
  data!: FilmUpdateWithoutFilm_actorInput;
}
