import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPaymentInput } from "../inputs/CustomerCreateWithoutPaymentInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutPaymentInput", {})
export class CustomerCreateOrConnectWithoutPaymentInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPaymentInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPaymentInput;
}
