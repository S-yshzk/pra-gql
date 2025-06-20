import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateManyCategoryInput } from "../inputs/Film_categoryCreateManyCategoryInput";

@TypeGraphQL.InputType("Film_categoryCreateManyCategoryInputEnvelope", {})
export class Film_categoryCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [Film_categoryCreateManyCategoryInput], {
    nullable: false
  })
  data!: Film_categoryCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
