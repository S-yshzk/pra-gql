import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateWithoutRentalInput } from "../inputs/InventoryCreateWithoutRentalInput";
import { InventoryUpdateWithoutRentalInput } from "../inputs/InventoryUpdateWithoutRentalInput";
import { InventoryWhereInput } from "../inputs/InventoryWhereInput";

@TypeGraphQL.InputType("InventoryUpsertWithoutRentalInput", {})
export class InventoryUpsertWithoutRentalInput {
  @TypeGraphQL.Field(_type => InventoryUpdateWithoutRentalInput, {
    nullable: false
  })
  update!: InventoryUpdateWithoutRentalInput;

  @TypeGraphQL.Field(_type => InventoryCreateWithoutRentalInput, {
    nullable: false
  })
  create!: InventoryCreateWithoutRentalInput;

  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  where?: InventoryWhereInput | undefined;
}
