import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorUpdateWithoutActorInput } from "../inputs/Film_actorUpdateWithoutActorInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorUpdateWithWhereUniqueWithoutActorInput", {})
export class Film_actorUpdateWithWhereUniqueWithoutActorInput {
  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_actorUpdateWithoutActorInput, {
    nullable: false
  })
  data!: Film_actorUpdateWithoutActorInput;
}
