import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutFilm_categoryInput } from "../inputs/FilmCreateWithoutFilm_categoryInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateOrConnectWithoutFilm_categoryInput", {})
export class FilmCreateOrConnectWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutFilm_categoryInput, {
    nullable: false
  })
  create!: FilmCreateWithoutFilm_categoryInput;
}
