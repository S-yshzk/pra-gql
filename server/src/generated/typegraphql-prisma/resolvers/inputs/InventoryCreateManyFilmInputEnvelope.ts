import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateManyFilmInput } from "../inputs/InventoryCreateManyFilmInput";

@TypeGraphQL.InputType("InventoryCreateManyFilmInputEnvelope", {})
export class InventoryCreateManyFilmInputEnvelope {
  @TypeGraphQL.Field(_type => [InventoryCreateManyFilmInput], {
    nullable: false
  })
  data!: InventoryCreateManyFilmInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
