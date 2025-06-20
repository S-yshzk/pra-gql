import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountFilm_categoryArgs } from "./args/CategoryCountFilm_categoryArgs";

@TypeGraphQL.ObjectType("CategoryCount", {})
export class CategoryCount {
  film_category!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "film_category",
    nullable: false
  })
  getFilm_category(@TypeGraphQL.Root() root: CategoryCount, @TypeGraphQL.Args() args: CategoryCountFilm_categoryArgs): number {
    return root.film_category;
  }
}
