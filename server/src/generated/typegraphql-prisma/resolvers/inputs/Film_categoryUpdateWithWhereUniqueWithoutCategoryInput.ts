import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryUpdateWithoutCategoryInput } from "../inputs/Film_categoryUpdateWithoutCategoryInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryUpdateWithWhereUniqueWithoutCategoryInput", {})
export class Film_categoryUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_categoryUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Film_categoryUpdateWithoutCategoryInput;
}
