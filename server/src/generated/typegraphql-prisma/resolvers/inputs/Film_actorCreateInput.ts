import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorCreateNestedOneWithoutFilm_actorInput } from "../inputs/ActorCreateNestedOneWithoutFilm_actorInput";
import { FilmCreateNestedOneWithoutFilm_actorInput } from "../inputs/FilmCreateNestedOneWithoutFilm_actorInput";

@TypeGraphQL.InputType("Film_actorCreateInput", {})
export class Film_actorCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => ActorCreateNestedOneWithoutFilm_actorInput, {
    nullable: false
  })
  actor!: ActorCreateNestedOneWithoutFilm_actorInput;

  @TypeGraphQL.Field(_type => FilmCreateNestedOneWithoutFilm_actorInput, {
    nullable: false
  })
  film!: FilmCreateNestedOneWithoutFilm_actorInput;
}
