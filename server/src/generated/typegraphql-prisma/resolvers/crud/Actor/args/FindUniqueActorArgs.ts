import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActorArgs {
  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: false
  })
  where!: ActorWhereUniqueInput;
}
