import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorCreateWithoutFilm_actorInput } from "../inputs/ActorCreateWithoutFilm_actorInput";
import { ActorUpdateWithoutFilm_actorInput } from "../inputs/ActorUpdateWithoutFilm_actorInput";
import { ActorWhereInput } from "../inputs/ActorWhereInput";

@TypeGraphQL.InputType("ActorUpsertWithoutFilm_actorInput", {})
export class ActorUpsertWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => ActorUpdateWithoutFilm_actorInput, {
    nullable: false
  })
  update!: ActorUpdateWithoutFilm_actorInput;

  @TypeGraphQL.Field(_type => ActorCreateWithoutFilm_actorInput, {
    nullable: false
  })
  create!: ActorCreateWithoutFilm_actorInput;

  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  where?: ActorWhereInput | undefined;
}
