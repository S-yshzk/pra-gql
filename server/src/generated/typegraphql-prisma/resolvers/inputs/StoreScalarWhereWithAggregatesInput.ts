import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("StoreScalarWhereWithAggregatesInput", {})
export class StoreScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StoreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StoreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StoreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StoreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  store_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  manager_staff_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  address_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
