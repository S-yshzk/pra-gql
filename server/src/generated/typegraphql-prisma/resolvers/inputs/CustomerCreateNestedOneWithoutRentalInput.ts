import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutRentalInput } from "../inputs/CustomerCreateOrConnectWithoutRentalInput";
import { CustomerCreateWithoutRentalInput } from "../inputs/CustomerCreateWithoutRentalInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutRentalInput", {})
export class CustomerCreateNestedOneWithoutRentalInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutRentalInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutRentalInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
