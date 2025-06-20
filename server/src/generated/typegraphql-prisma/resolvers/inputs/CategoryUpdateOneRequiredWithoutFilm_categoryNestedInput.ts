import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutFilm_categoryInput } from "../inputs/CategoryCreateOrConnectWithoutFilm_categoryInput";
import { CategoryCreateWithoutFilm_categoryInput } from "../inputs/CategoryCreateWithoutFilm_categoryInput";
import { CategoryUpdateToOneWithWhereWithoutFilm_categoryInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutFilm_categoryInput";
import { CategoryUpsertWithoutFilm_categoryInput } from "../inputs/CategoryUpsertWithoutFilm_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput", {})
export class CategoryUpdateOneRequiredWithoutFilm_categoryNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutFilm_categoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutFilm_categoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutFilm_categoryInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutFilm_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutFilm_categoryInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutFilm_categoryInput | undefined;
}
