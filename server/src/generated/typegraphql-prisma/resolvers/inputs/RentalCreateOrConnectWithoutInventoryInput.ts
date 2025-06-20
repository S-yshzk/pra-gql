import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateWithoutInventoryInput } from "../inputs/RentalCreateWithoutInventoryInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateOrConnectWithoutInventoryInput", {})
export class RentalCreateOrConnectWithoutInventoryInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalCreateWithoutInventoryInput, {
    nullable: false
  })
  create!: RentalCreateWithoutInventoryInput;
}
