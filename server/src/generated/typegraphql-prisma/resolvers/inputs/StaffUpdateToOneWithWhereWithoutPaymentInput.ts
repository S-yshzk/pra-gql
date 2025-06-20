import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffUpdateWithoutPaymentInput } from "../inputs/StaffUpdateWithoutPaymentInput";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType("StaffUpdateToOneWithWhereWithoutPaymentInput", {})
export class StaffUpdateToOneWithWhereWithoutPaymentInput {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutPaymentInput, {
    nullable: false
  })
  data!: StaffUpdateWithoutPaymentInput;
}
