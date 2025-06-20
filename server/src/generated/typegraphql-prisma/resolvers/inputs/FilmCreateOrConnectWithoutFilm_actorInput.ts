import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutFilm_actorInput } from "../inputs/FilmCreateWithoutFilm_actorInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateOrConnectWithoutFilm_actorInput", {})
export class FilmCreateOrConnectWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutFilm_actorInput, {
    nullable: false
  })
  create!: FilmCreateWithoutFilm_actorInput;
}
