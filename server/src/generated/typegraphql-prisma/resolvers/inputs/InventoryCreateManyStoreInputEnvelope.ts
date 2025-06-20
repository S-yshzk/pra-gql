import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateManyStoreInput } from "../inputs/InventoryCreateManyStoreInput";

@TypeGraphQL.InputType("InventoryCreateManyStoreInputEnvelope", {})
export class InventoryCreateManyStoreInputEnvelope {
  @TypeGraphQL.Field(_type => [InventoryCreateManyStoreInput], {
    nullable: false
  })
  data!: InventoryCreateManyStoreInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
