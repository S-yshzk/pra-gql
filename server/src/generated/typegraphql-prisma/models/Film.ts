import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Film_actor } from "../models/Film_actor";
import { Film_category } from "../models/Film_category";
import { Inventory } from "../models/Inventory";
import { Language } from "../models/Language";
import { film_rating } from "../enums/film_rating";
import { FilmCount } from "../resolvers/outputs/FilmCount";

@TypeGraphQL.ObjectType("Film", {})
export class Film {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  film_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  release_year?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  language_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  original_language_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rental_duration!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  rental_rate!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  length?: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  replacement_cost!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => film_rating, {
    nullable: true
  })
  rating?: "G" | "PG" | "PG_13" | "R" | "NC_17" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_features?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  language_film_language_idTolanguage?: Language;

  language_film_original_language_idTolanguage?: Language | null;

  film_actor?: Film_actor[];

  film_category?: Film_category[];

  inventory?: Inventory[];

  @TypeGraphQL.Field(_type => FilmCount, {
    nullable: true
  })
  _count?: FilmCount | null;
}
