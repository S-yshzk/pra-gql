import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorUpdateWithoutFilmInput } from "../inputs/Film_actorUpdateWithoutFilmInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorUpdateWithWhereUniqueWithoutFilmInput", {})
export class Film_actorUpdateWithWhereUniqueWithoutFilmInput {
  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_actorUpdateWithoutFilmInput, {
    nullable: false
  })
  data!: Film_actorUpdateWithoutFilmInput;
}
