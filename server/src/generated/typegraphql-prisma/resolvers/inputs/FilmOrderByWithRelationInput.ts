import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorOrderByRelationAggregateInput } from "../inputs/Film_actorOrderByRelationAggregateInput";
import { Film_categoryOrderByRelationAggregateInput } from "../inputs/Film_categoryOrderByRelationAggregateInput";
import { InventoryOrderByRelationAggregateInput } from "../inputs/InventoryOrderByRelationAggregateInput";
import { LanguageOrderByWithRelationInput } from "../inputs/LanguageOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FilmOrderByWithRelationInput", {})
export class FilmOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  release_year?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  original_language_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_duration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  length?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  replacement_cost?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rating?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  special_features?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationInput, {
    nullable: true
  })
  language_film_language_idTolanguage?: LanguageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationInput, {
    nullable: true
  })
  language_film_original_language_idTolanguage?: LanguageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Film_actorOrderByRelationAggregateInput, {
    nullable: true
  })
  film_actor?: Film_actorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Film_categoryOrderByRelationAggregateInput, {
    nullable: true
  })
  film_category?: Film_categoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InventoryOrderByRelationAggregateInput, {
    nullable: true
  })
  inventory?: InventoryOrderByRelationAggregateInput | undefined;
}
