import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryOrderByWithRelationInput } from "../../../inputs/InventoryOrderByWithRelationInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";
import { InventoryScalarFieldEnum } from "../../../../enums/InventoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  where?: InventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InventoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InventoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: InventoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"inventory_id" | "film_id" | "store_id" | "last_update"> | undefined;
}
