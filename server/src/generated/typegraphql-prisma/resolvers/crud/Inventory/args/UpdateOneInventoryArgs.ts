import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryUpdateInput } from "../../../inputs/InventoryUpdateInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryUpdateInput, {
    nullable: false
  })
  data!: InventoryUpdateInput;

  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;
}
