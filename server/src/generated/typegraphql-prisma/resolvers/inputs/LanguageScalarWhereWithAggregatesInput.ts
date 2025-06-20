import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LanguageScalarWhereWithAggregatesInput", {})
export class LanguageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LanguageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LanguageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LanguageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LanguageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  language_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
