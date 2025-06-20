import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CountryScalarWhereWithAggregatesInput", {})
export class CountryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CountryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CountryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CountryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CountryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  country_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  country?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
