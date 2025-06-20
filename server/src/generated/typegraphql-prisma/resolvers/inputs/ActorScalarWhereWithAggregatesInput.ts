import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActorScalarWhereWithAggregatesInput", {})
export class ActorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  actor_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  first_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  last_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  last_update?: DateTimeWithAggregatesFilter | undefined;
}
