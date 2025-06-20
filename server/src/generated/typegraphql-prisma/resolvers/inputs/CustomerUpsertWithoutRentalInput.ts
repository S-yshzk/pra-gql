import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutRentalInput } from "../inputs/CustomerCreateWithoutRentalInput";
import { CustomerUpdateWithoutRentalInput } from "../inputs/CustomerUpdateWithoutRentalInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutRentalInput", {})
export class CustomerUpsertWithoutRentalInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutRentalInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutRentalInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutRentalInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutRentalInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
