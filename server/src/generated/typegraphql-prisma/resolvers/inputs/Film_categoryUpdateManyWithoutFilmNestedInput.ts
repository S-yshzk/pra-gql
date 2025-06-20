import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateManyFilmInputEnvelope } from "../inputs/Film_categoryCreateManyFilmInputEnvelope";
import { Film_categoryCreateOrConnectWithoutFilmInput } from "../inputs/Film_categoryCreateOrConnectWithoutFilmInput";
import { Film_categoryCreateWithoutFilmInput } from "../inputs/Film_categoryCreateWithoutFilmInput";
import { Film_categoryScalarWhereInput } from "../inputs/Film_categoryScalarWhereInput";
import { Film_categoryUpdateManyWithWhereWithoutFilmInput } from "../inputs/Film_categoryUpdateManyWithWhereWithoutFilmInput";
import { Film_categoryUpdateWithWhereUniqueWithoutFilmInput } from "../inputs/Film_categoryUpdateWithWhereUniqueWithoutFilmInput";
import { Film_categoryUpsertWithWhereUniqueWithoutFilmInput } from "../inputs/Film_categoryUpsertWithWhereUniqueWithoutFilmInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryUpdateManyWithoutFilmNestedInput", {})
export class Film_categoryUpdateManyWithoutFilmNestedInput {
  @TypeGraphQL.Field(_type => [Film_categoryCreateWithoutFilmInput], {
    nullable: true
  })
  create?: Film_categoryCreateWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryCreateOrConnectWithoutFilmInput], {
    nullable: true
  })
  connectOrCreate?: Film_categoryCreateOrConnectWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryUpsertWithWhereUniqueWithoutFilmInput], {
    nullable: true
  })
  upsert?: Film_categoryUpsertWithWhereUniqueWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_categoryCreateManyFilmInputEnvelope, {
    nullable: true
  })
  createMany?: Film_categoryCreateManyFilmInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Film_categoryUpdateWithWhereUniqueWithoutFilmInput], {
    nullable: true
  })
  update?: Film_categoryUpdateWithWhereUniqueWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryUpdateManyWithWhereWithoutFilmInput], {
    nullable: true
  })
  updateMany?: Film_categoryUpdateManyWithWhereWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Film_categoryScalarWhereInput[] | undefined;
}
