import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { Film } from "../models/Film";

@TypeGraphQL.ObjectType("Film_category", {})
export class Film_category {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  film_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  category?: Category;

  film?: Film;
}
