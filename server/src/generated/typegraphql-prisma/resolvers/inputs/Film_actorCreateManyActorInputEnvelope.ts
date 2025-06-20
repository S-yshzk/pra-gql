import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateManyActorInput } from "../inputs/Film_actorCreateManyActorInput";

@TypeGraphQL.InputType("Film_actorCreateManyActorInputEnvelope", {})
export class Film_actorCreateManyActorInputEnvelope {
  @TypeGraphQL.Field(_type => [Film_actorCreateManyActorInput], {
    nullable: false
  })
  data!: Film_actorCreateManyActorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
