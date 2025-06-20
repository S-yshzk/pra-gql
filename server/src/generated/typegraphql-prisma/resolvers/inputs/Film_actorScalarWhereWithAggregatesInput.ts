import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Film_actorScalarWhereWithAggregatesInput", {})
export class Film_actorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Film_actorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Film_actorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Film_actorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Film_actorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  actor_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  film_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
