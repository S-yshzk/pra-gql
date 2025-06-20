import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateManyActorInputEnvelope } from "../inputs/Film_actorCreateManyActorInputEnvelope";
import { Film_actorCreateOrConnectWithoutActorInput } from "../inputs/Film_actorCreateOrConnectWithoutActorInput";
import { Film_actorCreateWithoutActorInput } from "../inputs/Film_actorCreateWithoutActorInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorCreateNestedManyWithoutActorInput", {})
export class Film_actorCreateNestedManyWithoutActorInput {
  @TypeGraphQL.Field(_type => [Film_actorCreateWithoutActorInput], {
    nullable: true
  })
  create?: Film_actorCreateWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorCreateOrConnectWithoutActorInput], {
    nullable: true
  })
  connectOrCreate?: Film_actorCreateOrConnectWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_actorCreateManyActorInputEnvelope, {
    nullable: true
  })
  createMany?: Film_actorCreateManyActorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereUniqueInput], {
    nullable: true
  })
  connect?: Film_actorWhereUniqueInput[] | undefined;
}
