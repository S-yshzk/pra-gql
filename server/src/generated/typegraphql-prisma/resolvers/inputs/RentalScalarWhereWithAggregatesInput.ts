import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("RentalScalarWhereWithAggregatesInput", {})
export class RentalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RentalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RentalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RentalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RentalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rental_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  rental_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  inventory_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  customer_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  return_date?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  staff_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
