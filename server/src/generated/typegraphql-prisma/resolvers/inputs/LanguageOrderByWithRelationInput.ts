import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmOrderByRelationAggregateInput } from "../inputs/FilmOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LanguageOrderByWithRelationInput", {})
export class LanguageOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FilmOrderByRelationAggregateInput, {
    nullable: true
  })
  film_film_language_idTolanguage?: FilmOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FilmOrderByRelationAggregateInput, {
    nullable: true
  })
  film_film_original_language_idTolanguage?: FilmOrderByRelationAggregateInput | undefined;
}
