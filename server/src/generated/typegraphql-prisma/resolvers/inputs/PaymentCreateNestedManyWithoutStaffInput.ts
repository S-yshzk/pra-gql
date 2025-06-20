import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyStaffInputEnvelope } from "../inputs/PaymentCreateManyStaffInputEnvelope";
import { PaymentCreateOrConnectWithoutStaffInput } from "../inputs/PaymentCreateOrConnectWithoutStaffInput";
import { PaymentCreateWithoutStaffInput } from "../inputs/PaymentCreateWithoutStaffInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentCreateNestedManyWithoutStaffInput", {})
export class PaymentCreateNestedManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [PaymentCreateWithoutStaffInput], {
    nullable: true
  })
  create?: PaymentCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: PaymentCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: PaymentCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: PaymentWhereUniqueInput[] | undefined;
}
