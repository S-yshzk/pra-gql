import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CityScalarWhereWithAggregatesInput", {})
export class CityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  city_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  city?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  country_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
