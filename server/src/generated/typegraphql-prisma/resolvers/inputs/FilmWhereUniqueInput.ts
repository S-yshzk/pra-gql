import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { Enumfilm_ratingNullableFilter } from "../inputs/Enumfilm_ratingNullableFilter";
import { FilmWhereInput } from "../inputs/FilmWhereInput";
import { Film_actorListRelationFilter } from "../inputs/Film_actorListRelationFilter";
import { Film_categoryListRelationFilter } from "../inputs/Film_categoryListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { InventoryListRelationFilter } from "../inputs/InventoryListRelationFilter";
import { LanguageNullableRelationFilter } from "../inputs/LanguageNullableRelationFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FilmWhereUniqueInput", {})
export class FilmWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  film_id?: number | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereInput], {
    nullable: true
  })
  AND?: FilmWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereInput], {
    nullable: true
  })
  OR?: FilmWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmWhereInput], {
    nullable: true
  })
  NOT?: FilmWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  release_year?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  language_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  original_language_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rental_duration?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  rental_rate?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  length?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  replacement_cost?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => Enumfilm_ratingNullableFilter, {
    nullable: true
  })
  rating?: Enumfilm_ratingNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  special_features?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language_film_language_idTolanguage?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageNullableRelationFilter, {
    nullable: true
  })
  language_film_original_language_idTolanguage?: LanguageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Film_actorListRelationFilter, {
    nullable: true
  })
  film_actor?: Film_actorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Film_categoryListRelationFilter, {
    nullable: true
  })
  film_category?: Film_categoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InventoryListRelationFilter, {
    nullable: true
  })
  inventory?: InventoryListRelationFilter | undefined;
}
