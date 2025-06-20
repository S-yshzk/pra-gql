import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalScalarWhereInput } from "../inputs/RentalScalarWhereInput";
import { RentalUpdateManyMutationInput } from "../inputs/RentalUpdateManyMutationInput";

@TypeGraphQL.InputType("RentalUpdateManyWithWhereWithoutCustomerInput", {})
export class RentalUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => RentalScalarWhereInput, {
    nullable: false
  })
  where!: RentalScalarWhereInput;

  @TypeGraphQL.Field(_type => RentalUpdateManyMutationInput, {
    nullable: false
  })
  data!: RentalUpdateManyMutationInput;
}
