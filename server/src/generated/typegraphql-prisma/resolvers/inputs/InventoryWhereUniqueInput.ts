import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmRelationFilter } from "../inputs/FilmRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { InventoryWhereInput } from "../inputs/InventoryWhereInput";
import { RentalListRelationFilter } from "../inputs/RentalListRelationFilter";
import { StoreRelationFilter } from "../inputs/StoreRelationFilter";

@TypeGraphQL.InputType("InventoryWhereUniqueInput", {})
export class InventoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  inventory_id?: number | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereInput], {
    nullable: true
  })
  AND?: InventoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereInput], {
    nullable: true
  })
  OR?: InventoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereInput], {
    nullable: true
  })
  NOT?: InventoryWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => FilmRelationFilter, {
    nullable: true
  })
  film?: FilmRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StoreRelationFilter, {
    nullable: true
  })
  store?: StoreRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RentalListRelationFilter, {
    nullable: true
  })
  rental?: RentalListRelationFilter | undefined;
}
