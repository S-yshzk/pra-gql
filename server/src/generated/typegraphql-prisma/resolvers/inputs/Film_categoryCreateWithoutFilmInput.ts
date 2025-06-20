import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutFilm_categoryInput } from "../inputs/CategoryCreateNestedOneWithoutFilm_categoryInput";

@TypeGraphQL.InputType("Film_categoryCreateWithoutFilmInput", {})
export class Film_categoryCreateWithoutFilmInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutFilm_categoryInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutFilm_categoryInput;
}
