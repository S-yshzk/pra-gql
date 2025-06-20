import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyStaffInputEnvelope } from "../inputs/PaymentCreateManyStaffInputEnvelope";
import { PaymentCreateOrConnectWithoutStaffInput } from "../inputs/PaymentCreateOrConnectWithoutStaffInput";
import { PaymentCreateWithoutStaffInput } from "../inputs/PaymentCreateWithoutStaffInput";
import { PaymentScalarWhereInput } from "../inputs/PaymentScalarWhereInput";
import { PaymentUpdateManyWithWhereWithoutStaffInput } from "../inputs/PaymentUpdateManyWithWhereWithoutStaffInput";
import { PaymentUpdateWithWhereUniqueWithoutStaffInput } from "../inputs/PaymentUpdateWithWhereUniqueWithoutStaffInput";
import { PaymentUpsertWithWhereUniqueWithoutStaffInput } from "../inputs/PaymentUpsertWithWhereUniqueWithoutStaffInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpdateManyWithoutStaffNestedInput", {})
export class PaymentUpdateManyWithoutStaffNestedInput {
  @TypeGraphQL.Field(_type => [PaymentCreateWithoutStaffInput], {
    nullable: true
  })
  create?: PaymentCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: PaymentCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpsertWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  upsert?: PaymentUpsertWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: PaymentCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  set?: PaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  delete?: PaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: PaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpdateWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  update?: PaymentUpdateWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpdateManyWithWhereWithoutStaffInput], {
    nullable: true
  })
  updateMany?: PaymentUpdateManyWithWhereWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PaymentScalarWhereInput[] | undefined;
}
