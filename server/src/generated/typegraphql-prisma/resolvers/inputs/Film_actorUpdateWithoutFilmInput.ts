import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorUpdateOneRequiredWithoutFilm_actorNestedInput } from "../inputs/ActorUpdateOneRequiredWithoutFilm_actorNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Film_actorUpdateWithoutFilmInput", {})
export class Film_actorUpdateWithoutFilmInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActorUpdateOneRequiredWithoutFilm_actorNestedInput, {
    nullable: true
  })
  actor?: ActorUpdateOneRequiredWithoutFilm_actorNestedInput | undefined;
}
