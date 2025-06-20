import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCountFilm_actorArgs } from "./args/FilmCountFilm_actorArgs";
import { FilmCountFilm_categoryArgs } from "./args/FilmCountFilm_categoryArgs";
import { FilmCountInventoryArgs } from "./args/FilmCountInventoryArgs";

@TypeGraphQL.ObjectType("FilmCount", {})
export class FilmCount {
  film_actor!: number;
  film_category!: number;
  inventory!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "film_actor",
    nullable: false
  })
  getFilm_actor(@TypeGraphQL.Root() root: FilmCount, @TypeGraphQL.Args() args: FilmCountFilm_actorArgs): number {
    return root.film_actor;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "film_category",
    nullable: false
  })
  getFilm_category(@TypeGraphQL.Root() root: FilmCount, @TypeGraphQL.Args() args: FilmCountFilm_categoryArgs): number {
    return root.film_category;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inventory",
    nullable: false
  })
  getInventory(@TypeGraphQL.Root() root: FilmCount, @TypeGraphQL.Args() args: FilmCountInventoryArgs): number {
    return root.inventory;
  }
}
