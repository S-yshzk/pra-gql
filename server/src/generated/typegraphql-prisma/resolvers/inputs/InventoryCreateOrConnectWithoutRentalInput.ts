import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateWithoutRentalInput } from "../inputs/InventoryCreateWithoutRentalInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryCreateOrConnectWithoutRentalInput", {})
export class InventoryCreateOrConnectWithoutRentalInput {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryCreateWithoutRentalInput, {
    nullable: false
  })
  create!: InventoryCreateWithoutRentalInput;
}
