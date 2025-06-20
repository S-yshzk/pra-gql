import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorOrderByWithRelationInput } from "../../../inputs/ActorOrderByWithRelationInput";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";
import { ActorScalarFieldEnum } from "../../../../enums/ActorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyActorArgs {
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

  @TypeGraphQL.Field(_type => [ActorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"actor_id" | "first_name" | "last_name" | "last_update"> | undefined;
}
