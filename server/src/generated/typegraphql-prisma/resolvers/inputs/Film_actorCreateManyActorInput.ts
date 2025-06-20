import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Film_actorCreateManyActorInput", {})
export class Film_actorCreateManyActorInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  film_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;
}
