import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutRentalInput } from "../inputs/StaffCreateOrConnectWithoutRentalInput";
import { StaffCreateWithoutRentalInput } from "../inputs/StaffCreateWithoutRentalInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateNestedOneWithoutRentalInput", {})
export class StaffCreateNestedOneWithoutRentalInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutRentalInput, {
    nullable: true
  })
  create?: StaffCreateWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutRentalInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;
}
