import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Film_textScalarWhereWithAggregatesInput", {})
export class Film_textScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Film_textScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Film_textScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_textScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Film_textScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_textScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Film_textScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  film_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;
}
