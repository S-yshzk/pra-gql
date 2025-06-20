import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffUpdateWithoutAddressInput } from "../inputs/StaffUpdateWithoutAddressInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateWithWhereUniqueWithoutAddressInput", {})
export class StaffUpdateWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutAddressInput, {
    nullable: false
  })
  data!: StaffUpdateWithoutAddressInput;
}
