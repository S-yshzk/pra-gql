import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCountRentalArgs } from "./args/InventoryCountRentalArgs";

@TypeGraphQL.ObjectType("InventoryCount", {})
export class InventoryCount {
  rental!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "rental",
    nullable: false
  })
  getRental(@TypeGraphQL.Root() root: InventoryCount, @TypeGraphQL.Args() args: InventoryCountRentalArgs): number {
    return root.rental;
  }
}
