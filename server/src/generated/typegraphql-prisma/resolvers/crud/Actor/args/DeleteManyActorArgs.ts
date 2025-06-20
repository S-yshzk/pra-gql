import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActorArgs {
  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  where?: ActorWhereInput | undefined;
}
