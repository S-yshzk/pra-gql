import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutFilm_categoryInput } from "../inputs/CategoryCreateNestedOneWithoutFilm_categoryInput";
import { FilmCreateNestedOneWithoutFilm_categoryInput } from "../inputs/FilmCreateNestedOneWithoutFilm_categoryInput";

@TypeGraphQL.InputType("Film_categoryCreateInput", {})
export class Film_categoryCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutFilm_categoryInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutFilm_categoryInput;

  @TypeGraphQL.Field(_type => FilmCreateNestedOneWithoutFilm_categoryInput, {
    nullable: false
  })
  film!: FilmCreateNestedOneWithoutFilm_categoryInput;
}
