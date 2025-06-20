import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedOneWithoutCustomerInput } from "../inputs/AddressCreateNestedOneWithoutCustomerInput";
import { PaymentCreateNestedManyWithoutCustomerInput } from "../inputs/PaymentCreateNestedManyWithoutCustomerInput";
import { StoreCreateNestedOneWithoutCustomerInput } from "../inputs/StoreCreateNestedOneWithoutCustomerInput";

@TypeGraphQL.InputType("CustomerCreateWithoutRentalInput", {})
export class CustomerCreateWithoutRentalInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  create_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutCustomerInput, {
    nullable: false
  })
  address!: AddressCreateNestedOneWithoutCustomerInput;

  @TypeGraphQL.Field(_type => StoreCreateNestedOneWithoutCustomerInput, {
    nullable: false
  })
  store!: StoreCreateNestedOneWithoutCustomerInput;

  @TypeGraphQL.Field(_type => PaymentCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  payment?: PaymentCreateNestedManyWithoutCustomerInput | undefined;
}
