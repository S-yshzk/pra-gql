import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateManyCategoryInputEnvelope } from "../inputs/Film_categoryCreateManyCategoryInputEnvelope";
import { Film_categoryCreateOrConnectWithoutCategoryInput } from "../inputs/Film_categoryCreateOrConnectWithoutCategoryInput";
import { Film_categoryCreateWithoutCategoryInput } from "../inputs/Film_categoryCreateWithoutCategoryInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryCreateNestedManyWithoutCategoryInput", {})
export class Film_categoryCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [Film_categoryCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Film_categoryCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Film_categoryCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_categoryCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Film_categoryCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Film_categoryWhereUniqueInput[] | undefined;
}
