import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmRelationFilter } from "../inputs/FilmRelationFilter";
import { Film_categoryWhereInput } from "../inputs/Film_categoryWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { film_categoryFilm_idCategory_idCompoundUniqueInput } from "../inputs/film_categoryFilm_idCategory_idCompoundUniqueInput";

@TypeGraphQL.InputType("Film_categoryWhereUniqueInput", {})
export class Film_categoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => film_categoryFilm_idCategory_idCompoundUniqueInput, {
    nullable: true
  })
  film_id_category_id?: film_categoryFilm_idCategory_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereInput], {
    nullable: true
  })
  AND?: Film_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereInput], {
    nullable: true
  })
  OR?: Film_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereInput], {
    nullable: true
  })
  NOT?: Film_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  film_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  category_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FilmRelationFilter, {
    nullable: true
  })
  film?: FilmRelationFilter | undefined;
}
