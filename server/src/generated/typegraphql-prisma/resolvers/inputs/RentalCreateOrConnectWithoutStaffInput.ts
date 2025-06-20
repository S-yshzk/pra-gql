import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateWithoutStaffInput } from "../inputs/RentalCreateWithoutStaffInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateOrConnectWithoutStaffInput", {})
export class RentalCreateOrConnectWithoutStaffInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalCreateWithoutStaffInput, {
    nullable: false
  })
  create!: RentalCreateWithoutStaffInput;
}
