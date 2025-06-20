import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateWithoutCategoryInput } from "../inputs/Film_categoryCreateWithoutCategoryInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryCreateOrConnectWithoutCategoryInput", {})
export class Film_categoryCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_categoryCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Film_categoryCreateWithoutCategoryInput;
}
