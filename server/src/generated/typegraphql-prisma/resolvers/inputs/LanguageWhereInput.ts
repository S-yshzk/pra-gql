import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmListRelationFilter } from "../inputs/FilmListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LanguageWhereInput", {})
export class LanguageWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  language_id?: IntFilter | undefined;

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
