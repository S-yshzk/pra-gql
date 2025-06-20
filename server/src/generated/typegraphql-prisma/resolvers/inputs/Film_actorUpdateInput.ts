import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorUpdateOneRequiredWithoutFilm_actorNestedInput } from "../inputs/ActorUpdateOneRequiredWithoutFilm_actorNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FilmUpdateOneRequiredWithoutFilm_actorNestedInput } from "../inputs/FilmUpdateOneRequiredWithoutFilm_actorNestedInput";

@TypeGraphQL.InputType("Film_actorUpdateInput", {})
export class Film_actorUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_update?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActorUpdateOneRequiredWithoutFilm_actorNestedInput, {
    nullable: true
  })
  actor?: ActorUpdateOneRequiredWithoutFilm_actorNestedInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateOneRequiredWithoutFilm_actorNestedInput, {
    nullable: true
  })
  film?: FilmUpdateOneRequiredWithoutFilm_actorNestedInput | undefined;
}
