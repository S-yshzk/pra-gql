import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffUpdateWithoutRentalInput } from "../inputs/StaffUpdateWithoutRentalInput";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffUpdateToOneWithWhereWithoutRentalInput", {})
export class StaffUpdateToOneWithWhereWithoutRentalInput {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutRentalInput, {
    nullable: false
  })
  data!: StaffUpdateWithoutRentalInput;
}
