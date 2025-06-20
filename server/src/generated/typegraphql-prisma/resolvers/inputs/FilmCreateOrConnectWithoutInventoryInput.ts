import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateWithoutInventoryInput } from "../inputs/FilmCreateWithoutInventoryInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateOrConnectWithoutInventoryInput", {})
export class FilmCreateOrConnectWithoutInventoryInput {
  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: false
  })
  where!: FilmWhereUniqueInput;

  @TypeGraphQL.Field(_type => FilmCreateWithoutInventoryInput, {
    nullable: false
  })
  create!: FilmCreateWithoutInventoryInput;
}
