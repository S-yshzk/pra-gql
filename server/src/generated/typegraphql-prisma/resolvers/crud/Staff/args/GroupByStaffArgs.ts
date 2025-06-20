import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffOrderByWithAggregationInput } from "../../../inputs/StaffOrderByWithAggregationInput";
import { StaffScalarWhereWithAggregatesInput } from "../../../inputs/StaffScalarWhereWithAggregatesInput";
import { StaffWhereInput } from "../../../inputs/StaffWhereInput";
import { StaffScalarFieldEnum } from "../../../../enums/StaffScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStaffArgs {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StaffOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"staff_id" | "first_name" | "last_name" | "address_id" | "picture" | "email" | "store_id" | "active" | "username" | "password" | "last_update">;

  @TypeGraphQL.Field(_type => StaffScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StaffScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
