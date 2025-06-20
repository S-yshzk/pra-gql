import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutInventoryInput } from "../inputs/FilmCreateWithoutInventoryInput";
import { FilmUpdateWithoutInventoryInput } from "../inputs/FilmUpdateWithoutInventoryInput";
import { FilmWhereInput } from "../inputs/FilmWhereInput";

@TypeGraphQL.InputType("FilmUpsertWithoutInventoryInput", {})
export class FilmUpsertWithoutInventoryInput {
  @TypeGraphQL.Field(_type => FilmUpdateWithoutInventoryInput, {
    nullable: false
  })
  update!: FilmUpdateWithoutInventoryInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutInventoryInput, {
    nullable: false
  })
  create!: FilmCreateWithoutInventoryInput;

  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;
}
