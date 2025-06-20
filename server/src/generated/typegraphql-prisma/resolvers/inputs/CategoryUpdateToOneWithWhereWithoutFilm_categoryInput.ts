import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutFilm_categoryInput } from "../inputs/CategoryUpdateWithoutFilm_categoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutFilm_categoryInput", {})
export class CategoryUpdateToOneWithWhereWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutFilm_categoryInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutFilm_categoryInput;
}
