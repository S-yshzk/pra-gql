import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutPaymentInput } from "../inputs/StaffCreateOrConnectWithoutPaymentInput";
import { StaffCreateWithoutPaymentInput } from "../inputs/StaffCreateWithoutPaymentInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateNestedOneWithoutPaymentInput", {})
export class StaffCreateNestedOneWithoutPaymentInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutPaymentInput, {
    nullable: true
  })
  create?: StaffCreateWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutPaymentInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;
}
