import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateNestedOneWithoutInventoryInput } from "../inputs/FilmCreateNestedOneWithoutInventoryInput";
import { RentalCreateNestedManyWithoutInventoryInput } from "../inputs/RentalCreateNestedManyWithoutInventoryInput";

@TypeGraphQL.InputType("InventoryCreateWithoutStoreInput", {})
export class InventoryCreateWithoutStoreInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => FilmCreateNestedOneWithoutInventoryInput, {
    nullable: false
  })
  film!: FilmCreateNestedOneWithoutInventoryInput;

  @TypeGraphQL.Field(_type => RentalCreateNestedManyWithoutInventoryInput, {
    nullable: true
  })
  rental?: RentalCreateNestedManyWithoutInventoryInput | undefined;
}
