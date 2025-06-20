import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorOrderByWithAggregationInput } from "../../../inputs/ActorOrderByWithAggregationInput";
import { ActorScalarWhereWithAggregatesInput } from "../../../inputs/ActorScalarWhereWithAggregatesInput";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";
import { ActorScalarFieldEnum } from "../../../../enums/ActorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActorArgs {
  @TypeGraphQL.Field(_type => ActorWhereInput, {
    nullable: true
  })
  where?: ActorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"actor_id" | "first_name" | "last_name" | "last_update">;

  @TypeGraphQL.Field(_type => ActorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
