import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyRentalInputEnvelope } from "../inputs/PaymentCreateManyRentalInputEnvelope";
import { PaymentCreateOrConnectWithoutRentalInput } from "../inputs/PaymentCreateOrConnectWithoutRentalInput";
import { PaymentCreateWithoutRentalInput } from "../inputs/PaymentCreateWithoutRentalInput";
import { PaymentScalarWhereInput } from "../inputs/PaymentScalarWhereInput";
import { PaymentUpdateManyWithWhereWithoutRentalInput } from "../inputs/PaymentUpdateManyWithWhereWithoutRentalInput";
import { PaymentUpdateWithWhereUniqueWithoutRentalInput } from "../inputs/PaymentUpdateWithWhereUniqueWithoutRentalInput";
import { PaymentUpsertWithWhereUniqueWithoutRentalInput } from "../inputs/PaymentUpsertWithWhereUniqueWithoutRentalInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentUpdateManyWithoutRentalNestedInput", {})
export class PaymentUpdateManyWithoutRentalNestedInput {
  @TypeGraphQL.Field(_type => [PaymentCreateWithoutRentalInput], {
    nullable: true
  })
  create?: PaymentCreateWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentCreateOrConnectWithoutRentalInput], {
    nullable: true
  })
  connectOrCreate?: PaymentCreateOrConnectWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpsertWithWhereUniqueWithoutRentalInput], {
    nullable: true
  })
  upsert?: PaymentUpsertWithWhereUniqueWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateManyRentalInputEnvelope, {
    nullable: true
  })
  createMany?: PaymentCreateManyRentalInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PaymentUpdateWithWhereUniqueWithoutRentalInput], {
    nullable: true
  })
  update?: PaymentUpdateWithWhereUniqueWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentUpdateManyWithWhereWithoutRentalInput], {
    nullable: true
  })
  updateMany?: PaymentUpdateManyWithWhereWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PaymentScalarWhereInput[] | undefined;
}
