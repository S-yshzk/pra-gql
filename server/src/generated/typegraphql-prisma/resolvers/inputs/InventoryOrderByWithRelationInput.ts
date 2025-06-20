import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmOrderByWithRelationInput } from "../inputs/FilmOrderByWithRelationInput";
import { RentalOrderByRelationAggregateInput } from "../inputs/RentalOrderByRelationAggregateInput";
import { StoreOrderByWithRelationInput } from "../inputs/StoreOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InventoryOrderByWithRelationInput", {})
export class InventoryOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  inventory_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FilmOrderByWithRelationInput, {
    nullable: true
  })
  film?: FilmOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StoreOrderByWithRelationInput, {
    nullable: true
  })
  store?: StoreOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => RentalOrderByRelationAggregateInput, {
    nullable: true
  })
  rental?: RentalOrderByRelationAggregateInput | undefined;
}
