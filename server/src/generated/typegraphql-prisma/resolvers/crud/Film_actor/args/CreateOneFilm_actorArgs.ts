import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorCreateInput } from "../../../inputs/Film_actorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorCreateInput, {
    nullable: false
  })
  data!: Film_actorCreateInput;
}
