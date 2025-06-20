import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorCreateInput } from "../../../inputs/ActorCreateInput";
import { ActorUpdateInput } from "../../../inputs/ActorUpdateInput";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneActorArgs {
  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: false
  })
  where!: ActorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorCreateInput, {
    nullable: false
  })
  create!: ActorCreateInput;

  @TypeGraphQL.Field(_type => ActorUpdateInput, {
    nullable: false
  })
  update!: ActorUpdateInput;
}
