import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryOrderByWithRelationInput } from "../../../inputs/InventoryOrderByWithRelationInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateInventoryArgs {
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
}
