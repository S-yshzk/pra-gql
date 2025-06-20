import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateNestedManyWithoutCategoryInput } from "../inputs/Film_categoryCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateInput", {})
export class CategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => Film_categoryCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  film_category?: Film_categoryCreateNestedManyWithoutCategoryInput | undefined;
}
