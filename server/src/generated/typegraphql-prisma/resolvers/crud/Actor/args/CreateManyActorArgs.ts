import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorCreateManyInput } from "../../../inputs/ActorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActorArgs {
  @TypeGraphQL.Field(_type => [ActorCreateManyInput], {
    nullable: false
  })
  data!: ActorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
