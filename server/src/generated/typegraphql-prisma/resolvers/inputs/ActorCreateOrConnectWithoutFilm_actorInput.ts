import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorCreateWithoutFilm_actorInput } from "../inputs/ActorCreateWithoutFilm_actorInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";

@TypeGraphQL.InputType("ActorCreateOrConnectWithoutFilm_actorInput", {})
export class ActorCreateOrConnectWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: false
  })
  where!: ActorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorCreateWithoutFilm_actorInput, {
    nullable: false
  })
  create!: ActorCreateWithoutFilm_actorInput;
}
