import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryOrderByWithAggregationInput } from "../../../inputs/InventoryOrderByWithAggregationInput";
import { InventoryScalarWhereWithAggregatesInput } from "../../../inputs/InventoryScalarWhereWithAggregatesInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";
import { InventoryScalarFieldEnum } from "../../../../enums/InventoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  where?: InventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InventoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InventoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"inventory_id" | "film_id" | "store_id" | "last_update">;

  @TypeGraphQL.Field(_type => InventoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InventoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
