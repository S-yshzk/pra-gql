import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Film_categoryScalarWhereWithAggregatesInput", {})
export class Film_categoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Film_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Film_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Film_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  film_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  category_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
