import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyCustomerInputEnvelope } from "../inputs/PaymentCreateManyCustomerInputEnvelope";
import { PaymentCreateOrConnectWithoutCustomerInput } from "../inputs/PaymentCreateOrConnectWithoutCustomerInput";
import { PaymentCreateWithoutCustomerInput } from "../inputs/PaymentCreateWithoutCustomerInput";
import { PaymentScalarWhereInput } from "../inputs/PaymentScalarWhereInput";
import { PaymentUpdateManyWithWhereWithoutCustomerInput } from "../inputs/PaymentUpdateManyWithWhereWithoutCustomerInput";
import { PaymentUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/PaymentUpdateWithWhereUniqueWithoutCustomerInput";
import { PaymentUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/PaymentUpsertWithWhereUniqueWithoutCustomerInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpdateManyWithoutCustomerNestedInput", {})
export class PaymentUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [PaymentCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: PaymentCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: PaymentCreateManyCustomerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PaymentUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PaymentScalarWhereInput[] | undefined;
}
