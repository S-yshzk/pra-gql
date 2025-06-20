import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutCustomerInput } from "../inputs/AddressUpdateWithoutCustomerInput";
import { AddressWhereInput } from "../inputs/AddressWhereInput";

@TypeGraphQL.InputType("AddressUpdateToOneWithWhereWithoutCustomerInput", {})
export class AddressUpdateToOneWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutCustomerInput;
}
