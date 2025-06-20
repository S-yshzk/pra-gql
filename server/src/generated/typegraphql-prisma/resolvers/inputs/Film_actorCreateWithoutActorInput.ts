import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateNestedOneWithoutFilm_actorInput } from "../inputs/FilmCreateNestedOneWithoutFilm_actorInput";

@TypeGraphQL.InputType("Film_actorCreateWithoutActorInput", {})
export class Film_actorCreateWithoutActorInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => FilmCreateNestedOneWithoutFilm_actorInput, {
    nullable: false
  })
  film!: FilmCreateNestedOneWithoutFilm_actorInput;
}
