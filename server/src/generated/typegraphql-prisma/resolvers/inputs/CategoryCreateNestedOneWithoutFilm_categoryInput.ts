import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutFilm_categoryInput } from "../inputs/CategoryCreateOrConnectWithoutFilm_categoryInput";
import { CategoryCreateWithoutFilm_categoryInput } from "../inputs/CategoryCreateWithoutFilm_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutFilm_categoryInput", {})
export class CategoryCreateNestedOneWithoutFilm_categoryInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutFilm_categoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutFilm_categoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
