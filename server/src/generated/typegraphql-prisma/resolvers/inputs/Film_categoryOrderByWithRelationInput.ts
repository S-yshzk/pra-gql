import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";
import { FilmOrderByWithRelationInput } from "../inputs/FilmOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Film_categoryOrderByWithRelationInput", {})
export class Film_categoryOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  film_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationInput, {
    nullable: true
  })
  category?: CategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => FilmOrderByWithRelationInput, {
    nullable: true
  })
  film?: FilmOrderByWithRelationInput | undefined;
}
