import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutRentalInput } from "../inputs/StaffCreateWithoutRentalInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutRentalInput", {})
export class StaffCreateOrConnectWithoutRentalInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutRentalInput, {
    nullable: false
  })
  create!: StaffCreateWithoutRentalInput;
}
