import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmUpdateWithoutInventoryInput } from "../inputs/FilmUpdateWithoutInventoryInput";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmUpdateToOneWithWhereWithoutInventoryInput", {})
export class FilmUpdateToOneWithWhereWithoutInventoryInput {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateWithoutInventoryInput, {
    nullable: false
  })
  data!: FilmUpdateWithoutInventoryInput;
}
