import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutFilm_actorInput } from "../inputs/FilmCreateWithoutFilm_actorInput";
import { FilmUpdateWithoutFilm_actorInput } from "../inputs/FilmUpdateWithoutFilm_actorInput";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmUpsertWithoutFilm_actorInput", {})
export class FilmUpsertWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => FilmUpdateWithoutFilm_actorInput, {
    nullable: false
  })
  update!: FilmUpdateWithoutFilm_actorInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutFilm_actorInput, {
    nullable: false
  })
  create!: FilmCreateWithoutFilm_actorInput;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;
}
