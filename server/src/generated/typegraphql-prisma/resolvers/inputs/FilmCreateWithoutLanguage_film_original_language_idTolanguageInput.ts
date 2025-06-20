import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_actorCreateNestedManyWithoutFilmInput } from "../inputs/Film_actorCreateNestedManyWithoutFilmInput";
import { Film_categoryCreateNestedManyWithoutFilmInput } from "../inputs/Film_categoryCreateNestedManyWithoutFilmInput";
import { InventoryCreateNestedManyWithoutFilmInput } from "../inputs/InventoryCreateNestedManyWithoutFilmInput";
import { LanguageCreateNestedOneWithoutFilm_film_language_idTolanguageInput } from "../inputs/LanguageCreateNestedOneWithoutFilm_film_language_idTolanguageInput";
import { film_rating } from "../../enums/film_rating";

@TypeGraphQL.InputType(
  "FilmCreateWithoutLanguage_film_original_language_idTolanguageInput",
  {}
)
export class FilmCreateWithoutLanguage_film_original_language_idTolanguageInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  release_year?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  rental_duration?: number | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  rental_rate?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  length?: number | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  replacement_cost?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => film_rating, {
    nullable: true,
  })
  rating?: "G" | "PG" | "PG_13" | "R" | "NC_17" | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  special_features?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      LanguageCreateNestedOneWithoutFilm_film_language_idTolanguageInput,
    {
      nullable: false,
    }
  )
  language_film_language_idTolanguage!: LanguageCreateNestedOneWithoutFilm_film_language_idTolanguageInput;

  @TypeGraphQL.Field((_type) => Film_actorCreateNestedManyWithoutFilmInput, {
    nullable: true,
  })
  film_actor?: Film_actorCreateNestedManyWithoutFilmInput | undefined;

  @TypeGraphQL.Field((_type) => Film_categoryCreateNestedManyWithoutFilmInput, {
    nullable: true,
  })
  film_category?: Film_categoryCreateNestedManyWithoutFilmInput | undefined;

  @TypeGraphQL.Field((_type) => InventoryCreateNestedManyWithoutFilmInput, {
    nullable: true,
  })
  inventory?: InventoryCreateNestedManyWithoutFilmInput | undefined;
}
