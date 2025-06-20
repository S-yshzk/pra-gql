import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorUpdateInput } from "../../../inputs/ActorUpdateInput";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneActorArgs {
  @TypeGraphQL.Field(_type => ActorUpdateInput, {
    nullable: false
  })
  data!: ActorUpdateInput;

  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: false
  })
  where!: ActorWhereUniqueInput;
}
