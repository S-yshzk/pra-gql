import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerOrderByWithAggregationInput } from "../../../inputs/CustomerOrderByWithAggregationInput";
import { CustomerScalarWhereWithAggregatesInput } from "../../../inputs/CustomerScalarWhereWithAggregatesInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerScalarFieldEnum } from "../../../../enums/CustomerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CustomerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"customer_id" | "store_id" | "first_name" | "last_name" | "email" | "address_id" | "active" | "create_date" | "last_update">;

  @TypeGraphQL.Field(_type => CustomerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
