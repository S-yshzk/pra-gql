import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateToOneWithWhereWithoutCustomerInput } from "../inputs/AddressUpdateToOneWithWhereWithoutCustomerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateOneRequiredWithoutCustomerNestedInput", {})
export class AddressUpdateOneRequiredWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true
  })
  connect?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateToOneWithWhereWithoutCustomerInput, {
    nullable: true
  })
  update?: AddressUpdateToOneWithWhereWithoutCustomerInput | undefined;
}
