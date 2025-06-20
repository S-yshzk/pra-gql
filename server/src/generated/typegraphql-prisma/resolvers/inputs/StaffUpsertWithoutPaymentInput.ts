import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateWithoutPaymentInput } from "../inputs/StaffCreateWithoutPaymentInput";
import { StaffUpdateWithoutPaymentInput } from "../inputs/StaffUpdateWithoutPaymentInput";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffUpsertWithoutPaymentInput", {})
export class StaffUpsertWithoutPaymentInput {
  @TypeGraphQL.Field(_type => StaffUpdateWithoutPaymentInput, {
    nullable: false
  })
  update!: StaffUpdateWithoutPaymentInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutPaymentInput, {
    nullable: false
  })
  create!: StaffCreateWithoutPaymentInput;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;
}
