import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorCreateInput } from "../../../inputs/Film_actorCreateInput";
import { Film_actorUpdateInput } from "../../../inputs/Film_actorUpdateInput";
import { Film_actorWhereUniqueInput } from "../../../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_actorCreateInput, {
    nullable: false
  })
  create!: Film_actorCreateInput;

  @TypeGraphQL.Field(_type => Film_actorUpdateInput, {
    nullable: false
  })
  update!: Film_actorUpdateInput;
}
