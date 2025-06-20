import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentCreateManyCustomerInputEnvelope } from "../inputs/PaymentCreateManyCustomerInputEnvelope";
import { PaymentCreateOrConnectWithoutCustomerInput } from "../inputs/PaymentCreateOrConnectWithoutCustomerInput";
import { PaymentCreateWithoutCustomerInput } from "../inputs/PaymentCreateWithoutCustomerInput";
import { PaymentWhereUniqueInput } from "../inputs/PaymentWhereUniqueInput";

@TypeGraphQL.InputType("PaymentCreateNestedManyWithoutCustomerInput", {})
export class PaymentCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [PaymentCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: PaymentCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: PaymentCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: PaymentWhereUniqueInput[] | undefined;
}
