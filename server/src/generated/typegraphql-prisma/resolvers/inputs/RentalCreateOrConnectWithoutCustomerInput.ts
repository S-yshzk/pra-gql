import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateWithoutCustomerInput } from "../inputs/RentalCreateWithoutCustomerInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateOrConnectWithoutCustomerInput", {})
export class RentalCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: RentalCreateWithoutCustomerInput;
}
