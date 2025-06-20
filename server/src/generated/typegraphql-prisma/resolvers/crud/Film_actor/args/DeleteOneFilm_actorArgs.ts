import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorWhereUniqueInput } from "../../../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;
}
