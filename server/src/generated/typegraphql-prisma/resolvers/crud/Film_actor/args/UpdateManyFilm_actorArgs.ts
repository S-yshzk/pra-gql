import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorUpdateManyMutationInput } from "../../../inputs/Film_actorUpdateManyMutationInput";
import { Film_actorWhereInput } from "../../../inputs/Film_actorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorUpdateManyMutationInput, {
    nullable: false
  })
  data!: Film_actorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  where?: Film_actorWhereInput | undefined;
}
