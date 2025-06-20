import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutRentalInput } from "../inputs/CustomerCreateNestedOneWithoutRentalInput";
import { PaymentCreateNestedManyWithoutRentalInput } from "../inputs/PaymentCreateNestedManyWithoutRentalInput";
import { StaffCreateNestedOneWithoutRentalInput } from "../inputs/StaffCreateNestedOneWithoutRentalInput";

@TypeGraphQL.InputType("RentalCreateWithoutInventoryInput", {})
export class RentalCreateWithoutInventoryInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  rental_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  return_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => PaymentCreateNestedManyWithoutRentalInput, {
    nullable: true
  })
  payment?: PaymentCreateNestedManyWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutRentalInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutRentalInput;

  @TypeGraphQL.Field(_type => StaffCreateNestedOneWithoutRentalInput, {
    nullable: false
  })
  staff!: StaffCreateNestedOneWithoutRentalInput;
}
