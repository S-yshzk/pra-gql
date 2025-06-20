import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateWithoutFilmInput } from "../inputs/Film_actorCreateWithoutFilmInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorCreateOrConnectWithoutFilmInput", {})
export class Film_actorCreateOrConnectWithoutFilmInput {
  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_actorCreateWithoutFilmInput, {
    nullable: false
  })
  create!: Film_actorCreateWithoutFilmInput;
}
