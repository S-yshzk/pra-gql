import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Film_categoryListRelationFilter } from "../inputs/Film_categoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategoryWhereUniqueInput", {})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category_id?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  AND?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  OR?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  NOT?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Film_categoryListRelationFilter, {
    nullable: true
  })
  film_category?: Film_categoryListRelationFilter | undefined;
}
