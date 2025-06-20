import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorCreateInput } from "../../../inputs/ActorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneActorArgs {
  @TypeGraphQL.Field(_type => ActorCreateInput, {
    nullable: false
  })
  data!: ActorCreateInput;
}
