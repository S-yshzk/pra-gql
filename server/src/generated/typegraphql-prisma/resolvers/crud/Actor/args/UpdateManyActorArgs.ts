import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorUpdateManyMutationInput } from "../../../inputs/ActorUpdateManyMutationInput";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActorArgs {
  @TypeGraphQL.Field(_type => ActorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  where?: ActorWhereInput | undefined;
}
