import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("InventoryScalarWhereInput", {})
export class InventoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [InventoryScalarWhereInput], {
    nullable: true
  })
  AND?: InventoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarWhereInput], {
    nullable: true
  })
  OR?: InventoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarWhereInput], {
    nullable: true
  })
  NOT?: InventoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  inventory_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  film_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  store_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;
}
