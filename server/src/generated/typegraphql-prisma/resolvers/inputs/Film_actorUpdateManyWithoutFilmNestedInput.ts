import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateManyFilmInputEnvelope } from "../inputs/Film_actorCreateManyFilmInputEnvelope";
import { Film_actorCreateOrConnectWithoutFilmInput } from "../inputs/Film_actorCreateOrConnectWithoutFilmInput";
import { Film_actorCreateWithoutFilmInput } from "../inputs/Film_actorCreateWithoutFilmInput";
import { Film_actorScalarWhereInput } from "../inputs/Film_actorScalarWhereInput";
import { Film_actorUpdateManyWithWhereWithoutFilmInput } from "../inputs/Film_actorUpdateManyWithWhereWithoutFilmInput";
import { Film_actorUpdateWithWhereUniqueWithoutFilmInput } from "../inputs/Film_actorUpdateWithWhereUniqueWithoutFilmInput";
import { Film_actorUpsertWithWhereUniqueWithoutFilmInput } from "../inputs/Film_actorUpsertWithWhereUniqueWithoutFilmInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorUpdateManyWithoutFilmNestedInput", {})
export class Film_actorUpdateManyWithoutFilmNestedInput {
  @TypeGraphQL.Field(_type => [Film_actorCreateWithoutFilmInput], {
    nullable: true
  })
  create?: Film_actorCreateWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorCreateOrConnectWithoutFilmInput], {
    nullable: true
  })
  connectOrCreate?: Film_actorCreateOrConnectWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorUpsertWithWhereUniqueWithoutFilmInput], {
    nullable: true
  })
  upsert?: Film_actorUpsertWithWhereUniqueWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_actorCreateManyFilmInputEnvelope, {
    nullable: true
  })
  createMany?: Film_actorCreateManyFilmInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereUniqueInput], {
    nullable: true
  })
  set?: Film_actorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Film_actorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereUniqueInput], {
    nullable: true
  })
  delete?: Film_actorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereUniqueInput], {
    nullable: true
  })
  connect?: Film_actorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorUpdateWithWhereUniqueWithoutFilmInput], {
    nullable: true
  })
  update?: Film_actorUpdateWithWhereUniqueWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorUpdateManyWithWhereWithoutFilmInput], {
    nullable: true
  })
  updateMany?: Film_actorUpdateManyWithWhereWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Film_actorScalarWhereInput[] | undefined;
}
