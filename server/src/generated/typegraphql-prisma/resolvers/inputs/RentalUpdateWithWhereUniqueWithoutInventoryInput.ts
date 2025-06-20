import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalUpdateWithoutInventoryInput } from "../inputs/RentalUpdateWithoutInventoryInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateWithWhereUniqueWithoutInventoryInput", {})
export class RentalUpdateWithWhereUniqueWithoutInventoryInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalUpdateWithoutInventoryInput, {
    nullable: false
  })
  data!: RentalUpdateWithoutInventoryInput;
}
