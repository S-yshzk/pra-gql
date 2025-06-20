import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutAddressInput } from "../inputs/CustomerUpdateWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutAddressInput", {})
export class CustomerUpdateWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutAddressInput;
}
