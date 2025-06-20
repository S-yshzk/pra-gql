import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateNestedOneWithoutFilm_categoryInput } from "../inputs/FilmCreateNestedOneWithoutFilm_categoryInput";

@TypeGraphQL.InputType("Film_categoryCreateWithoutCategoryInput", {})
export class Film_categoryCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => FilmCreateNestedOneWithoutFilm_categoryInput, {
    nullable: false
  })
  film!: FilmCreateNestedOneWithoutFilm_categoryInput;
}
