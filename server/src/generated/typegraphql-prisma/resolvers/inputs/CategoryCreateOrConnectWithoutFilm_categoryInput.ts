import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutFilm_categoryInput } from "../inputs/CategoryCreateWithoutFilm_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutFilm_categoryInput", {})
export class CategoryCreateOrConnectWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutFilm_categoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutFilm_categoryInput;
}
