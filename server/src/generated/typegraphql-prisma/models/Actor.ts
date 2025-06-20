import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Film_actor } from "../models/Film_actor";
import { ActorCount } from "../resolvers/outputs/ActorCount";

@TypeGraphQL.ObjectType("Actor", {})
export class Actor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  actor_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  film_actor?: Film_actor[];

  @TypeGraphQL.Field(_type => ActorCount, {
    nullable: true
  })
  _count?: ActorCount | null;
}
