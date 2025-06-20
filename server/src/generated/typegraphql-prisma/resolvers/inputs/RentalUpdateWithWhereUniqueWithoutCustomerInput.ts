import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalUpdateWithoutCustomerInput } from "../inputs/RentalUpdateWithoutCustomerInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateWithWhereUniqueWithoutCustomerInput", {})
export class RentalUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: RentalUpdateWithoutCustomerInput;
}
