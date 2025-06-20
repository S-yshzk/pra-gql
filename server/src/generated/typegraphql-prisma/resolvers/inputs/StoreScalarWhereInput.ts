import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("StoreScalarWhereInput", {})
export class StoreScalarWhereInput {
  @TypeGraphQL.Field(_type => [StoreScalarWhereInput], {
    nullable: true
  })
  AND?: StoreScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarWhereInput], {
    nullable: true
  })
  OR?: StoreScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarWhereInput], {
    nullable: true
  })
  NOT?: StoreScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  store_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  manager_staff_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  address_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;
}
