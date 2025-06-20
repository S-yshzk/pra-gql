import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorUpdateWithoutFilm_actorInput } from "../inputs/ActorUpdateWithoutFilm_actorInput";
import { ActorWhereInput } from "../inputs/ActorWhereInput";

@TypeGraphQL.InputType("ActorUpdateToOneWithWhereWithoutFilm_actorInput", {})
export class ActorUpdateToOneWithWhereWithoutFilm_actorInput {
  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  where?: ActorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActorUpdateWithoutFilm_actorInput, {
    nullable: false
  })
  data!: ActorUpdateWithoutFilm_actorInput;
}
