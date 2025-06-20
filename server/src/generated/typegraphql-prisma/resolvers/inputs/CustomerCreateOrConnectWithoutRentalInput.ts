import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutRentalInput } from "../inputs/CustomerCreateWithoutRentalInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutRentalInput", {})
export class CustomerCreateOrConnectWithoutRentalInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutRentalInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutRentalInput;
}
