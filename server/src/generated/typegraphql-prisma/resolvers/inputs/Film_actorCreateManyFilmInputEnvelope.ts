import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateManyFilmInput } from "../inputs/Film_actorCreateManyFilmInput";

@TypeGraphQL.InputType("Film_actorCreateManyFilmInputEnvelope", {})
export class Film_actorCreateManyFilmInputEnvelope {
  @TypeGraphQL.Field(_type => [Film_actorCreateManyFilmInput], {
    nullable: false
  })
  data!: Film_actorCreateManyFilmInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
