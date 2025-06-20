import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Film_category } from "../models/Film_category";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";

@TypeGraphQL.ObjectType("Category", {})
export class Category {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  film_category?: Film_category[];

  @TypeGraphQL.Field(_type => CategoryCount, {
    nullable: true
  })
  _count?: CategoryCount | null;
}
