import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateWithoutFilmInput } from "../inputs/InventoryCreateWithoutFilmInput";
import { InventoryUpdateWithoutFilmInput } from "../inputs/InventoryUpdateWithoutFilmInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpsertWithWhereUniqueWithoutFilmInput", {})
export class InventoryUpsertWithWhereUniqueWithoutFilmInput {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryUpdateWithoutFilmInput, {
    nullable: false
  })
  update!: InventoryUpdateWithoutFilmInput;

  @TypeGraphQL.Field(_type => InventoryCreateWithoutFilmInput, {
    nullable: false
  })
  create!: InventoryCreateWithoutFilmInput;
}
