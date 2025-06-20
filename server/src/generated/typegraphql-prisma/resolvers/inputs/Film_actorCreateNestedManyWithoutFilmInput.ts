import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateManyFilmInputEnvelope } from "../inputs/Film_actorCreateManyFilmInputEnvelope";
import { Film_actorCreateOrConnectWithoutFilmInput } from "../inputs/Film_actorCreateOrConnectWithoutFilmInput";
import { Film_actorCreateWithoutFilmInput } from "../inputs/Film_actorCreateWithoutFilmInput";
import { Film_actorWhereUniqueInput } from "../inputs/Film_actorWhereUniqueInput";

@TypeGraphQL.InputType("Film_actorCreateNestedManyWithoutFilmInput", {})
export class Film_actorCreateNestedManyWithoutFilmInput {
  @TypeGraphQL.Field(_type => [Film_actorCreateWithoutFilmInput], {
    nullable: true
  })
  create?: Film_actorCreateWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorCreateOrConnectWithoutFilmInput], {
    nullable: true
  })
  connectOrCreate?: Film_actorCreateOrConnectWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_actorCreateManyFilmInputEnvelope, {
    nullable: true
  })
  createMany?: Film_actorCreateManyFilmInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Film_actorWhereUniqueInput], {
    nullable: true
  })
  connect?: Film_actorWhereUniqueInput[] | undefined;
}
