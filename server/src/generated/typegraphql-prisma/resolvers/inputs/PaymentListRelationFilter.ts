import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentWhereInput } from "../inputs/PaymentWhereInput";

@TypeGraphQL.InputType("PaymentListRelationFilter", {})
export class PaymentListRelationFilter {
  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  every?: PaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  some?: PaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PaymentWhereInput, {
    nullable: true
  })
  none?: PaymentWhereInput | undefined;
}
