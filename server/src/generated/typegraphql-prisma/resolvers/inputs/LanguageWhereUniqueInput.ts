import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmListRelationFilter } from "../inputs/FilmListRelationFilter";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LanguageWhereUniqueInput", {})
export class LanguageWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  language_id?: number | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  AND?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  OR?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  NOT?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FilmListRelationFilter, {
    nullable: true
  })
  film_film_language_idTolanguage?: FilmListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FilmListRelationFilter, {
    nullable: true
  })
  film_film_original_language_idTolanguage?: FilmListRelationFilter | undefined;
}
