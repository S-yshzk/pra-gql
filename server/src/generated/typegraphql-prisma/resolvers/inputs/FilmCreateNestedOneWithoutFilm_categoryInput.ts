import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateOrConnectWithoutFilm_categoryInput } from "../inputs/FilmCreateOrConnectWithoutFilm_categoryInput";
import { FilmCreateWithoutFilm_categoryInput } from "../inputs/FilmCreateWithoutFilm_categoryInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateNestedOneWithoutFilm_categoryInput", {})
export class FilmCreateNestedOneWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => FilmCreateWithoutFilm_categoryInput, {
    nullable: true
  })
  create?: FilmCreateWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmCreateOrConnectWithoutFilm_categoryInput, {
    nullable: true
  })
  connectOrCreate?: FilmCreateOrConnectWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: true
  })
  connect?: FilmWhereUniqueInput | undefined;
}
