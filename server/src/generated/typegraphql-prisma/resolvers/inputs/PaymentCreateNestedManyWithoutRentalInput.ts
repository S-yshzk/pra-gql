import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyRentalInputEnvelope } from "../inputs/PaymentCreateManyRentalInputEnvelope";
import { PaymentCreateOrConnectWithoutRentalInput } from "../inputs/PaymentCreateOrConnectWithoutRentalInput";
import { PaymentCreateWithoutRentalInput } from "../inputs/PaymentCreateWithoutRentalInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentCreateNestedManyWithoutRentalInput", {})
export class PaymentCreateNestedManyWithoutRentalInput {
  @TypeGraphQL.Field(_type => [PaymentCreateWithoutRentalInput], {
    nullable: true
  })
  create?: PaymentCreateWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentCreateOrConnectWithoutRentalInput], {
    nullable: true
  })
  connectOrCreate?: PaymentCreateOrConnectWithoutRentalInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateManyRentalInputEnvelope, {
    nullable: true
  })
  createMany?: PaymentCreateManyRentalInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: PaymentWhereUniqueInput[] | undefined;
}
