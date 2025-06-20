import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FilmRelationFilter } from "../inputs/FilmRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Film_categoryWhereInput", {})
export class Film_categoryWhereInput {
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
