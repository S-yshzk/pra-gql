import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyCustomerInputEnvelope } from "../inputs/RentalCreateManyCustomerInputEnvelope";
import { RentalCreateOrConnectWithoutCustomerInput } from "../inputs/RentalCreateOrConnectWithoutCustomerInput";
import { RentalCreateWithoutCustomerInput } from "../inputs/RentalCreateWithoutCustomerInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateNestedManyWithoutCustomerInput", {})
export class RentalCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [RentalCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: RentalCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: RentalCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  connect?: RentalWhereUniqueInput[] | undefined;
}
