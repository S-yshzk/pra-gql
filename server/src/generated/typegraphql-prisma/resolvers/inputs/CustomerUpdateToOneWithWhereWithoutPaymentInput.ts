import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutPaymentInput } from "../inputs/CustomerUpdateWithoutPaymentInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutPaymentInput", {})
export class CustomerUpdateToOneWithWhereWithoutPaymentInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPaymentInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutPaymentInput;
}
