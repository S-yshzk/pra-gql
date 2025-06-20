import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorScalarWhereInput } from "../inputs/Film_actorScalarWhereInput";
import { Film_actorUpdateManyMutationInput } from "../inputs/Film_actorUpdateManyMutationInput";

@TypeGraphQL.InputType("Film_actorUpdateManyWithWhereWithoutActorInput", {})
export class Film_actorUpdateManyWithWhereWithoutActorInput {
  @TypeGraphQL.Field(_type => Film_actorScalarWhereInput, {
    nullable: false
  })
  where!: Film_actorScalarWhereInput;

  @TypeGraphQL.Field(_type => Film_actorUpdateManyMutationInput, {
    nullable: false
  })
  data!: Film_actorUpdateManyMutationInput;
}
