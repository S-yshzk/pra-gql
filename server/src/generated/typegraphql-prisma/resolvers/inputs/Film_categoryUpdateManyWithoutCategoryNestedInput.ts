import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateManyCategoryInputEnvelope } from "../inputs/Film_categoryCreateManyCategoryInputEnvelope";
import { Film_categoryCreateOrConnectWithoutCategoryInput } from "../inputs/Film_categoryCreateOrConnectWithoutCategoryInput";
import { Film_categoryCreateWithoutCategoryInput } from "../inputs/Film_categoryCreateWithoutCategoryInput";
import { Film_categoryScalarWhereInput } from "../inputs/Film_categoryScalarWhereInput";
import { Film_categoryUpdateManyWithWhereWithoutCategoryInput } from "../inputs/Film_categoryUpdateManyWithWhereWithoutCategoryInput";
import { Film_categoryUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/Film_categoryUpdateWithWhereUniqueWithoutCategoryInput";
import { Film_categoryUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/Film_categoryUpsertWithWhereUniqueWithoutCategoryInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryUpdateManyWithoutCategoryNestedInput", {})
export class Film_categoryUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [Film_categoryCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Film_categoryCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Film_categoryCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: Film_categoryUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_categoryCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Film_categoryCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereUniqueInput], {
    nullable: true
  })
  set?: Film_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Film_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereUniqueInput], {
    nullable: true
  })
  delete?: Film_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Film_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: Film_categoryUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: Film_categoryUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Film_categoryScalarWhereInput[] | undefined;
}
