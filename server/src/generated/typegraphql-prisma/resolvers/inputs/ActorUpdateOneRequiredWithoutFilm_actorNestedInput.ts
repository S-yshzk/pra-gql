import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorCreateOrConnectWithoutFilm_actorInput } from "../inputs/ActorCreateOrConnectWithoutFilm_actorInput";
import { ActorCreateWithoutFilm_actorInput } from "../inputs/ActorCreateWithoutFilm_actorInput";
import { ActorUpdateToOneWithWhereWithoutFilm_actorInput } from "../inputs/ActorUpdateToOneWithWhereWithoutFilm_actorInput";
import { ActorUpsertWithoutFilm_actorInput } from "../inputs/ActorUpsertWithoutFilm_actorInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";

@TypeGraphQL.InputType("ActorUpdateOneRequiredWithoutFilm_actorNestedInput", {})
export class ActorUpdateOneRequiredWithoutFilm_actorNestedInput {
  @TypeGraphQL.Field(_type => ActorCreateWithoutFilm_actorInput, {
    nullable: true
  })
  create?: ActorCreateWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => ActorCreateOrConnectWithoutFilm_actorInput, {
    nullable: true
  })
  connectOrCreate?: ActorCreateOrConnectWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => ActorUpsertWithoutFilm_actorInput, {
    nullable: true
  })
  upsert?: ActorUpsertWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: true
  })
  connect?: ActorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActorUpdateToOneWithWhereWithoutFilm_actorInput, {
    nullable: true
  })
  update?: ActorUpdateToOneWithWhereWithoutFilm_actorInput | undefined;
}
