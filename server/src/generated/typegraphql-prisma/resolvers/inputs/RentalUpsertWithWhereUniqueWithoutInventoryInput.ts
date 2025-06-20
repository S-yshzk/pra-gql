import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateWithoutInventoryInput } from "../inputs/RentalCreateWithoutInventoryInput";
import { RentalUpdateWithoutInventoryInput } from "../inputs/RentalUpdateWithoutInventoryInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpsertWithWhereUniqueWithoutInventoryInput", {})
export class RentalUpsertWithWhereUniqueWithoutInventoryInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalUpdateWithoutInventoryInput, {
    nullable: false
  })
  update!: RentalUpdateWithoutInventoryInput;

  @TypeGraphQL.Field(_type => RentalCreateWithoutInventoryInput, {
    nullable: false
  })
  create!: RentalCreateWithoutInventoryInput;
}
