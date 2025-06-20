import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryUpdateWithoutFilmInput } from "../inputs/InventoryUpdateWithoutFilmInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpdateWithWhereUniqueWithoutFilmInput", {})
export class InventoryUpdateWithWhereUniqueWithoutFilmInput {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => InventoryUpdateWithoutFilmInput, {
    nullable: false
  })
  data!: InventoryUpdateWithoutFilmInput;
}
