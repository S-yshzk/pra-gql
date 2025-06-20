import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreOrderByWithAggregationInput } from "../../../inputs/StoreOrderByWithAggregationInput";
import { StoreScalarWhereWithAggregatesInput } from "../../../inputs/StoreScalarWhereWithAggregatesInput";
import { StoreWhereInput } from "../../../inputs/StoreWhereInput";
import { StoreScalarFieldEnum } from "../../../../enums/StoreScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStoreArgs {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StoreOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StoreOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"store_id" | "manager_staff_id" | "address_id" | "last_update">;

  @TypeGraphQL.Field(_type => StoreScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StoreScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
