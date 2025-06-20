import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutAddressInput } from "../inputs/StaffCreateWithoutAddressInput";
import { StaffUpdateWithoutAddressInput } from "../inputs/StaffUpdateWithoutAddressInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpsertWithWhereUniqueWithoutAddressInput", {})
export class StaffUpsertWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutAddressInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutAddressInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutAddressInput, {
    nullable: false
  })
  create!: StaffCreateWithoutAddressInput;
}
