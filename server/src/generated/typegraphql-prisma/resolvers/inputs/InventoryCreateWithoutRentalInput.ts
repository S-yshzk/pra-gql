import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateNestedOneWithoutInventoryInput } from "../inputs/FilmCreateNestedOneWithoutInventoryInput";
import { StoreCreateNestedOneWithoutInventoryInput } from "../inputs/StoreCreateNestedOneWithoutInventoryInput";

@TypeGraphQL.InputType("InventoryCreateWithoutRentalInput", {})
export class InventoryCreateWithoutRentalInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => FilmCreateNestedOneWithoutInventoryInput, {
    nullable: false
  })
  film!: FilmCreateNestedOneWithoutInventoryInput;

  @TypeGraphQL.Field(_type => StoreCreateNestedOneWithoutInventoryInput, {
    nullable: false
  })
  store!: StoreCreateNestedOneWithoutInventoryInput;
}
