import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryCreateInput } from "../../../inputs/InventoryCreateInput";
import { InventoryUpdateInput } from "../../../inputs/InventoryUpdateInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryCreateInput, {
    nullable: false
  })
  create!: InventoryCreateInput;

  @TypeGraphQL.Field(_type => InventoryUpdateInput, {
    nullable: false
  })
  update!: InventoryUpdateInput;
}
