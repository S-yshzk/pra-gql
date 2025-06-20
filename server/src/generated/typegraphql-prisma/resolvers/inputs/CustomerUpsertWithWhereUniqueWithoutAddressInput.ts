import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerUpdateWithoutAddressInput } from "../inputs/CustomerUpdateWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutAddressInput", {})
export class CustomerUpsertWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutAddressInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutAddressInput;
}
