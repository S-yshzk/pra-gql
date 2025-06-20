import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateManyFilmInput } from "../inputs/Film_categoryCreateManyFilmInput";

@TypeGraphQL.InputType("Film_categoryCreateManyFilmInputEnvelope", {})
export class Film_categoryCreateManyFilmInputEnvelope {
  @TypeGraphQL.Field(_type => [Film_categoryCreateManyFilmInput], {
    nullable: false
  })
  data!: Film_categoryCreateManyFilmInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
