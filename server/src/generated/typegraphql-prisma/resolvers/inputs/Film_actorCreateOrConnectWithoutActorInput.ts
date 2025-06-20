import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateWithoutActorInput } from "../inputs/Film_actorCreateWithoutActorInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorCreateOrConnectWithoutActorInput", {})
export class Film_actorCreateOrConnectWithoutActorInput {
  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: false
  })
  where!: Film_actorWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_actorCreateWithoutActorInput, {
    nullable: false
  })
  create!: Film_actorCreateWithoutActorInput;
}
