import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutRentalInput } from "../inputs/StaffCreateWithoutRentalInput";
import { StaffUpdateWithoutRentalInput } from "../inputs/StaffUpdateWithoutRentalInput";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffUpsertWithoutRentalInput", {})
export class StaffUpsertWithoutRentalInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutRentalInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutRentalInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutRentalInput, {
    nullable: false
  })
  create!: StaffCreateWithoutRentalInput;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;
}
