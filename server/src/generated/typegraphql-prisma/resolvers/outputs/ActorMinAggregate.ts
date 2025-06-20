import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ActorMinAggregate", {})
export class ActorMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  actor_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update!: Date | null;
}
