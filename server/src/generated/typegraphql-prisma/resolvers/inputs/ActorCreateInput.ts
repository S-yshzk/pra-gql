import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateNestedManyWithoutActorInput } from "../inputs/Film_actorCreateNestedManyWithoutActorInput";

@TypeGraphQL.InputType("ActorCreateInput", {})
export class ActorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => Film_actorCreateNestedManyWithoutActorInput, {
    nullable: true
  })
  film_actor?: Film_actorCreateNestedManyWithoutActorInput | undefined;
}
