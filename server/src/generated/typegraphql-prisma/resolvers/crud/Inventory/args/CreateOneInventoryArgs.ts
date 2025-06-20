import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryCreateInput } from "../../../inputs/InventoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryCreateInput, {
    nullable: false
  })
  data!: InventoryCreateInput;
}
