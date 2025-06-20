import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutFilm_categoryInput } from "../inputs/CategoryCreateWithoutFilm_categoryInput";
import { CategoryUpdateWithoutFilm_categoryInput } from "../inputs/CategoryUpdateWithoutFilm_categoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutFilm_categoryInput", {})
export class CategoryUpsertWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutFilm_categoryInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutFilm_categoryInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutFilm_categoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutFilm_categoryInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
