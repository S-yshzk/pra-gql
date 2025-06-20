import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutPaymentInput } from "../inputs/StaffCreateWithoutPaymentInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateOrConnectWithoutPaymentInput", {})
export class StaffCreateOrConnectWithoutPaymentInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutPaymentInput, {
    nullable: false
  })
  create!: StaffCreateWithoutPaymentInput;
}
