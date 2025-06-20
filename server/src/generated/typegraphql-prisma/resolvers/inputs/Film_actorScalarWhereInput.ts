import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Film_actorScalarWhereInput", {})
export class Film_actorScalarWhereInput {
  @TypeGraphQL.Field(_type => [Film_actorScalarWhereInput], {
    nullable: true
  })
  AND?: Film_actorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarWhereInput], {
    nullable: true
  })
  OR?: Film_actorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarWhereInput], {
    nullable: true
  })
  NOT?: Film_actorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  actor_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  film_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;
}
