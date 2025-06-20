import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorCreateOrConnectWithoutFilm_actorInput } from "../inputs/ActorCreateOrConnectWithoutFilm_actorInput";
import { ActorCreateWithoutFilm_actorInput } from "../inputs/ActorCreateWithoutFilm_actorInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";

@TypeGraphQL.InputType("ActorCreateNestedOneWithoutFilm_actorInput", {})
export class ActorCreateNestedOneWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => ActorCreateWithoutFilm_actorInput, {
    nullable: true
  })
  create?: ActorCreateWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => ActorCreateOrConnectWithoutFilm_actorInput, {
    nullable: true
  })
  connectOrCreate?: ActorCreateOrConnectWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: true
  })
  connect?: ActorWhereUniqueInput | undefined;
}
