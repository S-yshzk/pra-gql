import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedManyWithoutCityInput } from "../inputs/AddressCreateNestedManyWithoutCityInput";

@TypeGraphQL.InputType("CityCreateWithoutCountryInput", {})
export class CityCreateWithoutCountryInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutCityInput, {
    nullable: true
  })
  address?: AddressCreateNestedManyWithoutCityInput | undefined;
}
