import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryUpdateWithoutRentalInput } from "../inputs/InventoryUpdateWithoutRentalInput";
import { InventoryWhereInput } from "../inputs/InventoryWhereInput";

@TypeGraphQL.InputType("InventoryUpdateToOneWithWhereWithoutRentalInput", {})
export class InventoryUpdateToOneWithWhereWithoutRentalInput {
  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  where?: InventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => InventoryUpdateWithoutRentalInput, {
    nullable: false
  })
  data!: InventoryUpdateWithoutRentalInput;
}
