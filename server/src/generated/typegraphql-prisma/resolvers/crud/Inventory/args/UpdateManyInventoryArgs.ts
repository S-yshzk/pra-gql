import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryUpdateManyMutationInput } from "../../../inputs/InventoryUpdateManyMutationInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: InventoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  where?: InventoryWhereInput | undefined;
}
