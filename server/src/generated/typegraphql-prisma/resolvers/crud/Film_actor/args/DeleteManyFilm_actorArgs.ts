import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorWhereInput } from "../../../inputs/Film_actorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  where?: Film_actorWhereInput | undefined;
}
