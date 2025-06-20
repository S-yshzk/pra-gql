import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateManyActorInputEnvelope } from "../inputs/Film_actorCreateManyActorInputEnvelope";
import { Film_actorCreateOrConnectWithoutActorInput } from "../inputs/Film_actorCreateOrConnectWithoutActorInput";
import { Film_actorCreateWithoutActorInput } from "../inputs/Film_actorCreateWithoutActorInput";
import { Film_actorScalarWhereInput } from "../inputs/Film_actorScalarWhereInput";
import { Film_actorUpdateManyWithWhereWithoutActorInput } from "../inputs/Film_actorUpdateManyWithWhereWithoutActorInput";
import { Film_actorUpdateWithWhereUniqueWithoutActorInput } from "../inputs/Film_actorUpdateWithWhereUniqueWithoutActorInput";
import { Film_actorUpsertWithWhereUniqueWithoutActorInput } from "../inputs/Film_actorUpsertWithWhereUniqueWithoutActorInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorUpdateManyWithoutActorNestedInput", {})
export class Film_actorUpdateManyWithoutActorNestedInput {
  @TypeGraphQL.Field(_type => [Film_actorCreateWithoutActorInput], {
    nullable: true
  })
  create?: Film_actorCreateWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorCreateOrConnectWithoutActorInput], {
    nullable: true
  })
  connectOrCreate?: Film_actorCreateOrConnectWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorUpsertWithWhereUniqueWithoutActorInput], {
    nullable: true
  })
  upsert?: Film_actorUpsertWithWhereUniqueWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_actorCreateManyActorInputEnvelope, {
    nullable: true
  })
  createMany?: Film_actorCreateManyActorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Film_actorUpdateWithWhereUniqueWithoutActorInput], {
    nullable: true
  })
  update?: Film_actorUpdateWithWhereUniqueWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorUpdateManyWithWhereWithoutActorInput], {
    nullable: true
  })
  updateMany?: Film_actorUpdateManyWithWhereWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Film_actorScalarWhereInput[] | undefined;
}
