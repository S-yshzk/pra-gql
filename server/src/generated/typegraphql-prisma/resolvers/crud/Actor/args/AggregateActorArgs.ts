import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorOrderByWithRelationInput } from "../../../inputs/ActorOrderByWithRelationInput";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateActorArgs {
  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  where?: ActorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ActorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
