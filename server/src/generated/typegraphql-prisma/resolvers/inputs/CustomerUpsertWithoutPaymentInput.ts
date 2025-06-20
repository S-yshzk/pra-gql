import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPaymentInput } from "../inputs/CustomerCreateWithoutPaymentInput";
import { CustomerUpdateWithoutPaymentInput } from "../inputs/CustomerUpdateWithoutPaymentInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutPaymentInput", {})
export class CustomerUpsertWithoutPaymentInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPaymentInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutPaymentInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPaymentInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPaymentInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
