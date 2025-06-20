import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutCityInput } from "../inputs/AddressUpdateWithoutCityInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateWithWhereUniqueWithoutCityInput", {})
export class AddressUpdateWithWhereUniqueWithoutCityInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCityInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutCityInput;
}
