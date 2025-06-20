import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorUpdateInput } from "../../../inputs/Film_actorUpdateInput";
import { Film_actorWhereUniqueInput } from "../../../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorUpdateInput, {
    nullable: false
  })
  data!: Film_actorUpdateInput;

  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;
}
